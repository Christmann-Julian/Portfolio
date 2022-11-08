<?php

function verification($name, $message, $mail){
    $success = false;
                
    // Verification length of name
    if(strlen($name) < 3){
        return $success;
    }

    // Verification length of message
    if(strlen($message) < 10){
        return $success;
    }

    // Verification of mail
    if(filter_var($mail, FILTER_VALIDATE_EMAIL) == false){
        return $success;
    }

    $success = true;

    return $success;
}