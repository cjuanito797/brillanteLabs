from django.contrib import admin
from .models import Project, ProjectGallery


# Register your models here.
class projectImageInline(admin.StackedInline):
    model = ProjectGallery
    extra = 1


@admin.register(ProjectGallery)
class ProjectGallery(admin.ModelAdmin):
    list_display = ['project']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['project_name', ]
    prepopulated_fields = {'project_slug': ('project_name',)}
    inlines = [
        projectImageInline
    ]
