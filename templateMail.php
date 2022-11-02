<?php

function templateMail($name, $message, $mail){
    //Template mail html
    date_default_timezone_set('Europe/Paris');
    $content= '<html>
    <head>
        <meta charset="utf-8">
        <title>HTML email template</title>
        <style>
            *{margin: 0;padding: 0;box-sizing: border-box;}
            body{font-family: sans-serif;min-height: 100vh;}
            .page{width: 768px;margin:  0 auto;font-size: 16px;color: #555555;}
            h1{background-color: #f4f4f4;padding: 20px;margin-top: 20px;}
            h2{padding: 20px;}
            p{padding: 10px 20px;line-height: 26px;}	
            footer{padding: 20px;}
            footer a{text-decoration: none;color: #155197;}
        </style>
    </head>
    <body>
        <div class="page">
            <h1>Message envoyé sur le portfolio</h1>
            <h2>De '.$name.' le '.date("d/m/y à G:i").'</h2>
            <p>'.$message.'</p>
            <p><strong>Adresse mail: </strong>'.$mail.'</p>
            <footer>
                <a href="http://julianchristmann.fr/">julianchristmann.fr</a>
            </footer>
        </div>
    </body>
    </html>';

    return $content;
}