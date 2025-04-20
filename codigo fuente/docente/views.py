

from rest_framework import viewsets
from .serializer import docenteSerializers
from .models import docente
from .serializer import planSerializers
from .models import plan

class docenteview(viewsets.ModelViewSet):
    serializer_class=docenteSerializers
    queryset=docente.objects.all()


# Create your views here.

class planview(viewsets.ModelViewSet):
    serializer_class=planSerializers
    queryset=plan.objects.all()

