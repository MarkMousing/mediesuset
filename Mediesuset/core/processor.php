<?php
  include_once 'config.php';

    $an = $_POST['an1'];
    $camp = $_POST['camp1'];
    $em = $_POST['em1'];
    $na = $_POST['na1'];
    $mo = $_POST['mo1'];
    $ad = $_POST['ad1'];
    $zip = $_POST['zip1'];
    $ci = $_POST['ci1'];


      if (strlen($na) >= 255 || !preg_match("/^[a-zA-Z-'\s]+$/", $na)) {
          $status = "Indsæt et gyldigt navn";
      } elseif (!filter_var($em, FILTER_VALIDATE_EMAIL)) {
        $status = "Indæt en gyldig email";
      } else {

        $sql = "INSERT INTO tickets (antal, camp, email, name, mobile, address, zipcode, city) VALUES (:an, :camp, :em, :na, :mo, :ad, :zip, :ci)";

        $stmt = $db->prepare($sql);

        $stmt->execute(['an' => $an, 'camp' => $camp, 'em' => $em, 'na' => $na, 'mo' => $mo, 'ad' => $ad, 'zip' => $zip, 'ci' => $ci]);

      };

 ?>
