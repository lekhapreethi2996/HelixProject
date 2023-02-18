from django.test import TestCase
from django.contrib.auth.models import User
from question.models import Post

class Test_Create_Post(TestCase):
    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            username='test_user1', password='Test12345'
        )
        test_post = Post.objects.create(
            title='what is 1+3?', description='1 plus 3 is 4 which can be obtained by addition',
        )

    def test_blog_content(self):
        post = Post.objects.get(id=1)
        title = f'{post.title}'
        description = f'{post.description}'
        self.assertEqual(title,'what is 1+3?')
        self.assertEqual(description,'1 plus 3 is 4 which can be obtained by addition')
