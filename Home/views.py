from django.shortcuts import render
from .models import Project, ProjectGallery
from django.shortcuts import render, redirect, get_object_or_404
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import get_template


# Create your views here.
def home(request):
    return render(request, "index.html")


def our_solutions(request):
    # return all the projects from our database and pass them into template.
    projects = Project.objects.all()

    return render(request, "solutions.html", {'projects': projects})

def professional_projects(request):
    projects = Project.objects.filter(project_type='Professional')

    return render(request, "solutions.html", {'projects': projects})

def educational_projects(request):
    projects = Project.objects.filter(project_type='Educational')
    return render(request, "solutions.html", {'projects': projects})

def FAQ(request):
    return render(request, "FAQ.html")

def about_me(request):
    return render(request, "about_me.html")

def contact_me(request):
    if request.method == "POST":
        # get the content that was submitted.
        name = request.POST['name']
        occupation = request.POST['occupation']
        phone = request.POST['tel']
        email = request.POST['email']

        content = request.POST['content']

        # need to group the data and send it in an e-mail format. we will
        # make use of client side logic to ensure that all the data is
        # valid, perhaps just for the e-mail.
        send_mail(
            "Thank You For Choosing Brillante Labs",
            "Hello, We Appreciate you for reaching out to us. A "
            "representative will soon reach out to you.",
            "Don't Reply <do_not_reply@domain.example>",
            [email],
            fail_silently=False,
        )
        plaintext = get_template("email/admin_confirmation.txt")
        content = ({
            'user': name,
            'email': email,
            'phone': phone,
            'occupation': occupation,
            'details': content
        })

        text_content = plaintext.render(content)

        msg = EmailMultiAlternatives("A New Quote Has Been Created",
                                     text_content,
                                     "Don't Reply <do_not_reply@domain.example>",
                                     ['cfanito797@icloud.com'])
        msg.send()

        return redirect('Home:home')

    return render(request, "let's_talk!.html")

def project_details(request, id, slug):
    # query the correct project.

    project = get_object_or_404 (Project,
        id=id,
        project_slug=slug,
    )

    # get all the images pertaining to this project.
    gallery = ProjectGallery.objects.filter(project_id=id).all()


    return render(request, "project_details.html", {'project': project, 'gallery': gallery})
