from django.contrib import admin
from .models import *


@admin.action(description='Позначити обрані дані як опубліковані')
def make_published(modeladmin, request, queryset):
    queryset.update(is_published=True)


@admin.action(description='Позначити обрані дані як НЕопубліковані')
def make_unpublished(modeladmin, request, queryset):
    queryset.update(is_published=False)


@admin.register(Direction)
class DirectionAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_published']
    actions = [make_published, make_unpublished]

    class Media:
        js = ['js/preview.js']


@admin.register(Coach)
class CoachAdmin(admin.ModelAdmin):
    list_display = ['caption', 'is_published']
    actions = [make_published, make_unpublished]

    class Media:
        js = ['js/preview.js']
