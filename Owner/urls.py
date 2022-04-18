from django.urls import path
from . import views

urlpatterns = [
    path('',views.f1, name="seller-home"),
    path('/seller-signup',views.f2, name="seller-sign-up"),
    path('/seller-details',views.f3, name="seller-details")
]