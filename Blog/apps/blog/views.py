from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions


from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostSerializer,PostListSerializer

from .pagination import smallSetPagination,MediumSetPagination,LargeSetPagination

class BlogListView(APIView):
        permission_classes = (permissions.AllowAny,)
        def get(self, request,format=None):
          if Post.objects.all().exists():
               
               
               posts=Post.objects.all()
               
               paginator=smallSetPagination()
               result=paginator.paginate_queryset(posts,request)
               
               serializers=PostListSerializer(result,many=True)
               
               
               
               return paginator.get_paginated_response({'post':serializers.data})
          else:
               return Response({'post':'no post found'},status=status.HTTP_404_NOT_FOUND)
          
          
class ListPostByCategoryView(APIView):
     permission_classes = (permissions.AllowAny,)
     def get(self, request,format=None):
          if Post.objects.all().exists():
                
               slug=request.query_params.get('slug')
               category= Category.objects.get(slug=slug)  
                           
               posts=Post.objects.order_by('-published').all()
               
               if category.parent:
                    post=post.filter(category=category)
               else:
                    if not Category.objects.filter(parent=category).exists():
                         post=post.filter(category=category)
                         
                    else:
                         sub_categories=Category.objects.filter(parent=category)
                         filtered_categories=[category]
                         
                         for cat in sub_categories:
                              filtered_categories.append(cat)
                              
                         filtered_categories=tuple(filtered_categories)
               
                         posts=posts.filter(category__in=filtered_categories)    
                              
                    
                         
               paginator=smallSetPagination()
               result=paginator.paginate_queryset(posts,request)
               serializers=PostListSerializer(result,many=True)
               
               
               return paginator.get_paginated_response({'post':serializers.data})
          else:
               return Response({'post':'no post found'},status=status.HTTP_404_NOT_FOUND)