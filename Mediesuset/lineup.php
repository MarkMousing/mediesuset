<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/public_html/assets/incl/init.php";

  require_once DOCROOT . "/public_html/assets/incl/header.php";
 ?>

 <div class="lineup">
   <h2 class="col-sm-12 mr-auto mx-auto">LINE-UP</h2>
 </div>

 <div class="site-wrapper">
   <div class="mr-auto mx-auto" id="stage-navbar"></div>
   <div id="allevents-list-wrapper"></div>
 </div>

 <div class="modal fade bd-example-modal-lg" id="modal_events_details" style="border-radius: 5%;" tabindex="-1" role="dialog" aria-labelledby="modal_events_detailsTitle" aria-hidden="true">
   <div class="modal-dialog modal-lg" style="border: 1vh solid black; border-radius: 1%;" role="document">
     <div class="modal-content">
       <div class="modal-header" id="modal_events_header">
         <h5 class="modal-title" id="modal_events_detailsTitle"></h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body" id="modal_events_content"></div>
        <div class="modal-body" id="modal_events_stage"></div>
       <div class="modal-footer">
         <button type="button" class="btn" style="background-color: black; color: white;" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>

 <!-- Events JS-fil - Indeholder Fetch til API EVENTS! -->
 <script src="/public_html/assets/js/events.js"></script>

 <?php
  require_once DOCROOT . "/public_html/assets/incl/footer.php";
  ?>
