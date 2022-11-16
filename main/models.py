from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Coach(models.Model):
    image = models.ImageField('Зображення', upload_to='coach')
    caption = models.CharField('Підпис', max_length=255, unique=True)
    education = models.CharField('Освіта', max_length=255)
    achievements = models.CharField('Досягнення', max_length=255)
    is_published = models.BooleanField('Опубліковано', default=True)

    class Meta:
        verbose_name = 'Тренер'
        verbose_name_plural = 'Тренери'

    def __str__(self):
        return 'Тренер ' + self.caption


class Direction(models.Model):
    image = models.ImageField('Зображення', upload_to='direction')
    name = models.CharField('Назва', max_length=255, unique=True)
    description = models.CharField('Опис', max_length=4000)
    is_published = models.BooleanField('Опубліковано', default=True)

    class Meta:
        verbose_name = 'Напрямок клубу'
        verbose_name_plural = 'Напрямки клубу'

    def __str__(self):
        return 'Напрямок клубу ' + self.name
