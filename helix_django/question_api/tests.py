from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from question.models import Post
from django.contrib.auth.models import User

class PostTests(APITestCase):
    def test_view_posts(self):
        url=reverse('question_api:listcreate')
        response=self.client.get(url,format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def create_post(self):
        self.testuser1 = User.objects.create_user(
            username='test_user1', password='Test12345'
        )
        data = {"title": "what is 1+3?", "description": "1 plus 3 is 4 which can be obtained by addition"}
        url=reverse('question_api:listcreate')
        response=self.client.post(url,data,format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


