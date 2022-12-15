# Generated by Django 4.1.3 on 2022-12-15 08:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_date', models.DateTimeField(auto_created=True)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.AddField(
            model_name='member',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='member',
            name='join_date',
            field=models.DateTimeField(auto_created=True),
        ),
        migrations.AddField(
            model_name='member',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.course'),
        ),
    ]
