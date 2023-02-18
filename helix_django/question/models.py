from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset()

    title = models.CharField(max_length=120)
    description = models.TextField()
    published = models.DateTimeField(default=timezone.now)
    objects = models.Manager()
    PostObjects = PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
