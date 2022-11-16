from django.shortcuts import render
from .models import *


def index(request):
    context = {
        'directions': Direction.objects.filter(is_published=True),
        'coaches': Coach.objects.filter(is_published=True),
    }

    return render(request, 'index.html', context)
