from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

from images.forms import SignUpForm


def index(request):
    try:
        user = User.objects.get(email=request.user.email())
        return render(request, 'images/index-logged-in.html')
    except:
        return render(request, 'images/index-logged-out.html')


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('index')
    else:
        form = SignUpForm()
    return render(request, 'images/signup.html', {'form': form})
