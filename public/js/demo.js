  var siteKey =  window.location.pathname.slice(6);
  let github=''
  let site=''
  start();

  function start(){
    switch(siteKey) {
      case 'NerdVerse':
        title='NerdVerse'
        github= 'https://github.com/geertza/NerdVerse'
        site= 'https://geertza.github.io/NerdVerse/';
        description = 'Basic trivia game about popular science fiction tv shows and movies. Starts out with a dialogue introduction then asks multiply choice questions.'
        lang = ['Javascript'];
        break;
      case 'Home%20Kitchen%20Boss':
        title='Home Kitchen Boss'
    github= 'https://github.com/geertza/Home-Kitchen-Boss'
    site= 'https://home-kitchen-boss.herokuapp.com/';
    description = 'This app is used to find recipes for every occasion! Whether you want to know the nationality, the diet type, or even include allergies.​'
    lang = ['Javascript','Nodejs'];
        break;
        case 'Forecast%20Display':
          title='Forecast Display'
    github= 'https://github.com/geertza/forcast-display'
    site= 'https://geertza.github.io/forcast-display//';
    description = 'A simple weaather app. Type in a city,state, and/or country get cureent weather and the forcast for the next 5 days using the openweathermap api.​'
    lang = ['Javascript'];
        break;
        case 'The%20Sloshed%20Guide':
          title='The Sloshed Guide'
    github= 'https://github.com/geertza/Sloshed-Guide-test-page';
    site= 'https://geertza.github.io/Sloshed-Guide-test-page/'
    description = "Pick your city and get a listing of local pubs and tonights weather"
    lang = ['Javascript'];
        break;
        case 'My%20Team%20Page':
          title='My Team Page'
          github= 'https://github.com/geertza/My-Team-Page';
          site= ''
          description = "build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. "
          lang = ['Javascript',"nodejs"];
        break;
        case 'Notemon':
          title='Notemon'
    github= 'https://github.com/geertza/noteman';
    site= 'https://note---man.herokuapp.com/notes.html';
    description = "A server express based webpage to create, store, delete, notes.";
     lang = ['Javascript',"nodejs"];
        break;
        case 'Diamond':
          title='Diamond'
          github= 'https://github.com/geertza/Diamond-Employee-Managment';
          description = "Create a Content Management Systems which uses mysql to help manage employees..";
           lang = ['Javascript',"Nodejs","Mysql"];
        break;
        case 'Money-Penny%20write%20a%20readme.md':
          title='Money-Penny write a readme.md'
    github= 'https://github.com/geertza/MoneyPenny-write-a-readme.md';
    site= '';
    description = "A command-line application which will allow for quick and easy generation of a project README";
     lang = ['Javascript',"Nodejs"];
        break;
        case 'Burger%20Time%20Part%20II':
          title='Burger Time Part II'
          github= 'https://github.com/geertza/Burger-Time-part-2.git';
          site= 'https://burger-time-part-2.herokuapp.com/';
          description = "Make burger,Eat burger, Get rid of evidence";
           lang = ['Javascript',"Nodejs","Express","MySql"];
        break;
      default:
        document.getElementById("site").src = "../jobs/Andy-Geertz.pdf" 
        title='Andy Geertz'
        github= 'https://github.com/geertza';
        site= "../jobs/Andy-Geertz.pdf";
        description = "";
         lang = ['Computer Geek'];
    }speechRender(description,lang,title);
  }
  

 function speechRender(description,lang,title){
  $('.title').text(title)
  $('.discription').text(description) 
  $('.Redirect').css("display","inline-table")   
      for (i = 0; i < lang.length; i++) {
      newBadge = `<span class="badge badge badge-success">${lang[i]}</span>`
       $('.badges').append(newBadge);
      }
     document.getElementById("site").src = site

}

$('.code').click (function() {
  window.open(`${github}`)
})