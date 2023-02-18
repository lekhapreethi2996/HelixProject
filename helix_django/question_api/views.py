from rest_framework import generics
from .serializers import PostSerializer
from question.models import Post

# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CreatePost(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeletePost(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
