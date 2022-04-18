from django.urls import path
from . import views

urlpatterns = [
    path('',views.f1, name="home"),
    path('traveller-sign-up',views.f2, name="traveller-sign-up"),
    path('owner-sign-up',views.f3, name="seller-sign-up")
]