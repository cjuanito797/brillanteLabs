from . import views
from django.urls import path


app_name = "Home"

urlpatterns = [
    path("", views.home, name="home"),
    path("solutions/", views.our_solutions, name="our_solutions"),
    path("faq", views.FAQ, name="FAQ"),
    path("details/<int:id>/<slug:slug>", views.project_details, name="project_details"),
    path("solutions/professional", views.professional_projects, name="professional_projects"),
    path("solutions/educational", views.educational_projects, name="educational_projects"),
    path("aboutMe/", views.about_me, name="about_me"),
    path("contactMe/", views.contact_me, name="contact_me"),

]