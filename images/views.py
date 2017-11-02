from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Permission, User
from django.contrib.contenttypes.models import ContentType
from django.http import HttpResponse
from django.shortcuts import get_object_or_404


from django.http import HttpResponseRedirect
from django.shortcuts import render



def index(request):
    # user = authenticate(username='john', password='secret')
    # # A backend authenticated the credentials
    # if user is not None:
    
    #     # No backend authenticated the credentials
    # else:
    return render(request, 'images/index-logged-out.html')

# def login(request):
#     return HttpResponseRedirect('images/index-logged-in.html')