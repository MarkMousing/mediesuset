<?php

  $dns = "mysql:host=localhost;dbname=mediesuset;charset=utf8";
  $username = "root";
  $password = "";


  try {
    $db = new PDO($dns, $username, $password);
    echo "Connection successful";
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

 ?>
