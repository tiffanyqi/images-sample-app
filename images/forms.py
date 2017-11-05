"""
This file powers creation of all forms. You will need to modify
the SignUpForm in order to start collecting the distinct_id.
"""

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    distinct_id = forms.CharField(widget=forms.HiddenInput(), label='')

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2')
