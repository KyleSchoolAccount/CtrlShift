window.onscroll = function() {
     scrollFunction();
};

function scrollFunction() {
     let root = document.querySelector(':root');
     if(document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
          $("#header").css("background-color", "rgba(255, 255, 255, 1)");
          $("#header").css("box-shadow", "0px 5px 80px black");
          $("#back-to-top").css("visibility", "visible");
          $("#back-to-top").css("opacity", "100%");

          //Mobile
          $("#header-mobile").css("background-color", "rgba(255, 255, 255, 1)");
          $("#header-mobile").css("box-shadow", "0px 5px 80px black");
          $(".icon-1, .icon-2, .icon-3").css("background-color", "black");
     } else {
          if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
               $("#header").css("background-color", "rgba(255, 255, 255, 0.9)");
               $("#logo-text").css("color", "black");
               $("#logo").css("filter", "invert(1)");
               $(".translate-auxiliary").css("color", "black");
               $("#divider").css("color", "black");
               root.style.setProperty("--color", "black");

               //Mobile
               $("#header-mobile").css("background-color", "rgba(255, 255, 255, 0.9)");
               $("#logo-mobile").css("filter", "invert(1)");
               $(".icon-1, .icon-2, .icon-3").css("background-color", "black");
          } else {
               $("#header").css("background-color", "transparent");
               $("#logo-text").css("color", "white");
               $("#logo").css("filter", "invert(0)");
               $(".translate-auxiliary").css("color", "white");
               $("#divider").css("color", "white");
               root.style.setProperty("--color", "white");

               //Mobile
               $("#header-mobile").css("background-color", "transparent");
               $("#logo-mobile").css("filter", "invert(0)");
               $(".icon-1, .icon-2, .icon-3").css("background-color", "white");
          }
          $("#header").css("box-shadow", "0px 0px 0px black");
          $("#back-to-top").css("visibility", "hidden");
          $("#back-to-top").css("opacity", "0%");

          //Mobile
          $("#header-mobile").css("box-shadow", "0px 0px 0px black");
     }
}

let mobileNavBarToggled = false;
function mobileNav() {
     if(mobileNavBarToggled == false) {
          $(".icon-1").css("transform", "rotate(40deg)");
          $(".icon-3").css("transform", "rotate(-40deg)");
          $(".icon-2").css("opacity", "0%");
          mobileNavBarToggled = true;
          $("#a, #b, #c").addClass("active-mobile");
          $("#logo-mobile").addClass("active-logo-mobile");
          $("#header-mobile-tabs").css("opacity", "100%").css("visibility", "visible").css("transform", "translateX(0%)");
     } else {
          $(".icon-1").css("transform", "rotate(0deg) translateY(-8px)");
          $(".icon-3").css("transform", "rotate(0deg) translateY(8px)");
          $(".icon-2").css("opacity", "100%");
          mobileNavBarToggled = false;
          $("#a, #b, #c").removeClass("active-mobile");
          $("#logo-mobile").removeClass("active-logo-mobile");
          $("#header-mobile-tabs").css("opacity", "0%").css("visibility", "hidden").css("transform", "translateX(-100%)");
     }
}

function redir(page) {
     window.location.href = page;
}

//Prevents transitions from executing upon page load and/or refreshing
function stopTransitionsOnLoad() {
     $("body").removeClass("preload");
}
//Global Variables

function returnToTop() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
returnToTop();
//Execute on page load, so styling doesn't mess up depending on position of scroll