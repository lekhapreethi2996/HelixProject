from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('question.urls', namespace='question')),
    path('api/', include('question_api.urls', namespace='question_api')),
]

