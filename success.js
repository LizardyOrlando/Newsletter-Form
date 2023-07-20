'use strict'
const mobileImg = document.getElementById('mobile-img')
const email = document.querySelector('.email');
const suscribeButton = document.getElementById('suscribe-button');
const form = document.getElementById('form');
const invalidEmail = document.querySelector('.invalid-email')

form.addEventListener('submit', e => {
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email.value)) {
        invalidEmail.innerHTML = 'valid email required'
        email.classList.replace('email','incorrect')
    }else{
        swal({
                title: "Thanks for subscribing!",
                text:`A confimation email has been sent to ${email.value} Please open it and click the button inside to confirm your subscription`,
                icon: "success",
                button: "Dismiss message",
            });
    }
})

