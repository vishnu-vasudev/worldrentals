function traveller_sign_in_validate() {
    v=1
    e=document.getElementById('sign-in-email').value
    p=document.getElementById('sign-in-password').value
    if (e=='') {
        document.getElementById('empty-email').innerHTML='This field cannot be empty'
        document.getElementById('empty-email').style="color:red;"
        v=0
    }
    if (p=='') {
        document.getElementById('empty-password').innerHTML='Password must not be empty'
        document.getElementById('empty-password').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
    
}

function new_traveller_account_validate() {
    v=1
    e=document.getElementById('new-traveller-email').value
    f=document.getElementById('new-traveller-firstname').value
    s=document.getElementById('new-traveller-secondname').value
    p=document.getElementById('new-traveller-password').value
    if (e=='') {
        document.getElementById('newtraveller-email').innerHTML='Enter an email address'
        document.getElementById('newtraveller-email').style="color:red;"
        v=0
    }
    if (f=='') {
        document.getElementById('newtraveller-firstname').innerHTML='This field must not be empty'
        document.getElementById('newtraveller-firstname').style="color:red;"
        v=0
    }
    if (s=='') {
        document.getElementById('newtraveller-secondname').innerHTML='This field must not be empty'
        document.getElementById('newtraveller-secondname').style="color:red;"
        v=0
    }
    if (p=='') {
        document.getElementById('newtraveller-password').innerHTML='Password must not be empty'
        document.getElementById('newtraveller-password').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }

}

function availability_validate() {
    v=1
    cin=document.getElementById('check-in').value
    cout=document.getElementById('check-out').value
    a=document.getElementById('guests').value
    if (cin=='') {
        document.getElementById('p-checkin').innerHTML='Enter check-in date'
        document.getElementById('p-checkin').style="color:red;"
        v=0
    }
    if (cout=='') {
        document.getElementById('p-checkout').innerHTML='Enter check-out date'
        document.getElementById('p-checkout').style="color:red;"
        v=0
    }
    if (a=='') {
        document.getElementById('p-guests').innerHTML='Enter the number of guests'
        document.getElementById('p-guests').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
}