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

    var bigContainer = document.querySelector("html");
    var monMenu = document.querySelector(".MenuContainer");
    document.getElementById("BurgerMenuWrapper").addEventListener("click", function(){
        bigContainer.classList.add("overflow");
        monMenu.classList.add("ouverture");
        console.log(monMenu);
    });

    document.getElementById("fermetureMenu").addEventListener("click", function(){
        bigContainer.classList.remove("overflow");
        monMenu.classList.remove("ouverture");
        console.log(monMenu);
    });


});




