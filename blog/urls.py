from django.urls import path
from . import views


app_name = 'blog'

urlpatterns = [
    path('myPosts/', views.myPosts, name='my_posts'),
    path('content/<int:pk>/<slug:slug>/', views.blog_content, name='blog_content'),

]