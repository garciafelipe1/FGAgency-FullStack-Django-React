from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Category

class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        try:
            if Category.objects.exists():
                categories = Category.objects.all()
                result = []

                for category in categories:
                    if not category.parent:
                        item = {
                            'id': category.id,
                            'name': category.name,
                            'slug': category.slug,
                            'views': category.views,
                            'sub_categories': []
                        }

                        for sub_category in categories:
                            if sub_category.parent and sub_category.parent.id == category.id:
                                item['sub_categories'].append({
                                    'id': sub_category.id,
                                    'name': sub_category.name,
                                    'slug': sub_category.slug,
                                    'views': sub_category.views,
                                })
                        
                        result.append(item)
                
                return Response({'categories': result}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


