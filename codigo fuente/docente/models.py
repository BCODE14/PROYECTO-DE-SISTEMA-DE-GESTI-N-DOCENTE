from django.db import models

# Create your models here.
class docente(models.Model):
    nom_prog = models.CharField(max_length=300)
    anio=models.CharField(max_length=8)
    cant_alun=models.CharField(max_length=5)
    seccion=models.CharField(max_length=5)

    def __str__(self):
        return self.nom_prog

class plan(models.Model):
    oficio = models.CharField(max_length=300)
    curso=models.CharField(max_length=200)
    cred=models.CharField(max_length=5)
    docente=models.CharField(max_length=150)
    fecha_i=models.CharField(max_length=10)
    fecha_f=models.CharField(max_length=10)
    clases=models.CharField(max_length=10)
    estado=models.CharField(max_length=30)
    def __str__(self):
        return self.curso