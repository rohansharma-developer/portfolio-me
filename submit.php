<?php
         $to = "rohansharma.developer@gmail.com";
         $fname = $_POST['fname'];
         $lname = $_POST['lname'];
         $email = $_POST['email'];
         $subject = $_POST['subject'];
         
         $name = $fname + " " + $lname;
         
         $header = "From: " + $email;
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$email,$subject,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
            header("contact.html");
         }else {
            echo "Message could not be sent...";
            header("contact.html");
         }
      ?>