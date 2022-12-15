from django.db import models


# Create your models here.

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
    join_date = models.DateTimeField(auto_now=True)
    membership = models.CharField(max_length=1, choices=MEMBERSHIP_CHOICES, default=MEMBERSHIP_SIMPLE)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        ordering = ['first_name', 'last_name']
