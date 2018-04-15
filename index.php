<?php
    print_r($_POST);

    if (isset ($_POST["username"]) && isset ($_POST['password'])) {
        $user = $_POST["username"];
        print "Welcome ".$user;
    }

    print 'Отправлена форма';

    exit;
?>