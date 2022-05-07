window.onscroll = function() {
     scrollFunction();
};

function scrollFunction() {
     let root = document.querySelector(':root');
     if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          $("#header").css("background-color", "rgba(255, 255, 255, 1)");
          $("#header").css("box-shadow", "0px 5px 80px black");
          $("#back-to-top").css("visibility", "visible");
          $("#back-to-top").css("opacity", "100%");
     } else {
          if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
               $("#header").css("background-color", "rgba(255, 255, 255, 0.9)");
               $("#logo-text").css("color", "black");
               $("#logo").css("filter", "invert(1)");
               $(".translate-auxiliary").css("color", "black");
               $("#divider").css("color", "black");
               root.style.setProperty("--color", "black");
          } else {
               $("#header").css("background-color", "transparent");
               $("#logo-text").css("color", "white");
               $("#logo").css("filter", "invert(0)");
               $(".translate-auxiliary").css("color", "white");
               $("#divider").css("color", "white");
               root.style.setProperty("--color", "white");
          }
          $("#header").css("box-shadow", "0px 0px 0px black");
          $("#back-to-top").css("visibility", "hidden");
          $("#back-to-top").css("opacity", "0%");
     }
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