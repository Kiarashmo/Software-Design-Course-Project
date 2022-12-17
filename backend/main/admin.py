from django.contrib import admin

# from django.db.models import Count

from . import models


# Register your models here.

@admin.register(models.Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    list_select_related = ('user',)
    list_per_page = 10
    ordering = ('user__first_name', 'user__last_name')
    search_fields = ('first_name__istartswith', 'last_name__istartswith')


@admin.register(models.Mentor)
class MentorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    list_select_related = ('user',)
    list_per_page = 10
    ordering = ('user__first_name', 'user__last_name')
    search_fields = ('first_name__istartswith', 'last_name__istartswith')


@admin.register(models.Course)
class CourseAdmin(admin.ModelAdmin):
    def get_tags(self, obj):
        return "\n".join([t.title for t in obj.tags.all()])

    list_display = ('title', 'create_date', 'get_tags')
    list_per_page = 10
    ordering = ('title', 'create_date')
    search_fields = ('title', 'get_tags')


@admin.register(models.Tag)
class TagAdmin(admin.ModelAdmin):
    def course_count(self, obj):
        return obj.course_set.all().count()

    list_display = ('title', 'course_count')
    list_per_page = 10
    ordering = ('title',)
    search_fields = ('title', 'course_count')
