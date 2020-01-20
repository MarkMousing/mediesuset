//Fetch API EVENTS (LINE-UP)!

async function get_stage_navbar() {
  let stages_list = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/stages/");

  // Her laver jeg line-up sidens navbar med de 4 scener.
  let ul = document.createElement('ul');
  ul.setAttribute("class", "row");
  ul.setAttribute("style", "justify-content: center; margin: 0; padding: 0;");

  // Her laver jeg et li til den enkelte scene, hvor jeg herefter sætter class på og styler dem. I nav-stage- tilføjer jeg hover og active, som giver scenen egen farve.
  for (let stage of stages_list) {
      let li = document.createElement('li');
      li.setAttribute("class", "stage-navbar nav-stage-" + stage.id);
      let a = document.createElement('a');
      // a.setAttribute("style", "color: white;")
      a.innerHTML = stage.name;

      //Her tilføjer jeg en klikfunktion, som henter den valgte scenes events, men klikfunktionen tilføjer eller fjerner også den active class.
      a.addEventListener("click", function() {
        get_allevents(stage.id);
        for(let elm of document.querySelectorAll('.active')) {
            elm.classList.remove('active')
        };
        this.classList.add('active');
      })

      li.appendChild(a);
      ul.appendChild(li);
  }


  document.getElementById('stage-navbar').appendChild(ul);
}

get_stage_navbar();


// Fetch hvor events kommer ud uafhængigt af scene og dato.

    // Her opretter jeg kontakt til api'en, som indeholder alle events og bagefter laver jeg den overordnet en row, hvor alle de forskellige events skal være.
async function get_allevents(stage_id = 0) {
  document.getElementById('allevents-list-wrapper').innerHTML = '';
  let events_list = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/events/");
  let div_list = document.createElement('div');
  div_list.setAttribute("class", "row");
  //Brug border: 1px solid red; så du kan se størrelsen på din row
  div_list.setAttribute("style", "justify-content: center; margin: 0; padding-bottom: 2vh;");
  let random_events = events_list;

  if (stage_id < 1) {
      //Hvis stage_id = 0
      random_events =  shuffleArray(events_list);
      random_events = random_events.slice(0, 9);
  } else {
      //Afgræns array efter stage_id
      random_events = random_events.filter(function(value) { return value.stage_id === stage_id });
  }

    // Her opretter jeg kontakt til api'en, som kan give det enkelte event og derefter laver jeg en kolonne, hvor inkludere jeg hvilkne ting som skal vises det enkelte event (billede, title og dato).
  for (let events of random_events) {
      let events_details = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/events/get/" + events.id);
      let div_events = document.createElement('div');
      div_events.setAttribute("class", "col-sm-3");
      //Brug border: 1px solid black; så du kan se størrelsen på hver enkelt news.
      div_events.setAttribute("style", "height: 40vh; margin: 2vh; background-color: lightgray; padding: 0;")

      let img = document.createElement('img');
      img.setAttribute("src", events_details.absolute_filename);
      img.setAttribute("style", "width: 100%; height: 70%; margin: 0; padding: 0;");
      div_events.appendChild(img);

      let h4 = document.createElement('h4');
      h4.innerText = events_details.title;
      h4.setAttribute("style", "padding-top: 1vh; padding-left: 1vh; font-weight: 700;");
      div_events.appendChild(h4);

      let h5 = document.createElement('h5');
      h5.innerText = formatTime (events_details.datetime);
      h5.setAttribute("style", "padding-top: 1vh; padding-left: 1vh; font-weight: 700;");
      // div_events.appendChild(h6);

        // Her opretter jeg en knap, som hører til et event, som vil vise info om eventet via modal.
      let button = document.createElement('button');
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn, col-sm-12 stage-" + events.stage_id);
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#modal_events_details");
      button.appendChild(h4);
      button.appendChild(h5);
      button.setAttribute("style", "width: 100%; height: 30%; border-radius: 0; border: none;");
      button.setAttribute("id", events_details.id);

        // Her laver jeg modal til eventet og samtidig definere jeg, hvilket info der hører til hvilket event.
      button.addEventListener('click', async function() {
        let events_content = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/events/get/" + events_details.id);
        let events_head = document.createElement('h5');
        events_head.setAttribute("class", "modal_events_detailsTitle");
        events_head.innerText = events_content.title;
        document.getElementById('modal_events_header').prepend(events_head);
        document.getElementById('modal_events_header').children[1].remove();

        let modal_events_content = document.createElement('p');
        modal_events_content.innerText = events_details.description;

        document.getElementById('modal_events_content').prepend(modal_events_content);
        if (document.getElementById('modal_events_content').children[1] != undefined) {
            document.getElementById('modal_events_content').children[1].remove();
        }

        let modal_events_stage = document.createElement('h6');
        modal_events_stage.innerText = events_details.stage_name;

        document.getElementById('modal_events_stage').prepend(modal_events_stage);
        if (document.getElementById('modal_events_stage').children[1] != undefined) {
            document.getElementById('modal_events_stage').children[1].remove();
        }

      });

      div_events.appendChild(button);

      div_list.appendChild(div_events);

  }
    // Her fortæller jeg, hvilket id overstående skal ud på siden med.
  document.getElementById('allevents-list-wrapper').appendChild(div_list);
}

    // Her laver jeg mit shuffle, som gør at de 9 events, som man ser på siden, er random uanset dato eller scene.
function shuffleArray(array) {
   var j, x, i;
   for (i = array.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       x = array[i];
       array[i] = array[j];
       array[j] = x;
   }
   return array;
}

// Her definere jeg dagene og tiden til de forksellige events.
function formatTime(stamp) {
let weekday = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
let date = new Date(stamp * 1000);
let years = date.getFullYear();
let months = date.getMonth();
let days = date.getDay();
let hours = date.getHours();
let minutes = "0" + date.getMinutes();
let seconds = "0" + date.getSeconds();
let dayName = weekday[date.getDay()];
let formattedTime = ' ' + dayName + ' kl. ' + hours+':00';
return formattedTime;
h5.appendChild(formattedTime);
}

get_allevents();
