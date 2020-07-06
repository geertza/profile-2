// When the user clicks the button, open the modal 
$('#contact').click (function() {
    $('.contact').css("display","block")
    $('.aboutMe').css("display","none")
    $('.resume').css("display","none")
  })
  
  // // When the user clicks on <span> (x), close the modal
  $('#x').click (function() {
    $('.contact').css("display","none")
    $('.aboutMe').css("display","block")
    $('.resume').css("display","none")
  })

  $('#resume').click (function() {
    $('.resume').css("display","block")
    $('.aboutMe').css("display","none")
    $('.contact').css("display","none")
  })

  $('#myGithub').click (function() {
    window.open('https://github.com/geertza')
  })
  $('#linked').click (function() {
    window.open('https://www.linkedin.com/in/andy-geertz-283b4098')
  })