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
let bodyBackgroundColor = "";
let bodyBackgroundProperties = "disabled";
let bodyText = "Welcome to your demo store!";
let bodySubtext = 'You can customize nearly anything you wish by heading over to the Customize Styling section and Store Properties tabs in the menu. This body of text is called the "Body Subtext" in the Customize Styling tab, at which can be edited to whatever you would like. Happy editing!';
let bodyTextColor = "black";
let bodySubtextColor = "black";
let footer = "enabled";
let address = "enabled";
let addressValue = "4 Penn Center, Philadelphia, PA 19103";
let social = "Twitter";
let socialValue = "";

//Store data in a javascript form
let data;
let uploadedData;
let unpackedData = [];
let unpackedDataIndex = 0;

function downloadTxt() {
     data = [logo, "\n", logoAcceptable, "\n", imageSet, "\n", websiteNameSet, "\n", websiteName, "\n", headerBorder, "\n", headerFontVal, "\n", headerFont, "\n", headerTitleColorSet, "\n", headerTitleColor, "\n", headerTitle, "\n", bodyBackgroundColor, "\n", bodyText, "\n", bodySubtext, "\n", bodyTextColor, "\n", bodySubtextColor, "\n", footer, "\n", address, "\n", addressValue, "\n", social, "\n", socialValue, "\n", "Version 1.0.0"];
     // if(productData.length != 0) {
     //      data += ",";
     //      for(i = 0; i < productData.length; i++) {
     //           data += productData[i].name + "|||" + productData[i].image + "|||" + productData[i].price + "|||";
     //      }
     //      data += ", \n,";
     // }
     let hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:attachment/text,' + encodeURIComponent(data);
     hiddenElement.target = '_blank';
     hiddenElement.download = 'WB Save.txt';
     hiddenElement.click();
}
document.getElementById('download').addEventListener('click', downloadTxt);

let uploading = false;
function upload() {
     let fileToLoad = document.getElementById("fileToLoad").files[0];
     let fileReader = new FileReader();
     fileReader.onload = function (fileLoadedEvent) {
          let textFromFileLoaded = fileLoadedEvent.target.result;
          uploadedData = textFromFileLoaded;
          unpackedDataIndex = 0;
          unpileUploadedData();
          //console.log(unpackedData); Check uncompiled data
          recompileVariables();
     };
     fileReader.readAsText(fileToLoad, "UTF-8");
}

function unpileUploadedData() {
     if (uploadedData.indexOf(",") != -1) {
          unpackedData[unpackedDataIndex] = uploadedData.substring(0, uploadedData.indexOf(",\n,"));
          uploadedData = uploadedData.substring(uploadedData.indexOf(",\n,") + 3);
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
     bodyBackgroundColor = unpackedData[11].toString();
     bodyText = unpackedData[12].toString();
     bodySubtext = unpackedData[13].toString();
     bodyTextColor = unpackedData[14].toString();
     bodySubtextColor = unpackedData[15].toString();
     footer = unpackedData[16].toString();
     address = unpackedData[17].toString();
     addressValue = unpackedData[18].toString();
     social = unpackedData[19].toString();
     socialValue = unpackedData[20].toString();
     // unpackedData21 = unpackedData[21].toString();
     // console.log(unpackedData21);
     // while(unpackedData21.includes("|||")) {
     //      unpackedName = unpackedData21.substring(0, unpackedData21.indexOf("|||"));
     //      unpackedData21 = unpackedData21.substring(unpackedData21.indexOf("|||") + 3);
     //      unpackedImage = unpackedData21.substring(0, unpackedData21.indexOf("|||"));
     //      unpackedData21 = unpackedData21.substring(unpackedData21.indexOf("|||") + 3);
     //      unpackedPrice = unpackedData21.substring(0, unpackedData21.indexOf("|||"));
     //      unpackedData21 = unpackedData21.substring(unpackedData21.indexOf("|||") + 3);

     //      productData[productCount].push({
     //           name: unpackedName,
     //           image: unpackedImage,
     //           price: unpackedPrice
     //      });
     //      console.log("DID A LOOP");

     //      productCount++;
     // }
     // console.log(productData);
     initializeChanges();

     uploading = true;
     displayMenu("javascript-content");
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
     // bodyBackgroundColor
     if(bodyBackgroundColor != "") {
          $("#text-output8").html("Color 1: " + bodyBackgroundColor.substring(0, 7) + " | Color 2: " + bodyBackgroundColor.substring(8));
          $("#preview-body-body-image").css("background-image", "linear-gradient(" + bodyBackgroundColor + ")");
     }
     // bodyText
     // bodySubtext
     setTextFromUpload("text");
     setTextFromUpload("subtext");
     // bodyTextColor
     // bodySubtextColor
     reinitializeColors();
     // footer
     // address
     // addressValue
     // social
     // socialValue
     setFooterStatus();
     // products
     // reinitializeProducts();
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

let allowUpload = true;

function displayMenu(id) {
     $("#" + id).css("opacity", "100%").css("visibility", "visible").css("overflow-y", "initial");

     let pages = [
          "style-content",
          "properties-content",
          "view-content",
          "help-content",
          "javascript-content",
          "php-content"
     ];

     for(i = 0; i < pages.length; i++) {
          if(id != pages[i]) $("#" + pages[i]).css("opacity", "0%").css("visibility", "hidden").css("overflow-y", "hidden");
     }

     //Explicit Table visibility
     if(id != "properties-content" && productCount >= 1) $("table").css("opacity", "0%").css("visibility", "hidden");
     if(id == "properties-content" && productCount >= 1) $("table").css("opacity", "100%").css("visibility", "visible");

     //Explicit View overflow properties
     $('body').css('overflow-y', 'auto')

     //Explicit Javascript Alert visiblity
     if(id != "javascript-content" && uploading == true) $("#upload-complete").css("opacity", "0%").css("visibility", "hidden");
     if(id == "javascript-content" && uploading == false) $("#upload-complete").css("opacity", "0%").css("visibility", "hidden");
     if(id == "javascript-content" && uploading == true) {
          $("#upload-complete").css("opacity", "100%").css("visibility", "visible");
          
          if(uploading == true && allowUpload == true) {
               uploading = false;
               allowUpload = false;
               setTimeout(function() {
                    $("#upload-complete").css("opacity", "0%").css("visibility", "hidden");
                    allowUpload = true;
               }, 1500);
          }
     }
}

function displaySelections(event) {
     removeChilds();
     selectVis(1);
     if (event == "output1") {
          //Header Logo
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
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
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)");
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               headerBorder = "disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer.id = "header-border-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)");
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
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
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
          $(buttonContainer).css("width", "calc((100% - 10%) / 6)");
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
          $(buttonContainer2).css("width", "calc((100% - 10%) / 6)");
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
          $(buttonContainer3).css("width", "calc((100% - 10%) / 6)");
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
          $(buttonContainer4).css("width", "calc((100% - 10%) / 6)");
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
          $(buttonContainer5).css("width", "calc((100% - 10%) / 6)");
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
          $(buttonContainer6).css("width", "calc((100% - 10%) / 6)");
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
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
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
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)");
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               headerTitle = "disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer.id = "header-border-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)");
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
     } else if (event == "output8") {
          //Body Background Gradient
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)").css("font-size", "200%");
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type hex Value Here (Color 1)");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "body-background-color1-input-box";
          $("#selections").append(buttonContainer);

          let buttonContainer2 = document.createElement("input");
          $(buttonContainer2).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)").css("font-size", "200%");
          $(buttonContainer2).html("");
          $(buttonContainer2).attr("placeholder", "Type hex Value Here (Color 2)");
          $(buttonContainer2).attr("type", "text");
          buttonContainer2.id = "body-background-color2-input-box";
          $("#selections").append(buttonContainer2);

          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          //Special case for 2 hex values
          $(submitButton).attr("onclick", "checkColorValidity($('#body-background-color1-input-box').val(), 'body-background-gradient')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output9") {
          //Body Text
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
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
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
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
     } else if (event == "output11") {
          //Body Text Color
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type hex Value Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "body-text-color-input-box";
          $("#selections").append(buttonContainer);

          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "checkColorValidity($('#body-text-color-input-box').val(), 'body-text-color')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output12") {
          //Body Subtext Color
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type hex Value Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "body-subtext-color-input-box";
          $("#selections").append(buttonContainer);

          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "checkColorValidity($('#body-subtext-color-input-box').val(), 'body-subtext-color')");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output13") {
          //Enable/Disable Footer
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)");
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               footer = "disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer.id = "footer-enable-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)");
          $(buttonContainer2).html("Enable");
          $(buttonContainer2).click(function () {
               footer = "enabled";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
          });
          buttonContainer2.id = "footer-enable-box2";
          $("#selections").append(buttonContainer).append(buttonContainer2);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setFooterStatus()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output14") {
          //Enable/Disable Address
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 2)");
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               address = "disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
          });
          buttonContainer.id = "footer-address-enable-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 2)");
          $(buttonContainer2).html("Enable");
          $(buttonContainer2).click(function () {
               address = "enabled";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
          });
          buttonContainer2.id = "footer-address-enable-box2";
          $("#selections").append(buttonContainer).append(buttonContainer2);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setFooterStatus()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output15") {
          //Address Value
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type Address Here");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "footer-address-input-box";
          $("#selections").append(buttonContainer);

          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "addressValue = $('#footer-address-input-box').val(); setFooterStatus();");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output16") {
          //Enable/Disable Social Media
          let buttonContainer = document.createElement("div");
          $(buttonContainer).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 4)");
          $(buttonContainer).html("Disable");
          $(buttonContainer).click(function () {
               social = "Disabled";
               $(buttonContainer).addClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
          });
          buttonContainer.id = "footer-social-enable-box";
          let buttonContainer2 = document.createElement("div");
          $(buttonContainer2).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer2).css("width", "calc((100% - 10%) / 4)");
          $(buttonContainer2).html("Twitter");
          $(buttonContainer2).click(function () {
               social = "Twitter";
               $(buttonContainer2).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
          });
          buttonContainer2.id = "footer-address-enable-box2";
          let buttonContainer3 = document.createElement("div");
          $(buttonContainer3).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer3).css("width", "calc((100% - 10%) / 4)");
          $(buttonContainer3).html("Facebook");
          $(buttonContainer3).click(function () {
               social = "Facebook";
               $(buttonContainer3).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer4).removeClass("active-selections-button");
          });
          buttonContainer3.id = "footer-address-enable-box3";
          let buttonContainer4 = document.createElement("div");
          $(buttonContainer4).addClass("selections-button centered-selections-button JS-REMOVABLE");
          $(buttonContainer4).css("width", "calc((100% - 10%) / 4)");
          $(buttonContainer4).html("Instagram");
          $(buttonContainer4).click(function () {
               social = "Instagram";
               $(buttonContainer4).addClass("active-selections-button");
               $(buttonContainer).removeClass("active-selections-button");
               $(buttonContainer2).removeClass("active-selections-button");
               $(buttonContainer3).removeClass("active-selections-button");
          });
          buttonContainer4.id = "footer-address-enable-box4";
          $("#selections").append(buttonContainer).append(buttonContainer2).append(buttonContainer3).append(buttonContainer4);
          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "setFooterStatus()");
          submitButton.id = "submit-button";
          $("#selections").append(submitButton);
     } else if (event == "output17") {
          //Social Media Tag
          let buttonContainer = document.createElement("input");
          $(buttonContainer).addClass("selections-button JS-REMOVABLE");
          $(buttonContainer).css("width", "calc((100% - 10%) / 1)");
          $(buttonContainer).html("");
          $(buttonContainer).attr("placeholder", "Type Social Media Tag Here (Without @ symbol)");
          $(buttonContainer).attr("type", "text");
          buttonContainer.id = "footer-social-tag-input-box";
          $("#selections").append(buttonContainer);

          let submitButton = document.createElement("div");
          $(submitButton).addClass("submit-button JS-REMOVABLE");
          $(submitButton).html("Submit");
          $(submitButton).attr("onclick", "socialValue = $('#footer-social-tag-input-box').val(); setFooterStatus();");
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
          $("#preview-body-footer-logo").attr("src", logo);
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
          $("#preview-body-footer-title").html(websiteName);
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
     colorPass = false;
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
          } else if(element == "body-text-color") {
               bodyTextColor = inputColor;
               $("#text-output11").html(inputColor);
               $("#preview-body-body-text").css("color", bodyTextColor);
          } else if(element == "body-subtext-color") {
               bodySubtextColor = inputColor;
               $("#text-output12").html(inputColor);
               $("#preview-body-body-subtext").css("color", bodySubtextColor);
          } else if(element == "body-background-gradient") {
               bodyBackgroundColor = inputColor;
               checkColorValidity($("#body-background-color2-input-box").val(), "body-background-gradient2");
          } else if(element == "body-background-gradient2") {
               bodyBackgroundColor += ", " + inputColor;
               $("#text-output8").html("Color 1: " + bodyBackgroundColor.substring(0, 7) + " | Color 2: " + bodyBackgroundColor.substring(8));
               $("#preview-body-body-image").css("background-image", "linear-gradient(" + bodyBackgroundColor + ")");
          }
          if(element != "body-background-gradient") {
               selectVis(0);
               removeChilds();
          }
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

function setTextFromUpload(type) {
     if (type == "text") {
          $("#preview-body-body-text").html(bodyText);
          $("#text-output9").html(bodyText);
     } else if (type == "subtext") {
          $("#preview-body-body-subtext").html(bodySubtext);
          $("#text-output10").html(bodySubtext);
     }
}

//Product creation
let productData = [];
let productCount = 0;
let action = 1;
let placeholderData = [];
let containerPaddingCreated = false;

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
          if(parseFloat($("#product-price-input-box").val()).toFixed(2) >= 0) {
               placeholderData[2] = parseFloat($("#product-price-input-box").val()).toFixed(2);
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
          $(img).css("max-width", "500px");
          $(td1).append(img);

          let td2 = document.createElement("td");
          td2.id = "td-" + productCount + "-2";
          if(parseFloat(placeholderData[2]).toFixed(2) != 0) {
               $(td2).html("$" + numberWithCommas(parseFloat(placeholderData[2]).toFixed(2)));
          } else {
               $(td2).html("Free");
          }
          $(tr).append(td2);

          productCount++;
          // console.log(productData);

          //Create Container
          let productContainerMAIN = document.createElement("div");
          productContainerMAIN.id = "product-container-main" + productCount.length;
          $(productContainerMAIN).css("display", "flex").css("flex-direction", "column");

          let productContainer = document.createElement("div");
          productContainer.id = "product-container" + productCount.length;
          $(productContainer).css("background-color", "white").css("width", "400px").css("height", "300px").css("position", "relative").css("border-radius", "20px");

          if (productCount >= 1) {
               $("#products-alert").remove();
               $("table").css("visibility", "visible");

               if(containerPaddingCreated == false) {
                    $("#preview-body-body-products-container").css("padding", "25px 0 25px 0");

                    let productsTitle = document.createElement("h2");
                    productsTitle.id = "products-title-main";
                    $(productsTitle).html("Here is a list of products we sell:");
                    $(productsTitle).css("color", "black");
                    $(productsTitle).css("font-size", "200%");
                    $(productsTitle).css("font-weight", "bold");
                    $(productsTitle).css("font-family", "'Poppins', sans-serif");
                    $(productsTitle).css("text-align", "center");
                    $(productsTitle).css("padding-bottom", "20px");

                    $("#preview-body-body-products-container").append(productsTitle);
                    $("#preview-body-body-products-container").html($("#preview-body-body-products-container").html() + "<div id='preview-body-body-products-flex-container'></div>");

                    containerPaddingCreated = true;
               }
                    $("#preview-body-body-products-flex-container").append(productContainerMAIN);
                    $(productContainerMAIN).append(productContainer);
          }

          $("#preview-body-body-products-flex-container").append(productContainerMAIN);
          $(productContainerMAIN).append(productContainer);
          
          //Create image
          let productImage = document.createElement("img");
          $(productImage).attr("src", placeholderData[1]);
          $(productImage).css("height", "90%").css("max-width", "400px").css("border-radius", "20px").css("position", "relative").css("top", "50%").css("left", "50%").css("transform", "translate(-50%, -50%)").css("cursor", "pointer");
          $(productImage).attr("alt", placeholderData[0]);

          $(productContainer).append(productImage);

          //Create Price
          let productPrice = document.createElement("span");
          if(placeholderData[2] == 0) {
               $(productPrice).html("Free " + "<span class='material-icons'>sell</span>");
          } else {
               $(productPrice).html("$" + numberWithCommas(placeholderData[2]) + " <span class='material-icons'>shopping_cart</span>");
          }//Add subscriptions here in future
          $(productPrice).addClass("shop-item-price");
          if(placeholderData[2] == 0) {
               $(productPrice).attr("title", "Free");
          } else {
               $(productPrice).attr("title", "$" + + numberWithCommas(placeholderData[2]));
          }

          $(productContainer).append(productPrice);

          //Create Product Name
          let productName = document.createElement("span");
          $(productName).addClass("shop-item-name");
          $(productName).html(placeholderData[0]);

          $(productContainerMAIN).append(productName);
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
                         $("#submit-button").attr("onclick", "createProduct(4)");
                    }
                    amount++;
               }, 200);
          }
     }
}

function numberWithCommas(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function reinitializeColors() {
     $("#preview-body-body-text").css("color", bodyTextColor);
     $("#preview-body-body-subtext").css("color", bodySubtextColor);
     $("#text-output11").html(bodyTextColor);
     $("#text-output12").html(bodySubtextColor);
}

function setFooterStatus() {
     selectVis(0);
     removeChilds();

     $("#preview-body-footer").remove();

     if (footer == "enabled") {
          //Initialize new HTML to append as child elements
          let newFooterHTML = $("#preview-body").html() + "<div id='preview-body-footer'><img src='" + logo + "' id='preview-body-footer-logo' alt='Your customized websites logo'><h2 id='preview-body-footer-title'>" + websiteName + "</h2>";

          if(address == "enabled") newFooterHTML += "<div id='preview-body-footer-location' class='footer-flex'><i class='fa-solid fa-location-dot fa-sm footer-icon' id='location-icon' title='Address' alt='Address'></i><a href='" + adjustAddressLink() + "' target='_blank' id='location-details' class='footer-details'>" + addressValue + "</a></div>";

          if(social != "Disabled") {
               if(socialValue == "") {
                    newFooterHTML += "<div id='preview-body-footer-social' class='footer-flex'><i class='" + getSocialMediaIcon() + " fa-sm footer-icon' id='social-icon' title='" + social + "' alt='Social Media'></i><a href='" + getSocialMediaLink() + "' target='_blank' id='social-details' class='footer-details'>@WebstoreBuilder</a></div></div>";
               } else {
                    newFooterHTML += "<div id='preview-body-footer-social' class='footer-flex'><i class='" + getSocialMediaIcon() + " fa-sm footer-icon' id='social-icon' title='" + social + "' alt='Social Media'></i><a href='" + getSocialMediaLink() + "' target='_blank' id='social-details' class='footer-details'>@" + socialValue + "</a></div></div>";
               }
          }

          $("#preview-body").html(newFooterHTML);

          $("#preview-body-footer-logo").attr("src", logo);
          $("#text-output13").html("Enabled");
     } else if (footer == "disabled") {
          $("#text-output13").html("Disabled");
     }

     if(address == "enabled") {
          $("#text-output14").html("Enabled");
     } else if(address == "disabled") {
          $("#text-output14").html("Disabled");
     }

     if(addressValue == "") {
          $("#text-output15").html("Not Specified");
     } else {
          $("#text-output15").html(addressValue);
     }

     $("#text-output16").html(social);
     if(socialValue == "") {
          $("#text-output17").html("@WebstoreBuilder");
     } else {
          $("#text-output17").html("@" + socialValue);
     }
}

function adjustAddressLink() {
     let newLink = addressValue;
     while(newLink.includes(" ") == true) {
          newLink = newLink.replace(" ", "%20");
     }

     return "https://www.google.com/maps/search/" + newLink;
}

function getSocialMediaLink() {
     if(social == "Twitter") {
          return "https://www.twitter.com/" + socialValue;
     } else if(social == "Facebook") {
          return "https://www.facebook.com/" + socialValue;
     } else if(social == "Instagram") {
          return "https://www.instagram.com/" + socialValue;
     }

     if(social != "disabled" && socialValue == "") {
          return "https://www." + social + ".com/";
     }
}

function getSocialMediaIcon() {
     if(social == "Twitter") {
          return "fa-brands fa-twitter";
     } else if(social == "Facebook") {
          return "fa-brands fa-facebook-f";
     } else if(social == "Instagram") {
          return "fa-brands fa-instagram";
     }
}