function seller_login_validate() {
    console.log('Hello')
    v=1
    e=document.getElementById('seller-email').value
    p=document.getElementById('seller-password').value
    if (e=='') {
        document.getElementById('p-seller-email').innerHTML='This field cannot be empty'
        document.getElementById('p-seller-email').style="color:red;"
        v=0
    }
    if (p=='') {
        document.getElementById('p-seller-password').innerHTML='Password must not be empty'
        document.getElementById('p-seller-password').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
    
}

function new_seller_account_validate() {
    v=1
    e=document.getElementById('new-seller-email').value
    f=document.getElementById('new-seller-firstname').value
    s=document.getElementById('new-seller-secondname').value
    p=document.getElementById('new-seller-password').value
    if (e=='') {
        document.getElementById('newseller-email').innerHTML='Enter an email address'
        document.getElementById('newseller-email').style="color:red;"
        v=0
    }
    if (f=='') {
        document.getElementById('newseller-firstname').innerHTML='This field must not be empty'
        document.getElementById('newseller-firstname').style="color:red;"
        v=0
    }
    if (s=='') {
        document.getElementById('newseller-secondname').innerHTML='This field must not be empty'
        document.getElementById('newseller-secondname').style="color:red;"
        v=0
    }
    if (p=='') {
        document.getElementById('newseller-password').innerHTML='Password must not be empty'
        document.getElementById('newseller-password').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
}

function property_details_validate() {
    v=1
    bed=document.getElementById('inputGroupSelect01').value
    bath=document.getElementById('inputGroupSelect02').value
    p=document.getElementById('inputGroupSelect01').value
    loc=document.getElementById('location').value
    if (bed=='Select') {
        document.getElementById('p-bedrooms').innerHTML='Enter the number of bedrooms'
        document.getElementById('p-bedrooms').style="color:red;"
        v=0
    }
    if (bath=='Select') {
        document.getElementById('p-bathrooms').innerHTML='Enter the number of bathrooms'
        document.getElementById('p-bathrooms').style="color:red;"
        v=0
    }
    if (p=='Select') {
        document.getElementById('p-property-type').innerHTML='Enter the property type'
        document.getElementById('p-property-type').style="color:red;"
        v=0
    }
    if (loc=='') {
        document.getElementById('p-location').innerHTML='Enter the location of your property'
        document.getElementById('p-location').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
}

function property_address_validate() {
    v=1
    country=document.getElementById('add-country').value
    street=document.getElementById('add-street').value
    city=document.getElementById('add-city').value
    state=document.getElementById('add-state').value
    zip=document.getElementById('add-zip').value
    if (country=='') {
        document.getElementById('p-country').innerHTML='Enter the country'
        document.getElementById('p-country').style="color:red;"
        v=0
    }
    if (street=='') {
        document.getElementById('p-street').innerHTML='Enter the street address'
        document.getElementById('p-street').style="color:red;"
        v=0
    }
    if (city=='') {
        document.getElementById('p-city').innerHTML='Enter the city name'
        document.getElementById('p-city').style="color:red;"
        v=0
    }
    if (state=='') {
        document.getElementById('p-state').innerHTML='Enter the state'
        document.getElementById('p-state').style="color:red;"
        v=0
    }
    if (zip=='') {
        document.getElementById('p-zip').innerHTML='Enter the ZIP code'
        document.getElementById('p-zip').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
}

function property_rent_validate() {
    v=1
    i=document.getElementById('property-image').value
    r=document.getElementById('property-rent').value
    if (i=='') {
        document.getElementById('p-propertyimage').innerHTML='Choose an image '
        document.getElementById('p-propertyimage').style="color:red;"
        v=0
    }
    if (r=='') {
        document.getElementById('p-propertyrent').innerHTML='Enter the rent amount'
        document.getElementById('p-propertyrent').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
}