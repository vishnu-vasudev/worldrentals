from django.shortcuts import render

# Create your views here.
def f1(request):
    return render(request, 'seller/seller-home.html')

def f2(request):
    return render(request, 'seller/seller-signup.html')

def f3(request):
    return render(request, 'seller/seller-details.html')