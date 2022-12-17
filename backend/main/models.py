from django.contrib import admin
from django.db import models
from django.conf import settings


# Create your models here.
class Tag(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    create_date = models.DateTimeField(auto_created=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


class Member(models.Model):
    phone = models.CharField(max_length=14)  # Example : (98) 911 111 1111
    birth_date = models.DateField(null=True, blank=True)
    join_date = models.DateTimeField(auto_created=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'

    @admin.display(ordering='user__first_name')
    def first_name(self):
        return self.user.first_name

    @admin.display(ordering='user__last_name')
    def last_name(self):
        return self.user.last_name

    class Meta:
        ordering = ['user__first_name', 'user__last_name']


class Mentor(models.Model):
    phone = models.CharField(max_length=14)  # Example : (98) 911 111 1111
    birth_date = models.DateField(null=True, blank=True)
    join_date = models.DateTimeField(auto_created=True)
    course = models.OneToOneField(Course, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'

    @admin.display(ordering='user__first_name')
    def first_name(self):
        return self.user.first_name

    @admin.display(ordering='user__last_name')
    def last_name(self):
        return self.user.last_name

    class Meta:
        ordering = ['user__first_name', 'user__last_name']
