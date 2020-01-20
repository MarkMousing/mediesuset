// //Fetch programoversigt opdelt i dage og herefter scene til program siden.

async function get_day_events(date) {
  let events = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/events/get_records_by_date/" + date);

  let stages_list = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/stages/");
  // console.log(stages_list);

  for (let stage of stages_list) {
    let div_stages = document.createElement('div');
    div_stages.setAttribute("class", "row stage-" + stage.id);
    div_stages.setAttribute("style", "width: 80%; justify-content: center !important;");
    // console.log(div_stages);
    let a = document.createElement('a');
    a.innerText = stage.name;
    a.setAttribute("style", "color: white; font-size: 3em; text-align: center !important;");
    div_stages.appendChild(a);
    // console.log(a);

    

    document.getElementById('list-event-wrapper').appendChild(div_stages);
  }

}


get_day_events();
