from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Contact

import requests

from  django.core.mail import send_mail

from django.conf import settings



activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
activecampaingn_key = settings.ACTIVE_CAMPAIGN_KEY

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


class OptInView(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request, format=None):
        data=self.request.data
        
        email=data['email']
        tag=data['tag']
        list=data['list']
        
        try:
            
            url=activecampaign_url +'api/3/contact/sync'
            data={
                'contact':{
                    'email':email,  
                }
            }
            headers={
                'accept':'application/json',
                'Content-Type':'application/json',
                'Api-key':activecampaingn_key
                
            }
            response=requests.post(url,json=data,headers=headers)
            
            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {
                        'error':'Something went wrong when creating contact'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR 
                )
            
            contact=response.json()
            
            try:
                contact_id=str(contact['contact']['id'])
            except:
                return Response(
                    {
                        'error':'Something went wrong when creating contact ID  '},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR 
                )
            
            
            #add to the contact
          
            url=activecampaign_url+'api/3/contactTags'
            data={
                'contactTag':{
                    'contactId':contact_id,
                    'tag':tag
                }
            }
            
            response=requests.post(url,json=data,headers=headers) 
            
            
            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {
                        'error':'Something went wrong when creating contact'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
            #add contact to our master list and demo
            
            url=activecampaign_url+'api/3/contactLists'
            data={
                'contactList':{
                    'list':list,
                    'contact':contact_id,
                    'status':'1'
                }
            }
            
            response=requests.post(url,json=data,headers=headers)
            
            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {
                        'error':'Something went wrong when creating contact'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            return Response({'success':'contact added to email list'},status=status.HTTP_200_OK)
        except:
            return Response({'error':'contact adding  to email list'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        
        return Response({'success':'contact added to email list'},status=status.HTTP_200_OK)
    
