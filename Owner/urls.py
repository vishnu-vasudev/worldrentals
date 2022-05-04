from django.urls import path
from . import views

urlpatterns = [
    path('',views.f1, name="seller-home"),
    path('seller-signup',views.f2, name="seller-sign-up"),
    path('new-seller-details',views.f3, name="new-seller-details"),
    path('property-address',views.f4, name="property-address"),
    path('seller-page',views.f5, name="seller-page"),
    path('my-properties',views.f6, name="properties"),
    path('bookings',views.f7, name="bookings-page"),
    path('new-seller-lastpage',views.f8, name="new-seller-lastpage"),
    path('seller-settings',views.f9, name="seller-settings")
]