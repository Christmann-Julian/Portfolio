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
            body{font-family: sans-serif;}
            .page{max-width: 768px;margin: 0 auto;color: #555555;}
            h1, h2, p{padding: 1rem;}
            h1{background-color: #f4f4f4;}
            .border{border-top: 1px solid #555555;border-bottom: 1px solid #555555;}
            footer a{text-decoration: none;color: #155197;}
        </style>
    </head>
    <body>
        <div class="page">
            <header>
                <h1>Message envoyé sur le portfolio</h1>
                <p>
                    <strong>From: </strong>'.$name.'
                    <br>
                    <strong>Date: </strong>'.date("d/m/y à G:i").'
                </p>
            </header>
            <p class="border">'.$message.'</p>
            <footer>
                <p>
                    <strong>Mail: </strong>'.$mail.'
                    <br>
                    <strong>Site: </strong><a href="http://julianchristmann.fr/">julianchristmann.fr</a>
                </p>
            </footer>
        </div>
    </body>
</html>';

    return $content;
}