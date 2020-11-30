const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.getElementById('small');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const password1Value = password1.value;
    const password2Value = password2.value;

    if(usernameValue ===''){
        showError(username, "Username can not be blank");
    }
    else{
        showSuccess(username);
    }

    if(validEmail(emailValue)){
        showSuccess(email);
    }
    else{
        showError(email, "Invalid Email");
    }

    if(validPassword(password1Value)){
        showSuccess(password1);
    }
    else{
        showError(password1, "Password is not valid must be of length 7-14");
    }

    if(password2Value === password1Value){
        showSuccess(password2);
    }
    else{
        showError(password2, "Password does not matched");
    }
}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = 'form-container error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className = 'form-container success';
}

function validEmail(mail) 
{
    const verify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (mail.match(verify))
    {
        return (true);
    }
        return (false);
}

function validPassword(password){
    const verifyp = /^[A-Za-z0-9]{7-14}$/;
    if(password.match(verifyp)){
        return (true);
    }
        return (false);
}