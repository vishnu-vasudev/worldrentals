function mandatory() {
    console.log('Hello')
    v=1
    e=document.getElementById('sign-in-email').value
    p=document.getElementById('sign-in-password').value
    if (e=='') {
        document.getElementById('empty-email').innerHTML='This field cannot be empty'
        document..getElementById('empty-email').style="color:red;"
        v=0
    }
    if (p=='') {
        document.getElementById('empty-password').innerHTML='Password must not be empty'
        document..getElementById('empty-password').style="color:red;"
        v=0
    }
    if (v==0) {
        return false
    }
}