<?php

function verification($name, $message, $mail){
    $errors = [];
                
    // Verification length of name
    if(strlen($name) < 3){
        $errors['name'] = 'Votre pseudo est trop court';
    }

    // Verification length of message
    if(strlen($message) < 10){
        $errors['message'] = 'Votre message est trop court';
    }

    // Verification of mail
    if(filter_var($mail, FILTER_VALIDATE_EMAIL) == false){
        $errors['email'] = 'Votre adresse email est invalide';
    }

    return $errors;
}