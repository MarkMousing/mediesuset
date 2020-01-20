//Fetch API Nyheder!

async function get_allnews() {
  let news_list = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/news/");
  let div_list = document.createElement('div');
  div_list.setAttribute("class", "row");
  //Brug border: 1px solid red; så du kan se størrelsen på din row
  div_list.setAttribute("style", "justify-content: center;");

  for (let news of news_list) {
      let news_details = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/news/get/" + news.id);
      let div_news = document.createElement('div');
      div_news.setAttribute("class", "col-sm-3");
      //Brug border: 1px solid black; så du kan se størrelsen på hver enkelt news.
      div_news.setAttribute("style", "margin: 2vh; background-color: lightgray; padding: 0;")

      let img = document.createElement('img');
      img.setAttribute("src", news_details.absolute_filename);
      img.setAttribute("style", "width: 100%; height: 50%; margin: 0; padding: 0;");
      div_news.appendChild(img);

      let h4 = document.createElement('h4');
      h4.innerText = news_details.title;
      h4.setAttribute("style", "padding-top: 1vh; padding-left: 1vh; font-weight: 700;");
      div_news.appendChild(h4);

      let p = document.createElement('p');
      p.innerText = news_details.teaser;
      p.setAttribute("style", "height: 10vh; position: relative; overflow: hidden; margin: 0; padding: 1vh;");
      div_news.appendChild(p);

      let button = document.createElement('button');
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn, col-sm-12");
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#modal_news_details");
      button.innerText = "Læs mere";
      button.setAttribute("style", "width: 95%; height: 10%; background-color: black; color: white; border-radius: 0; margin-left: 1vh; margin-top: 1vh;");
      button.setAttribute("id", news_details.id);


      button.addEventListener('click', async function() {
        let news_content = await DataFromMediesuset("https://websiteuser.apache.techcollege.dk/api/news/get/" + news_details.id);
        let news_head = document.createElement('h5');
        news_head.setAttribute("class", "modal_news_detailsTitle");
        news_head.innerText = news_content.title;
        document.getElementById('modal_news_header').prepend(news_head);
        document.getElementById('modal_news_header').children[1].remove();

        let modal_content = document.createElement('p');
        modal_content.innerText = news_details.content;

        document.getElementById('modal_content').prepend(modal_content);
        if (document.getElementById('modal_content').children[1] != undefined) {
          document.getElementById('modal_content').children[1].remove();

        }
      });


      div_news.appendChild(button);

      div_list.appendChild(div_news);
  }
  document.getElementById('allnews-list-wrapper').appendChild(div_list);
}

get_allnews();
