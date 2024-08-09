from django.contrib import admin
from .models import blogPost

# Register your models here.
@admin.register(blogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title']
    prepopulated_fields = {'slug': ('title',)}