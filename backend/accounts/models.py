# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=255, blank=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class UserToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    refresh_token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Token for {self.user.username}"