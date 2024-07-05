# Generated by Django 5.0.4 on 2024-05-21 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=75)),
                ('video_link', models.URLField()),
                ('project_link', models.URLField()),
                ('story', models.TextField()),
                ('functionalities', models.TextField()),
                ('testimonial', models.TextField()),
                ('accent_color', models.CharField(max_length=50)),
                ('tag_1', models.CharField(blank=True, max_length=25)),
                ('tag_2', models.CharField(blank=True, max_length=25)),
                ('tag_3', models.CharField(blank=True, max_length=25)),
                ('project_type', models.CharField(choices=[('Professional', 'Professional'), ('Educational', 'Educational')], max_length=50)),
            ],
        ),
    ]