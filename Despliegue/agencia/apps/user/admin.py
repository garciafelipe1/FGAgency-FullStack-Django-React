from django.contrib import admin
from . import models

@admin.register(models.UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display:('first_name','last_name','email','is_staff','is_editor')
    seatch_display:('first_name','last_name','email','is_staff','is_editor',)
    