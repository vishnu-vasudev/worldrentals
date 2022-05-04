from django.shortcuts import render

# Create your views here.
def f1(request):
    return render(request, 'login-page.html')

def f2(request):
    return render(request, 'admin-home.html')

def f3(request):
    return render(request, 'admin-seller-page.html')

def f4(request):
    return render(request, 'bookings-admin.html')

def f5(request):
    return render(request, 'admin-customer-page.html')