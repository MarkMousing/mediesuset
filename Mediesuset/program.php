<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/public_html/assets/incl/init.php";

  require_once DOCROOT . "/public_html/assets/incl/header.php";
 ?>

 <div class="lineup">
   <h2 class="col-sm-12 mr-auto mx-auto">PROGRAM</h2>
 </div>

 <div class="site-wrapper">
   <!-- <div class="mr-auto mx-auto" id="day-navbar"></div> -->
   <ul class="row" style="justify-content: center; margin: 0; padding: 0;">
     <li class="day-navbar nav-stage-2">
       <a onclick="get_day_events('2020-07-08')" style="color: white;">Onsdag</a>
     </li>
     <li class="day-navbar nav-stage-2">
       <a onclick="get_day_events('2020-07-09')" style="color: white;">Torsdag</a>
     </li>
     <li class="day-navbar nav-stage-2">
       <a onclick="get_day_events('2020-07-10')" style="color: white;">Fredag</a>
     </li>
     <li class="day-navbar nav-stage-2">
       <a onclick="get_day_events('2020-07-11')" style="color: white;">Lørdag</a>
     </li>
   </ul>

 <div id="list-event-wrapper"></div>

</div>

 <!-- Program JS-fil - Indeholder Fetch til API PROGRAM! -->
 <script src="/public_html/assets/js/program.js"></script>

 <?php
  require_once DOCROOT . "/public_html/assets/incl/footer.php";
  ?>
