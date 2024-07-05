from django.db import models
from django.urls import reverse


# Create your models here.
class Project(models.Model):
    project_type_choices = [
        ('Professional', 'Professional'),
        ('Educational', 'Educational')
    ]

    project_slug = models.SlugField(max_length=200, blank=True)

    project_name = models.CharField(max_length=75, blank=False)
    thumbnail = models.ImageField(upload_to='projects/', blank=True)
    video_link = models.URLField(blank=False)
    project_link = models.URLField(blank=False)
    story = models.TextField()
    functionalities = models.TextField()
    testimonial = models.TextField()
    # accent color for card design, enter in form of hex.
    accent_color = models.CharField(max_length=50, blank=False)
    tag_1 = models.CharField(max_length=25, blank=True)
    tag_2 = models.CharField(max_length=25, blank=True)
    tag_3 = models.CharField(max_length=25, blank=True)
    project_type = models.CharField(choices=project_type_choices, blank=False, max_length=50)

    def __str__(self):
        return self.project_name

    def get_absolute_url(self):
        return reverse("Home:project_details",
            args=[self.id, self.project_slug])


class ProjectGallery(models.Model):
    image = models.ImageField(upload_to='gallery/')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    caption = models.CharField(max_length=35)

    def __str__(self):
        return str(self.image)

