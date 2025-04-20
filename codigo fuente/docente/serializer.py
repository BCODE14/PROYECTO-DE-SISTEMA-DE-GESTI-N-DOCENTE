from rest_framework import serializers
from .models import docente
from .models import plan

class docenteSerializers(serializers.ModelSerializer):
    class Meta:
        model=docente
        #fields=('id','title','descripton')
        fields='__all__'#para que traigaa todos

class planSerializers(serializers.ModelSerializer):
    class Meta:
        model=plan
        #fields=('id','title','descripton')
        fields='__all__'#para que traigaa todos