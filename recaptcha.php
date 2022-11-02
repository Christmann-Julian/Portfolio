<?php

function recaptcha($post):bool
{
    //Verification recaptcha
    if(!empty($post)){

        require 'secret.php';
        $verifyResponse=file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.API_Key.'&response='.$post);
        $responseData=json_decode($verifyResponse);
        
        if($responseData->success){       
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
}