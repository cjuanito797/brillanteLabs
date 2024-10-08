from . import views
from django.urls import path
from django.contrib.auth import views as auth_views


app_name = "client"


urlpatterns = [
    path("login/", auth_views.LoginView.as_view(), name="user_login"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path("myAdmin/", views.myAdmin, name="myAdmin"),
    
]