from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Contact

import requests

from  django.core.mail import send_mail

class ContactCreateView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, format=None):
        data = self.request.data
        name = data['name']
        email = data['email']
        message = data['message']
        phone= data['phone']
        subject = data['subject']
        budget = data['budget']
        
        try:
            send_mail(
                subject,
                'New Client Request: '
                + '\n\nName :'+ name 
                + '\n\nEmail: ' + email  
                + '\n\nMessage\n: ' + message 
                + '\n\nPhone: ' + phone 
                + '\n\nBudget: ' + budget,
                'FG@gmail.com',
                ['feli2003garcia@gmail.com'],
                fail_silently=False,    
                
            )
            
            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message,
                budget=budget,
            )
            return Response({'success':'message sent succesfully'})
        except:
            return Response({'error':'message not sent'})



