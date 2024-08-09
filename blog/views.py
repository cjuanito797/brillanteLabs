from django.shortcuts import render
from .models import blogPost

# Create your views here.
def myPosts(request):

    blogs = blogPost.objects.all()
    return render(request, "my_posts.html", {'blogs': blogs})

def blog_content(request, pk, slug):
    blog = blogPost.objects.get(pk=pk)
    return render(request, "blog_content.html", {'blog':blog})