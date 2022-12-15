from django.contrib import admin
from . import models


# Register your models here.

@admin.register(models.Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'membership']
    list_editable = ['membership']
    list_per_page = 10
    ordering = ['first_name', 'last_name']
    search_fields = ['first_name__istartswith', 'last_name__istartswith']


@admin.register(models.Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'create_date']
    list_per_page = 10
    ordering = ['title', 'create_date']
    search_fields = ['title']
