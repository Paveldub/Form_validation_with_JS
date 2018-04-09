<?php
    if (isset($_POST["register"])) {
        $user = $_POST["username"];
        echo "Welcome ".$user;
    }

    $inp = $_POST['username'];

    switch($inp) {
        case 'Garry':
            echo "Griffindor";
            break;
        case 'Germiona':
            echo 'Ко мне в кабинет';
            break;
        default:
            echo 'Фу, магл';        
    }
?>