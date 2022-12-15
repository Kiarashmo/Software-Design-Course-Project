from django.db import models


# Create your models here.
class Tag(models.Model):
    title = models.CharField(max_length=255)
    courses = models.ManyToManyField('Course')
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
    MEMBERSHIP_SIMPLE = 'S'
    MEMBERSHIP_MENTOR = 'M'

    MEMBERSHIP_CHOICES = (
        (MEMBERSHIP_SIMPLE, 'Simple'),
        (MEMBERSHIP_MENTOR, 'Mentor')
    )
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=14)  # Example : (98) 911 111 1111
    birth_date = models.DateField(null=True, blank=True)
    join_date = models.DateTimeField(auto_created=True)
    membership = models.CharField(max_length=1, choices=MEMBERSHIP_CHOICES, default=MEMBERSHIP_SIMPLE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        ordering = ['first_name', 'last_name']
