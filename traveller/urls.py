from django.urls import path
from . import views

urlpatterns = [
    path('',views.f1, name="home"),
    path('traveller-sign-up',views.f2, name="traveller-sign-up"),
    path('owner-sign-up',views.f3, name="seller-sign-up"),
    path('search-result',views.f4, name="search-result"),
    path('booking-page',views.f5, name="booking-page"),
    path('booking-confirm',views.f6, name="booking-confirm")
]