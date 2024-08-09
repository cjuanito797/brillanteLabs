from django.db import models
from django.urls import reverse


# Create your models here.
class blogPost(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, max_length=150)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to='blogs/')
    email_list = models.BooleanField(default=False)


    def get_absolute_url(self):
        return reverse('blog:blog_content',
                       args=[self.id, self.slug])

