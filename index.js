window.onscroll = function() {
     scrollFunction();
};

//Used for scrolling effects on header and back to top element
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
let welcomeStates = ["Professional", "Fully Customizable", "User Friendly", "Completely Free"];
let letterIndex = 0;
let wordIndex = 0;
let txt = welcomeStates[wordIndex];
let lettersHighlighted = 0;

function typeWriter() {
     if(letterIndex < txt.length) {
          document.getElementById("dynamic-welcome-text").innerHTML += txt.charAt(letterIndex);
          letterIndex++;
          setTimeout(typeWriter, (Math.floor(Math.random() * 25)) + 125);
     } else if(letterIndex == txt.length) {
          if(lettersHighlighted == 0) {
               setTimeout(wordHighlight, 1000);
          } else {
               wordHighlight();
          }
     }
}
setTimeout(typeWriter, 1500);

function wordHighlight() {
     if(lettersHighlighted == txt.length + 1) {
          letterIndex = 0;
          if(wordIndex != welcomeStates.length - 1) {
               wordIndex++;
          } else {
               wordIndex = 0;
          }
          txt = welcomeStates[wordIndex];
          setTimeout(function() {
               $("#dynamic-welcome-text").html("");
               typeWriter();
          }, 2000);
          lettersHighlighted = 0;
     } else {
          let highlightedText = txt.substring(txt.length - lettersHighlighted, txt.length);
          let remainingText = txt.substring(0, txt.length - lettersHighlighted);
          let concatenatedText = remainingText;
          concatenatedText = concatenatedText.concat("<span class='highlight'>", highlightedText, "</span>");
          $("#dynamic-welcome-text").html(concatenatedText);
          lettersHighlighted++;
          setTimeout(wordHighlight, 50);
     }
}

function returnToTop() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
returnToTop();
//Execute on page load, so styling doesn't mess up depending on position of scroll


//Particles.js auto generated code
particlesJS("particles-js", {
     "particles": {
          "number": {
               "value": 66,
               "density": {
                    "enable": true,
                    "value_area": 750
               }
          },
          "color": {
               "value": "#ffffff"
          },
          "shape": {
               "type": "circle",
               "stroke": {
                    "width": 0,
                    "color": "#000000"
               },
               "polygon": {
                    "nb_sides": 5
               },
               "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
               }
          },
          "opacity": {
               "value": 0.5,
               "random": false,
               "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
               }
          },
          "size": {
               "value": 1,
               "random": true,
               "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
               }
          },
          "line_linked": {
               "enable": true,
               "distance": 150,
               "color": "#ffffff",
               "opacity": 0.4,
               "width": 1
          },
          "move": {
               "enable": true,
               "speed": 1.5,
               "direction": "none",
               "random": false,
               "straight": false,
               "out_mode": "out",
               "bounce": false,
               "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
               }
          }
     },
     "interactivity": {
          "detect_on": "canvas",
          "events": {
               "onhover": {
                    "enable": true,
                    "mode": "grab"
               },
               "onclick": {
                    "enable": true,
                    "mode": "push"
               },
               "resize": true
          },
          "modes": {
               "grab": {
                    "distance": 150,
                    "line_linked": {
                         "opacity": 1
                    }
               },
               "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
               },
               "repulse": {
                    "distance": 200,
                    "duration": 0.4
               },
               "push": {
                    "particles_nb": 4
               },
               "remove": {
                    "particles_nb": 2
               }
          }
     },
     "retina_detect": true
});