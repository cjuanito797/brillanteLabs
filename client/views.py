from django.shortcuts import render, redirect
from django.template.loader import get_template
from .forms import LoginForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required


# Create your views here.
def user_login(request):

    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'], password=cd['password'])

            if user is not None:
                login(request, user)

                # is this user an admin?
                # re-direct to admin page.

                return redirect('client:dashboard')
            else:
                return redirect('Home:home')
        else:
            return redirect("Home:user_login")
    else:
        form = LoginForm()
    return render(request, 'registration/login.html', {'form': form})


@login_required(login_url='/client/login/')
def dashboard(request):
    # get the currently logged-in users info and pass it into template.
    if request.user.is_authenticated:
        this_user = request.user
        if this_user.is_superuser:
            return redirect("client:myAdmin")
        else:
            return render(request, 'dashboard.html', {'this_user': this_user})


@login_required(login_url='/client/login/')
def myAdmin(request):
    if request.user.is_authenticated and request.user.is_superuser:
        this_user = request.user
    return render(request, "myAdmin.html", {'this_user': this_user})

@login_required(login_url='/client/login/')
def create_gallery(request):

    

    return render(request, "create_gallery.html")


def logout(request):
    if request.user.is_authenticated:
        request.session['is_signedIn'] = False
        logout(request)
        del request.session['is_signedIn']
        request.session.flush()
        return redirect("Home:home")

