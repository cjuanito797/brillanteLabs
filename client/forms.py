from django import forms
from Home.models import Project
class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

class ProjectCreation(forms.ModelForm):
    class Meta:
        model = Project
        fields = ()
