from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from docente import views


router= routers.DefaultRouter()
router.register(r'docente',views.docenteview,'docente')
router.register(r'plan',views.planview,'plan')
urlpatterns=[

    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="docente api")),
    path('docs/', include_docs_urls(title="plan api"))

]

