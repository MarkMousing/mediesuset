$(document).ready(function() {
  $("#submit").click(function() {
    let an = $("#antal").val();
    let camp = $("#camp").val();
    let tm = $("#ticketmail").val();
    let tp = $("#ticketprint").val();
    let em = $("#email").val();
    let na = $("#name").val();
    let mo = $("#mobile").val();
    let ad = $("#address").val();
    let zip = $("#zipcode").val();
    let ci = $("#city").val();

    //tm og tp er ikke inkluderet i dataString, da man skal kunne vælge én af dem og vi skal derfor ikke validere begge. Dette problem skal løses!
    let dataString = 'an1='+ an + '&camp1='+ camp + '&em1='+ em + '&na1='+ na + '&mo1='+ mo + '&ad1='+ ad + '&zip1='+ zip + '&ci1='+ ci;
    if (an=='' || camp=='' || em=='' || na=='' || mo=='' || ad=='' || zip=='' || ci=='') {
        $("#display").html("<div class='alert alert-warning'>Alle felter med * skal udfyldes!</div>");

    } else {
      $.ajax({
        type: "POST",
        url: "core/processor.php",
        data: dataString,
        cache: false,
        success: $("#display").html("<div class='success success-default'>Tak for din bestilling! Din ordre kvittering bliver sendt til din email hurtigst muligt!</div>")

      });
    }
    return false;

  });
});
