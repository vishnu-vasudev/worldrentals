from django.shortcuts import render

def f1(request):
    return render(request,'home.html')

def f2(request):
    return render(request, 'traveller-sign-up.html')

def f3(request):
    return render(request, 'seller-sign-up.html')

