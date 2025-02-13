from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
    
        class Meta:
            ordering=['-date_created',]
        
        
        def __str__(self):
            return self.email