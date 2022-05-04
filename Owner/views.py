from django.shortcuts import render

# Create your views here.
def f1(request):
    return render(request, 'seller/seller-home.html')

def f2(request):
    return render(request, 'seller/seller-signup.html')

def f3(request):
    return render(request, 'seller/new-seller-details.html')

def f4(request):
    return render(request, 'seller/property-address.html')
    
def f5(request):
    return render(request, 'seller/seller-page.html')

def f6(request):
    return render(request, 'seller/my-properties.html')

def f7(request):
    return render(request, 'seller/bookings-page.html')

def f8(request):
    return render(request, 'seller/new-seller-lastpage.html')

def f9(request):
    return render(request, 'seller/seller-settings.html')
