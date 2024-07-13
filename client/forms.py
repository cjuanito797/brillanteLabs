from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label='First name', max_length=30,
                               widget=forms.TextInput(attrs={"placeholder": "First name"}))

    password = forms.CharField(widget=forms.PasswordInput)