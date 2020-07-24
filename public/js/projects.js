let title=''
$("#nerd").on('click',function() {
    title='NerdVerse'
    github= 'https://github.com/geertza/NerdVerse'
    description = 'Basic trivia game about popular science fiction tv shows and movies. Starts out with a dialogue introduction then asks multiply choice questions.'
    lang = ['Javascript'];
    speechRender(description,lang,title);
})
$("#boss").on('click',function() {
    title='Home Kitchen Boss'
    github= 'https://github.com/geertza/Home-Kitchen-Boss'
    description = 'This app is used to find recipes for every occasion! Whether you want to know the nationality, the diet type, or even include allergies.​'
    lang = ['Javascript','Nodejs'];
    speechRender(description,lang,title);
})

$("#weather").on('click',function() {
    title='Forecast Display'
    github= 'https://github.com/geertza/forcast-display'
    site= 'https://geertza.github.io/forcast-display//';
    description = 'A simple weaather app. Type in a city,state, and/or country get cureent weather and the forcast for the next 5 days using the openweathermap api.​'
    lang = ['Javascript'];
    speechRender(description,lang,title);
})

$("#sloshed").on('click',function() {
    title='The Sloshed Guide'
    github= 'https://github.com/geertza/Sloshed-Guide-test-page';
    site= 'https://geertza.github.io/Sloshed-Guide-test-page/'
    description = "Pick your city and get a listing of local pubs and tonights weather"
    lang = ['Javascript'];
    speechRender(description,lang,title);
})
$("#team").on('click',function() {
    title='My Team Page'
    github= 'https://github.com/geertza/My-Team-Page';
    site= 'https://github.com/geertza/My-Team-Page'
    description = "build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. "
    lang = ['Javascript',"nodejs"];
    speechRender(description,lang,title);
})
$("#note").on('click',function() {
    title='Notemon'
    github= 'https://github.com/geertza/noteman';
    site= 'https://note---man.herokuapp.com/notes.html';
    description = "A server express based webpage to create, store, delete, notes.";
     lang = ['Javascript',"nodejs"];
    speechRender(description,lang,title);
})
$("#diamond").on('click',function() {
    title='Diamond'
    github= 'https://github.com/geertza/Diamond-Employee-Managment';
    site= 'https://github.com/geertza/Diamond-Employee-Managment';
    description = "Create a Content Management Systems which uses mysql to help manage employees..";
     lang = ['Javascript',"Nodejs","Mysql"];
    speechRender(description,lang,title);
})
$("#money").on('click',function() {
    title='Money-Penny write a readme.md'
    github= 'https://github.com/geertza/MoneyPenny-write-a-readme.md';
    site= 'https://github.com/geertza/MoneyPenny-write-a-readme.md';
    description = "A command-line application which will allow for quick and easy generation of a project README";
     lang = ['Javascript',"Nodejs"];
    speechRender(description,lang,title);
})
$("#burger").on('click',function() {
    title='Burger Time Part II'
    github= 'https://github.com/geertza/Burger-Time-part-2.git';
    site= 'https://burger-time-part-2.herokuapp.com/';
    description = "Make burger,Eat burger, Get rid of evidence";
     lang = ['Javascript',"Nodejs","Express","MySql"];
    speechRender(description,lang,title);
})
function speechRender(description,lang,title){
    $('.title').text(title)
    $('.discription').text(description)
    $('.Redirect').css("display","inline-table")  
    $('.badges').empty();    
        for (i = 0; i < lang.length; i++) {
        newBadge = `<span class="badge badge badge-success">${lang[i]}</span>`
         $('.badges').append(newBadge);
        }
}

$('.visit').click (function() {
    window.location.href =`/demo/${title}`
  })
$('.code').click (function() {
    window.open(`${github}`)
  })