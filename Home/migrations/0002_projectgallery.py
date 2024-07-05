# Generated by Django 5.0.4 on 2024-05-21 14:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectGallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='gallery/')),
                ('caption', models.CharField(max_length=35)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Home.project')),
            ],
        ),
    ]
