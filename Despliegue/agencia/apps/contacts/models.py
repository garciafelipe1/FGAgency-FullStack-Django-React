from django.db import models
from django.utils import timezone

class Contact(models.Model):
    name =                  models.CharField(max_length=100)
    email=                  models.EmailField(max_length=100)
    phone=                  models.CharField(max_length=100)
    subject=                models.CharField(max_length=100)
    message=                models.TextField(blank=True)
    budget=                 models.CharField(max_length=100,blank=True)
    date_created=           models.DateTimeField(default=timezone.now)