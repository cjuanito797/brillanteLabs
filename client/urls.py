from . import views
from django.urls import path
from django.contrib.auth import views as auth_views


app_name = "client"


urlpatterns = [
    path("login/", auth_views.LoginView.as_view(), name="user_login"),
    
]