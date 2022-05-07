//Global Variables
let logo = "../images/placeholder-image.png";
let logoAcceptable = false;
let imageSet = false;
let websiteNameSet = false;
let websiteName = "Website Name not set!";
//Styling variables
let headerBorder = "enabled";
let headerFontVal = "'Montserrat', sans-serif";
let headerFont = "Montserrat";
let headerTitleColorSet = false;
let headerTitleColor = "#000000";
let headerTitle = "enabled";
let bodyBackgroundType = "solid";
let bodyBackgroundProperties = null;
let bodyText = "Welcome to your demo store!";
let bodySubtext = 'You can customize nearly anything you wish by heading over to the Customize Styling section and Store Properties tabs in the menu. This body of text is called the "Body Subtext" in the Customize Styling tab, at which can be edited to whatever you would like. Happy editing!';
//Store data in a javascript form
let data = [logo, "\n", logoAcceptable, "\n", imageSet, "\n", websiteNameSet, "\n", websiteName, "\n", headerBorder, "\n", headerFontVal, "\n", headerFont, "\n", headerTitleColorSet, "\n", headerTitleColor, "\n", headerTitle, "\n", bodyBackgroundType, "\n", bodyBackgroundProperties, "\n", bodyText, "\n", bodySubtext, "Version 1.0"];
let uploadedData;
let unpackedData = [];
let unpackedDataIndex = 0;

function downloadTxt() {
     data = [logo, "\n", logoAcceptable, "\n", imageSet, "\n", websiteNameSet, "\n", websiteName, "\n", headerBorder, "\n", headerFontVal, "\n", headerFont, "\n", headerTitleColorSet, "\n", headerTitleColor, "\n", headerTitle, "\n", bodyBackgroundType, "\n", bodyBackgroundProperties, "\n", bodyText, "\n", bodySubtext, "Version 1.0"];
     let hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:attachment/text,' + encodeURIComponent(data);
     hiddenElement.target = '_blank';
     hiddenElement.download = 'WB Save.txt';
     hiddenElement.click();
}
document.getElementById('download').addEventListener('click', downloadTxt);

function upload() {
     let fileToLoad = document.getElementById("fileToLoad").files[0];
     let fileReader = new FileReader();
     fileReader.onload = function (fileLoadedEvent) {
          let textFromFileLoaded = fileLoadedEvent.target.result;
          uploadedData = textFromFileLoaded;
          unpackedDataIndex = 0;
          unpileUploadedData();
          // console.log(unpackedData);
          recompileVariables();
     };
     fileReader.readAsText(fileToLoad, "UTF-8");
}

function unpileUploadedData() {
     if (uploadedData.indexOf(",") != -1) {
          unpackedData[unpackedDataIndex] = uploadedData.substring(0, uploadedData.indexOf(",\n,"));
          uploadedData = uploadedData.substring(uploadedData.indexOf(",\n,") + 3 /*length here maybe?*/ );
          unpackedDataIndex++;
          unpileUploadedData();
     }
}

function recompileVariables() {
     logo = unpackedData[0].toString();
     logoAcceptable = $.parseJSON(unpackedData[1].toLowerCase());
     imageSet = $.parseJSON(unpackedData[2].toLowerCase());
     websiteNameSet = $.parseJSON(unpackedData[3].toLowerCase());
     websiteName = unpackedData[4].toString();
     headerBorder = unpackedData[5].toString();
     headerFontVal = unpackedData[6].toString();
     headerFont = unpackedData[7].toString();
     headerTitleColorSet = $.parseJSON(unpackedData[8].toLowerCase());
     headerTitleColor = unpackedData[9].toString();
     headerTitle = unpackedData[10].toString();
     bodyBackgroundType = unpackedData[11].toString();
     bodyBackgroundProperties = unpackedData[12].toString(); //Fix later (null case)
     bodyText = unpackedData[13].toString();
     bodySubtext = unpackedData[14].toString();
     initializeChanges();
}

function initializeChanges() {
     // logo
     // logoAcceptable
     // imageSet
     if (logoAcceptable == true) {
          $("#preview-body-header-logo").attr("src", logo);
          $("#text-output1").html("<a href='" + logo + "' target='_blank' style='text-decoration-color: white; color: white;' title='View current logo'>" + logo + "</a>");
          $("#text-output1 a").css("font-family", "Poppins, sans-serif").css("font-weight", "400");
     } else if (logoAcceptable == false) {
          $("#text-output1").html("Not Selected");
     }
     // websiteNameSet
     // websiteName
     $("#preview-body-header-title").html(websiteName);
     if (websiteNameSet == true) {
          $("#text-output3").html(websiteName);
     } else if (websiteNameSet == false) {
          $("#text-output3").html("Not Set");
     }
     // headerBorder
     if (headerBorder == "enabled") {
          $("#preview-body-header").css("border-bottom", "1px black solid");
          $("#text-output2").html("Enabled");
     } else if (headerBorder == "disabled") {
          $("#preview-body-header").css("border-bottom", "none");
          $("#text-output2").html("Disabled");
     }
     // headerFontVal
     // headerFont
     $("#text-output4").html(headerFont);
     $("#preview-body-header-title").css("font-family", headerFontVal);
     // headerTitleColorSet
     // headerTitleColor
     $("#text-output5").html(headerTitleColor);
     $("#preview-body-header-title").css("color", headerTitleColor);
     // headerTitle
     setHeaderTitleStatus();
     // bodyBackgroundType
     // bodyBackgroundProperties
     // bodyText
     // bodySubtext
     setText("text");
     setText("subtext");
}

function returnToTop() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
returnToTop();
//Execute on page load, so styling doesn't mess up depending on position of scroll
$(".header-item").click(function () {
     let headerItemID = $(this).attr("id");
     let itemNum = parseInt(headerItemID.substring(headerItemID.length - 1, headerItemID.length));
     $(".header-item").css("background-color", "transparent");
     $("#" + headerItemID).css("background-color", "darkgray");
     $(".content").css("opacity", "0%");
     $(".content").css("visibility", "hidden");
     selectVis(0);
     removeChilds();
     switch (itemNum) {
          case 1:
               displayMenu("style-content");
               break;
          case 2:
               displayMenu("properties-content");
               break;
          case 3:
               displayMenu("view-content");
               break;
          case 4:
               displayMenu("help-content");
               break;
          case 5:
               displayMenu("javascript-content");
               break;
          case 6:
               displayMenu("php-content");
               break;
     }
});

function displayMenu(id) {
     $("#" + id).css("opacity", "100%");
     $("#" + id).css("visibility", "visible");
}

function displaySelections(event) {
     removeChilds();
     selectVis(1);
     if (event == "output1") {
          //Header Logo
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type URL Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "logo-input-box";
          if (imageSet == true) {
               $(buttonContainer).val(logo);
          }
          $(buttonContainer).on("input", function () {
               if ($(buttonContainer).val().length >= 200) {
                    $(buttonContainer).css("font-size", "100%");
               } else {
                    $(buttonContainer).css("font-size", 300 - $(buttonContainer).val().length + "%");
               }
               //Error detection (only allowing for .png, .jpg, .jpeg, and .gif)
               if ($(buttonContainer).val().substring($(buttonContainer).val().length - 4, $(buttonContainer).val().length) == ".png" || $(buttonContainer).val().substring($(buttonContainer).val().length - 4, $(buttonContainer).val().length) == ".jpg" || $(buttonContainer).val().substring($(buttonContainer).val().length - 5, $(buttonContainer).val().length) == ".jpeg" || $(buttonContainer).val().substring($(buttonContainer).val().length - 4, $(buttonContainer).val().length) == ".gif") {
                    logoAcceptable = true;
               } else {
                    logoAcceptable = false;
               }
          });
          $("#selections").append(buttonContainer);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "getLogo()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output2") {
          //Header-Border
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)")
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               headerBorder = "disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer.id = "header-border-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)")
          $(buttonContainer2).html("Enable");
          $(buttonContainer2).click(function () {
               headerBorder = "enabled";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
          });
          buttonContainer2.id = "header-border-box2";
          $("#selections").append(buttonContainer).append(buttonContainer2);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setHeaderBorder()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output3") {
          //Website Name
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type Text Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "website-name-input-box";
          $("#selections").append(buttonContainer);
          if (websiteNameSet == true) {
               $(buttonContainer).val(websiteName);
          }
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setWebsiteName()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output4") {
          //Header Font
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 6)")
          $(buttonContainer).html("Montserrat");
          $(buttonContainer).click(function () {
               headerFontVal = "'Montserrat', sans-serif";
               headerFont = "Montserrat";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
               $(buttonContainer5).removeClass("active-selections-button");
               $(buttonContainer6).removeClass("active-selections-button");
          });
          buttonContainer.id = "header-font-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 6)")
          $(buttonContainer2).html("Overpass");
          $(buttonContainer2).click(function () {
               headerFontVal = "'Overpass', sans-serif";
               headerFont = "Overpass";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContaine3).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
               $(buttonContainer5).removeClass("active-selections-button");
               $(buttonContainer6).removeClass("active-selections-button");
          });
          buttonContainer2.id = "header-font-box2";
          let buttonContainer3 = document.createElement("div");
          $(buttonContainer3).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer3).css("width", "calc((100% - 10%) / 6)")
          $(buttonContainer3).html("Tulpen One");
          $(buttonContainer3).click(function () {
               headerFontVal = "'Tulpen One', cursive";
               headerFont = "Tulpen One";
               $(buttonContainer3).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
               $(buttonContainer5).removeClass("active-selections-button");
               $(buttonContainer6).removeClass("active-selections-button");
          });
          buttonContainer3.id = "header-font-box3";
          let buttonContainer4 = document.createElement("div");
          $(buttonContainer4).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer4).css("width", "calc((100% - 10%) / 6)")
          $(buttonContainer4).html("Kristi");
          $(buttonContainer4).click(function () {
               headerFontVal = "'Kristi', cursive";
               headerFont = "Kristi";
               $(buttonContainer4).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
               $(buttonContainer5).removeClass("active-selections-button");
               $(buttonContainer6).removeClass("active-selections-button");
          });
          buttonContainer4.id = "header-font-box4";
          let buttonContainer5 = document.createElement("div");
          $(buttonContainer5).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer5).css("width", "calc((100% - 10%) / 6)")
          $(buttonContainer5).html("Abel");
          $(buttonContainer5).click(function () {
               headerFontVal = "'Abel', sans-serif";
               headerFont = "Abel";
               $(buttonContainer5).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
               $(buttonContainer6).removeClass("active-selections-button");
          });
          buttonContainer5.id = "header-font-box5";
          let buttonContainer6 = document.createElement("div");
          $(buttonContainer6).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer6).css("width", "calc((100% - 10%) / 6)")
          $(buttonContainer6).html("Poppins");
          $(buttonContainer6).click(function () {
               headerFontVal = "'Poppins', sans-serif";
               headerFont = "Poppins";
               $(buttonContainer6).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
               $(buttonContainer5).removeClass("active-selections-button");
          });
          buttonContainer6.id = "header-font-box6";
          $("#selections").append(buttonContainer).append(buttonContainer2).append(buttonContainer3).append(buttonContainer4).append(buttonContainer5).append(buttonContainer6);
          for (i = 1; i <= 6; i++) {
               if (i == 1) {
                    $(buttonContainer).css("font-size", "2vw");
               } else {
                    $("#header-font-box" + i).css("font-size", "2vw");
               }
          }
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setFont('header')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output5") {
          //Header Title Color
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type hex Value Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "header-title-color-input-box";
          $("#selections").append(buttonContainer);
          if (headerTitleColorSet == true) {
               $(buttonContainer).val(headerTitleColor);
          }
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "checkColorValidity($('#header-title-color-input-box').val(), 'header-title-color')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output6") {
          //Header-Border
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)")
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               headerTitle = "disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer.id = "header-border-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)")
          $(buttonContainer2).html("Enable");
          $(buttonContainer2).click(function () {
               headerTitle = "enabled";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
          });
          buttonContainer2.id = "header-border-box2";
          $("#selections").append(buttonContainer).append(buttonContainer2);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setHeaderTitleStatus()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output7") {
          //Body Background Type
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 3)")
          $(buttonContainer).html("Solid Color");
          $(buttonContainer).click(function () {
               bodyBackgroundType = "solid";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
          });
          buttonContainer.id = "header-border-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 3)")
          $(buttonContainer2).html("Gradient");
          $(buttonContainer2).click(function () {
               bodyBackgroundType = "gradient";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
          });
          buttonContainer2.id = "header-border-box2";
          let buttonContainer3 = document.createElement("div");
          $(buttonContainer3).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer3).css("width", "calc((100% - 10%) / 3)")
          $(buttonContainer3).html("Image");
          $(buttonContainer3).click(function () {
               bodyBackgroundType = "image";
               $(buttonContainer3).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer3.id = "header-border-box3";
          $("#selections").append(buttonContainer).append(buttonContainer2).append(buttonContainer3);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setBodyBackgroundType()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output9") {
          //Body Text
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          if (bodyText != 'Welcome to your demo store!') {
               $(buttonContainer).html(bodyText);
          } else {
               $(buttonContainer).html("");
          }
          $(buttonContainer).attr("placeholder", "Type Text Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "body-text-input-box";
          $("#selections").append(buttonContainer);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setText('text')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output10") {
          //Body Subtext
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          if (bodySubtext != 'You can customize nearly anything you wish by heading over to the Customize Styling section and Store Properties tabs in the menu. This body of text is called the "Body Subtext" in the Customize Styling tab, at which can be edited to whatever you would like. Happy editing!') {
               $(buttonContainer).html(bodySubtext);
          } else {
               $(buttonContainer).html("");
          }
          $(buttonContainer).attr("placeholder", "Type Text Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "body-subtext-input-box";
          $("#selections").append(buttonContainer);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setText('subtext')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     }
}

function selectVis(param) {
     if (param == 1) {
          $("#selections").css("opacity", "100%");
          $("#selections").css("visibility", "visible");
          $("#selections").css("bottom", "0px");
          $("#style-content").css("height", "calc(100% - 100px)");
     } else if (param == 0) {
          $("#selections").css("opacity", "0%");
          $("#selections").css("visibility", "hidden");
          $("#selections").css("bottom", "-100px");
          $("#style-content").css("height", "100%");
     }
}

function removeChilds() {
     $("#selections").html("");
}
let logoAllowed = true;
let logoAmount = 0;

function getLogo() {
     if (logoAcceptable == false) {
          if (logoAllowed == true) {
               logoAllowed = false;
               $("#submit-button").removeClass("submit-button");
               $("#submit-button").addClass("submit-button-alt");
               let interval = setInterval(function () {
                    if (logoAmount % 2 == 0) {
                         $("#submit-button").css("background-color", "red");
                    } else {
                         $("#submit-button").css("background-color", "white");
                    }
                    if (logoAmount == 5) {
                         $("#submit-button").css("background-color", "rgb(0, 162, 255)");
                         $("#submit-button").removeClass("submit-button-alt");
                         $("#submit-button").addClass("submit-button");
                         logoAllowed = true;
                         logoAmount = 0;
                         clearInterval(interval);
                    }
                    logoAmount++;
               }, 200);
          }
     } else if (logoAcceptable == true) {
          //Add the logo to the website
          //Remove added elements from the selections menu
          selectVis(0);
          imageSet = true;
          logo = $("#logo-input-box").val();
          $("#preview-body-header-logo").attr("src", logo);
          removeChilds();
          $("#text-output1").html("<a href='" + logo + "' target='_blank' style='text-decoration-color: white; color: white;' title='View current logo'>" + logo + "</a>");
          $("#text-output1 a").css("font-family", "Poppins, sans-serif").css("font-weight", "400");
     }
}

function setHeaderBorder() {
     if (headerBorder == "enabled") {
          $("#preview-body-header").css("border-bottom", "1px black solid");
          $("#text-output2").html("Enabled");
     } else if (headerBorder == "disabled") {
          $("#preview-body-header").css("border-bottom", "none");
          $("#text-output2").html("Disabled");
     }
     selectVis(0);
}
let websiteNameAllowed = true;
let websiteNameAmount = 0;

function setWebsiteName() {
     if ($("#website-name-input-box").val().length <= 2) {
          if (websiteNameAllowed == true) {
               websiteNameAllowed = false;
               $("#submit-button").removeClass("submit-button");
               $("#submit-button").addClass("submit-button-alt");
               let interval = setInterval(function () {
                    if (websiteNameAmount % 2 == 0) {
                         $("#submit-button").css("background-color", "red");
                    } else {
                         $("#submit-button").css("background-color", "white");
                    }
                    if (websiteNameAmount == 5) {
                         $("#submit-button").css("background-color", "rgb(0, 162, 255)");
                         $("#submit-button").removeClass("submit-button-alt");
                         $("#submit-button").addClass("submit-button");
                         websiteNameAllowed = true;
                         websiteNameAmount = 0;
                         clearInterval(interval);
                    }
                    websiteNameAmount++;
               }, 200);
          }
     } else {
          websiteName = $("#website-name-input-box").val();
          websiteNameSet = true;
          selectVis(0);
          $("#preview-body-header-title").html(websiteName);
          //Add more elements that require the websites name later here
          removeChilds();
          $("#text-output3").html(websiteName);
     }
}

function setFont(element) {
     if (element == "header") {
          $("#text-output4").html(headerFont);
          $("#preview-body-header-title").css("font-family", headerFontVal);
     } //Other fonts in else statements
     selectVis(0);
     removeChilds();
}
let colorAllowed = true;
let colorAmount = 0;
let colorPass = false;

function checkColorValidity(inputColor, element) {
     let acceptedCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
     //Check if hex syntax is correct
     for (i = 1; i < inputColor.length; i++) {
          if (!acceptedCharacters.includes(inputColor.substring(i, i + 1)) || inputColor.substring(0, 1) != "#" || inputColor.length != 7) {
               //At any point, the hex is incorrect:
               colorPass = false;
               if (colorAllowed == true) {
                    colorAllowed = false;
                    $("#submit-button").removeClass("submit-button");
                    $("#submit-button").addClass("submit-button-alt");
                    let interval = setInterval(function () {
                         if (colorAmount % 2 == 0) {
                              $("#submit-button").css("background-color", "red");
                         } else {
                              $("#submit-button").css("background-color", "white");
                         }
                         if (colorAmount == 5) {
                              $("#submit-button").css("background-color", "rgb(0, 162, 255)");
                              $("#submit-button").removeClass("submit-button-alt");
                              $("#submit-button").addClass("submit-button");
                              colorAllowed = true;
                              colorAmount = 0;
                              clearInterval(interval);
                         }
                         colorAmount++;
                    }, 200);
               }
          } else {
               colorPass = true;
          }
     }
     if (colorPass == true) {
          //Passes color check:
          if (element == "header-title-color") {
               headerTitleColorSet = true;
               headerTitleColor = inputColor;
               $("#text-output5").html(inputColor);
               $("#preview-body-header-title").css("color", headerTitleColor);
          } //Else for other color checkings
          selectVis(0);
          removeChilds();
     }
}

function setHeaderTitleStatus() {
     selectVis(0);
     removeChilds();
     if (headerTitle == "enabled") {
          $("#preview-body-header").html("<img src='../images/placeholder-image.png' id='preview-body-header-logo' alt='Your customized websites logo'><h2 id='preview-body-header-title'>Website Name not set!</h2>");
          $("#preview-body-header-logo").attr("src", logo);
          $("#preview-body-header-title").css("color", headerTitleColor).css("font-family", headerFontVal);
          $("#text-output6").html("Enabled");
     } else if (headerTitle == "disabled") {
          $("#preview-body-header").html("<img src='../images/placeholder-image.png' id='preview-body-header-logo' alt='Your customized websites logo'>");
          $("#preview-body-header-logo").attr("src", logo);
          $("#text-output6").html("Disabled");
     }
}

function setBodyBackgroundType() {
     if (bodyBackgroundType == "solid") {}
}

function setText(type) {
     if (type == "text") {
          bodyText = $("#body-text-input-box").val();
          $("#preview-body-body-text").html(bodyText);
          $("#text-output9").html(bodyText);
     } else if (type == "subtext") {
          bodySubtext = $("#body-subtext-input-box").val();
          $("#preview-body-body-subtext").html(bodySubtext);
          $("#text-output10").html(bodySubtext);
     }
     selectVis(0);
     removeChilds();
}



//Product creation
let productData = [];
let productCount = 0;
let action = 1;
let placeholderData = [];

function createProduct(action) {
     if (action == 1) {
          selectVis(1);
          removeChilds();

          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type Product Name Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "product-name-input-box";
          $("#selections").append(buttonContainer);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "createProduct(2)");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (action == 2) {
          if ($("#product-name-input-box").val().length >= 3) {
               placeholderData[0] = $("#product-name-input-box").val();
               removeChilds();

               let buttonContainer = document.createElement("input");
               $(buttonContainer).addClass("selections-button JS-REMOVABLE");
               $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
               $(buttonContainer).html("");
               $(buttonContainer).attr("placeholder", "Input Product Image URL Here");
               $(buttonContainer).attr("type", "text");
               buttonContainer.id = "product-img-input-box";
               $(buttonContainer).on("input", function () {
                    if ($(buttonContainer).val().length >= 200) {
                         $(buttonContainer).css("font-size", "100%");
                    } else {
                         $(buttonContainer).css("font-size", 300 - $(buttonContainer).val().length + "%");
                    }
               });
               $("#selections").append(buttonContainer);
               let submitButton = document.createElement("div");
               $(submitButton).addClass("submit-button JS-REMOVABLE");
               $(submitButton).html("Submit");
               $(submitButton).attr("onclick", "createProduct(3)");
               submitButton.id = "submit-button";
               $("#selections").append(submitButton);
          } else {
               //Return Error
               $("#submit-button").attr("onclick", "");
               $("#submit-button").removeClass("submit-button");
               $("#submit-button").addClass("submit-button-alt");
               let amount = 0;
               let interval = setInterval(function () {
                    if (amount % 2 == 0) {
                         $("#submit-button").css("background-color", "red");
                    } else {
                         $("#submit-button").css("background-color", "white");
                    }
                    if (amount == 5) {
                         $("#submit-button").css("background-color", "rgb(0, 162, 255)");
                         $("#submit-button").removeClass("submit-button-alt");
                         $("#submit-button").addClass("submit-button");
                         amount = 0;
                         clearInterval(interval);
                         $("#submit-button").attr("onclick", "createProduct(2)");
                    }
                    amount++;
               }, 200);
          }
     } else if (action == 3) {
          if($("#product-img-input-box").val().substring($("#product-img-input-box").val().length - 4, $("#product-img-input-box").val().length) == ".png" || $("#product-img-input-box").val().substring($("#product-img-input-box").val().length - 4, $("#product-img-input-box").val().length) == ".jpg" || $("#product-img-input-box").val().substring($("#product-img-input-box").val().length - 5, $("#product-img-input-box").val().length) == ".jpeg" || $("#product-img-input-box").val().substring($("#product-img-input-box").val().length - 4, $("#product-img-input-box").val().length) == ".gif") {
               placeholderData[1] = $("#product-img-input-box").val();
          removeChilds();

          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)")
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Enter Numerical Price Here");
          $(buttonContainer).attr("type", "number");
          buttonContainer.id = "product-price-input-box";
          $("#selections").append(buttonContainer);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "createProduct(4)");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
          } else {
               //Return Error
               $("#submit-button").attr("onclick", "");
               $("#submit-button").removeClass("submit-button");
               $("#submit-button").addClass("submit-button-alt");
               let amount = 0;
               let interval = setInterval(function () {
                    if (amount % 2 == 0) {
                         $("#submit-button").css("background-color", "red");
                    } else {
                         $("#submit-button").css("background-color", "white");
                    }
                    if (amount == 5) {
                         $("#submit-button").css("background-color", "rgb(0, 162, 255)");
                         $("#submit-button").removeClass("submit-button-alt");
                         $("#submit-button").addClass("submit-button");
                         amount = 0;
                         clearInterval(interval);
                         $("#submit-button").attr("onclick", "createProduct(3)");
                    }
                    amount++;
               }, 200);
          }
     } else if (action == 4) {
          if(parseInt($("#product-price-input-box").val()) >= 0) {
               placeholderData[2] = $("#product-price-input-box").val();
          removeChilds();
          selectVis(0);

          productData.push({
               name: placeholderData[0],
               image: placeholderData[1],
               price: placeholderData[2]
          });
          let tr = document.createElement("tr");
          tr.id = "tr-" + productCount;
          $("#products-table").append(tr);

          let td0 = document.createElement("td");
          td0.id = "td-" + productCount + "-0";
          $(td0).html(placeholderData[0]);
          $(tr).append(td0);

          let td1 = document.createElement("td");
          td1.id = "td-" + productCount + "-1";
          $(tr).append(td1);

          let img = document.createElement("img");
          img.id = "img-" + productCount;
          $(img).attr("src", placeholderData[1]);
          $(td1).append(img);

          let td2 = document.createElement("td");
          td2.id = "td-" + productCount + "-2";
          if(parseInt(placeholderData[2]) != 0) {
               $(td2).html("$" + numberWithCommas(parseInt(placeholderData[2])));
          } else {
               $(td2).html("Free");
          }
          $(tr).append(td2);

          productCount++;
          // console.log(productData);
          if (productCount >= 1) {
               $("#products-alert").remove();
               $("table").css("visibility", "visible");
          }
          } else {

          }
          
     }
}

function numberWithCommas(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}