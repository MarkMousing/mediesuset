<?php
  require_once $_SERVER['DOCUMENT_ROOT'] . "/public_html/assets/incl/init.php";

  require_once DOCROOT . "/public_html/assets/incl/header.php";
 ?>

 <div class="container-fluid ticket">


   <div class="main-form" action="tickets.js" method="post">

   <h2>Bestil billetter</h2>
   <div class="form-group col-sm-1">
     <label for="antal">Antal*</label>
     <input id="antal" class="form-control" type="number" placeholder="0">
   </div>

   <div class="form-group col-sm-6">
     <label for="camp">Vælg Camp*</label>
     <input id="camp" class="form-control" type="text" placeholder="Camp">
   </div>


   <h2>Vælg forsendelsesmetode*</h2>
   <div class="form-group col-sm-6">
     <label for="ticketmail"> <h3>Jeg ønsker billetterne tilsendt</h3> <br> <p>Vi sender billetterne med posten</p> </label>
     <input id="ticketmail" class="form-control" type="checkbox">
   </div>

   <div class="form-group col-sm-6">
     <label for="ticketprint"> <h3>Jeg udskriver billetterne selv</h3> <br> <p>Du modtager billetterne på din email. Du skal selv udskrive dem, og du sparer således forsendelses-gebyret.</p> </label>
     <input id="ticketprint" class="form-control" type="checkbox">
   </div>


   <h2>Dine Oplysninger</h2>
   <div class="form-group">
     <label for="email">Email* Grøn = Rigtig mail. Rød = Forkert mail. Hvis rød vil bestillingen ikke blive godkendt!</label>
     <input id="email" class="form-control" type="email" placeholder="Din Email">
   </div>

   <div class="form-group">
     <label for="name">Navn*</label>
     <input id="name" class="form-control" type="text" placeholder="Dit Navn">
   </div>

   <div class="form-group">
     <label for="mobile">Mobil*</label>
     <input id="mobile" class="form-control" type="tel" placeholder="Dit Mobil Nummer">
   </div>

   <div class="form-group">
     <label for="address">Adresse*</label>
     <input id="address" class="form-control" type="text" placeholder="Adresse">
   </div>

   <div class="form-group">
     <label for="zipcode">Postnummer*</label>
     <input id="zipcode" class="form-control" type="number" placeholder="Postnummer">
   </div>

   <div class="form-group">
     <label for="city">By*</label>
     <input id="city" class="form-control" type="text" placeholder="By">
   </div>

   <button id="submit" class="btn btn-default" type="submit">Send</button>

   <div id="display"></div>

 </div>
</div>

<script src="/public_html/assets/js/tickets.js"></script>

 <?php
  require_once DOCROOT . "/public_html/assets/incl/footer.php";
  ?>
