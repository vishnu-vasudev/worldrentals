from django.shortcuts import render

def f1(request):
    return render(request,'home.html')

def f2(request):
    return render(request, 'traveller-sign-up.html')

def f3(request):
    return render(request, 'seller-sign-up.html')

def f4(request):
    return render(request, 'search-result.html')

def f5(request):
    return render(request, 'booking-page.html')

def f6(request):
    return render(request, 'booking-confirm.html')


