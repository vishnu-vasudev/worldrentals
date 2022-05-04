from django.urls import path
from . import views

urlpatterns = [
    path('',views.f1, name="login"),
    path('admin-home',views.f2, name="admin-home"),
    path('admin-seller-page',views.f3, name="admin-seller-page"),
    path('bookings-admin',views.f4, name="bookings-admin"),
    path('admin-customer-page',views.f5, name="admin-customer-page")
]