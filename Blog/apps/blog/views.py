from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models import Q

from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostSerializer,PostListSerializer

from .pagination import smallSetPagination,MediumSetPagination,LargeSetPagination

class BlogListView(APIView):
        permission_classes = (permissions.AllowAny,)
        def get(self, request,format=None):
          if Post.postobjects.all().exists():
               
               
               posts=Post.postobjects.all()
               
               paginator=smallSetPagination()
               result=paginator.paginate_queryset(posts,request)
               
               serializers=PostListSerializer(result,many=True)
               
               
               
               return paginator.get_paginated_response({'post':serializers.data})
          else:
               return Response({'post':'no post found'},status=status.HTTP_404_NOT_FOUND)
          
          
class ListPostByCategoryView(APIView):
     permission_classes = (permissions.AllowAny,)
     def get(self, request,format=None):
          if Post.postobjects.all().exists():
                
               slug=request.query_params.get('slug')
               category= Category.objects.get(slug=slug)  
                           
               posts=Post.postobjects.order_by('-published').all()
               
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
          
          
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Post.postobjects.filter(slug=slug).exists():
            # Obtener el post y serializarlo
            post = Post.postobjects.get(slug=slug)
            serializer = PostSerializer(post)
            
            # Obtener la dirección IP del usuario
            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
            
            # Verificar si la IP ya ha contado una vista para este post
            if not ViewCount.objects.filter(post=post, ip_address=ip).exists():  # Cambiado ip_adress a ip_address
                ViewCount.objects.create(post=post, ip_address=ip)  # Cambiado ip_adress a ip_address
                post.views += 1
                post.save()  # Guardar el incremento de vistas
            
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'El post no existe'}, status=status.HTTP_404_NOT_FOUND)
               
               
class SearchBlogView(APIView):
     permission_classes = (permissions.AllowAny,)
     def get(self,request,format=None):
          s= request.query_params.get('s')
          matches=Post.postobjects.filter(
               Q(title__icontains=s) |
               Q(description__icontains=s) | 
               Q(category__name__icontains=s)
               )            
          serializer=PostListSerializer(matches,many=True)
          return Response ({'filtered_post':serializer.data}, status=status.HTTP_200_OK)             
     