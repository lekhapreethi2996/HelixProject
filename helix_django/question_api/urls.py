from django.urls import path
from .views import PostList, PostDetail, CreatePost, DeletePost

app_name = 'question_api'

urlpatterns = [
    path('<int:pk>/', PostDetail.as_view(), name='detailpost'),
    path('', PostList.as_view(), name='listpost'),
    path('create/', CreatePost.as_view(), name='createpost'),
    path('delete/<int:pk>/', DeletePost.as_view(), name='deletepost'),
]


