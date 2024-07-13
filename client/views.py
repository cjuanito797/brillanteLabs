from django.shortcuts import render
from django.template.loader import get_template
from .forms import LoginForm
from django.contrib.auth import authenticate, login




# Create your views here.
def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request,
                                username=cd['username'],
                                password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('Home:home')
                else:
                    return redirect('Home:home')
            else:
                return redirect("Home:user_login")
    else:
        form = LoginForm()
    return render(request, 'registration/login.html', {'form': form})