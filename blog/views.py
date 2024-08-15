from django.shortcuts import render
from .models import blogPost
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


# Create your views here.
def myPosts(request):

    blogs = blogPost.objects.all()
    return render(request, "my_posts.html", {'blogs': blogs})

def blog_content(request, pk, slug):
    blog = blogPost.objects.get(pk=pk)
    return render(request, "blog_content.html", {'blog':blog})

def test_send_email(request):
    # get the html template and send it to cfanito797@icloud.com

    # testing for the responsiveness of our template

    blog = blogPost.objects.get(pk=4)
    content = {
        'title': blog.title,
        'content': blog.content,
        'date_posted': blog.date_posted
    }

    # iterate through our e-mail list and try to print out line by line.

    file = open ("email_list.txt", "r")
    email_list = []
    for x in file:
        email_list.append(x.strip('\n'))

    file.close()



    htmlTemplate = get_template('email.html')

    html_content = htmlTemplate.render(content)

    for email in email_list:
        msg = EmailMultiAlternatives(blog.title, html_content,
                                 settings.EMAIL_HOST_USER,
                                 [email])
        msg.attach_alternative(html_content, "text/html")

        msg.send(fail_silently=False)


    return render(request, "test_send_email.html")

def unsubscribe(request):
    # search in email_list.txt for the e-mail, and add it to list. 
    
    return render(request, "unsubscribe_success.html")