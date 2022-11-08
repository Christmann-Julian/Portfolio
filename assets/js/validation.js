let form = document.querySelector('#send');

// Listening the modification of the name
form.name.addEventListener('change', function(){
    validName(this);
});

const validName = function(inputName){
    // Retrieve the small tag
    let small = inputName.previousElementSibling;

    // Name length validation
    if(inputName.value.length < 3){
        small.innerHTML = 'Nom de 3 caractères minimum';
        small.classList.remove('alert-success');
        small.classList.add('alert-error');
        inputName.classList.add('alert-border');
        return false;
    }else{
        small.innerHTML = "Le nom est valide";
        small.classList.remove('alert-error');
        inputName.classList.remove('alert-border');
        small.classList.add('alert-success');
        return true;
    }
}

// Listening the modification of the email
form.email.addEventListener('change', function(){
    validEmail(this);
});

const validEmail = function(inputEmail){
    // RegExp for email validation
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    // Retrieve the small tag
    let small = inputEmail.previousElementSibling;

    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML = "Adresse email valide";
        small.classList.remove('alert-error');
        inputEmail.classList.remove('alert-border');
        small.classList.add('alert-success');
        return true;
    }else{
        small.innerHTML = "Adresse email invalide";
        small.classList.remove('alert-success');
        small.classList.add('alert-error');
        inputEmail.classList.add('alert-border');
        return false;
    }
}

// Listening the modification of the message
form.message.addEventListener('change', function(){
    validMessage(this);
});

const validMessage = function(inputMessage){
    // Retrieve the small tag
    let small = inputMessage.previousElementSibling;

    // Message length validation
    if(inputMessage.value.length < 10){
        small.innerHTML = 'Message de 10 caractères minimum';
        small.classList.remove('alert-success');
        small.classList.add('alert-error');
        inputMessage.classList.add('alert-border');
        return false;
    }else{
        small.innerHTML = "Le message est valide";
        small.classList.remove('alert-error');
        inputMessage.classList.remove('alert-border');
        small.classList.add('alert-success');
        return true;
    }
}

// Listening the form submit
form.addEventListener('submit', function(e){
    let response = grecaptcha.getResponse();
    
    // Cancel form submission
    e.preventDefault();

    if(response.length == 0){ 
        //recaptcha not verified
        alert("Valider le recaptcha"); 
        return false;
    }

    if(validEmail(form.email) && validName(form.name) && validMessage(form.message)){
        form.submit();
    }
});