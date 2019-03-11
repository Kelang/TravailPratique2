window.addEventListener('load', function(){
    
   // console.log('oui animation');

    var mainTitle = document.querySelector(".site-title");
   // console.log(mainTitle);

    var subtitle = document.querySelector(".site-description");
    //console.log(subtitle);

    mainTitle.classList.add("main-title-animation");

    subtitle.classList.add("subtitle-animation");

    var monContenu = document.querySelector(".site-content");

    monContenu.classList.add("contenuAnim");


});