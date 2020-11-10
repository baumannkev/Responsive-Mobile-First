//Header
let body = "<div class = \"back\"/></div>";
let menuicon = "<li class = \"menu\"/><a href = \"menu.html\"/><img src = \"menuicon.png\"/ alt = \"Menu icon.\"></a></li>";

let home= "<li class = \"home\"/><a href= \"home.html\"/> Home </a></li>";
let mobile = "<li class = \"mobile\"/><a href = \"contact.html\"/><img src = \"settingsicon.png\"/ alt = \"Settings icon.\"></a></li>";
let logo = "<li class = \"logo\"/><a href = \"index.html\"/></a></li>";
let settings = "<li class = \"settings\"/><a href = \"contact.html\"/><img src = \"settingsicon.png\"/ alt = \"Settings icon.\"></a></li>";

let header = "<div>" + "<header>" +  "<nav>" + "<ul>" + menuicon + home + mobile + logo + settings + "</ul>" + "</nav>" + "</header>" + "</div>";   

///////////

//Content
let nameOne = "<div class = \"name\"/> John Browns </div>";
let message = "<div class = \"message\"/></br>Always design a thing by considering it</br> in its larger context - a chair in </div>";
let btn1 = "<div id = \"boton\"/><button>Follow</button></div>";
$(document).ready(function(){
  $("#boton").addClass("btn");
  $("button").addClass("follow");
});

let fullContent = "<div class = \"content\"/>" + nameOne + message + btn1 + "</div>";

//First Content Box
let yesterday = "<h3>yesterday</h3>";
$(document).ready(function(){
  $("h3").addClass("yesterday");
});

let firstParagraph = "<p id=\"first\"/>Questions about whether design is necessary or affordable are quite beside the point: design is inevitable.</p>";

let icons = "<p id =\"second\"/><img id = \"pic1\"/ src=\"hearticon.png\"/>45<img id = \"pic2\"/ src=\"commenticon.png\"/>21</p>";

 $(document).ready(function(){
  $("#first").css({"font-weight": "bold", "font-size": "11pt", "color": "black"});
  $("#second").css({"font-weight": "bold", "font-size": "11pt", "color": "black"});
  $("#pic1").css({"margin": "5px", "height": "30px", "width": "30px", "color": "black"});
  $("#pic2").css({"margin": "5px", "height": "30px", "width": "30px", "color": "black"});
});

let bubbles = "<div class = \"bubbles\"/>" + yesterday + firstParagraph + icons +"</div>";
let firstFullContentBoxes = "<div class = \"boxes\"/>" + bubbles + "</div>";

$(document).ready(function(){
    $(".bubbles").addClass("box1");
  });


//Second Content Box

let twodaysago = "<h3>2 days ago</h3>";
$(document).ready(function(){
  $("h3").addClass("yesterday").before("Posts");
});

let secondParagraph = "<p id=\"first\"/>John uploaded 4 new workouts for chest.</p>";
let workouts = "<p class= \"center\"/><img src= \"workout.jpg\"/><img src= \"workout.jpg\"/><img src= \"workout.jpg\"/><img src= \"workout.jpg\"/></p>";


let icons2 = "<p id =\"second\"/><img id = \"pic3\"/ src=\"hearticon.png\"/>45<img id = \"pic4\"/ src=\"commenticon.png\"/>21</p>";

 $(document).ready(function(){
  $("#first").css({"font-weight": "bold", "font-size": "11pt", "color": "black"});
  $("#second").css({"font-weight": "bold", "font-size": "11pt", "color": "black"});
  $("#pic3").css({"margin": "5px", "height": "30px", "width": "30px", "color": "black"});
  $("#pic4").css({"margin": "5px", "height": "30px", "width": "30px", "color": "black"});
});

let bubbles2 = "<div class = \"bubbles\"/>" + twodaysago + secondParagraph + workouts + icons2 +"</div>";
let secondFullContentBoxes = "<div class = \"boxes\"/>" + bubbles2 + "</div>";

//Footer
let footer = "<footer></footer>";
$(document).ready(function(){
  $("footer").addClass("footer");

  $("footer").after("Contact: 778-387-5139").prepend("Name: ").append("Kevin Baumann");
});

let fullBody = "<div class = \"back\"/>" + header + fullContent + firstFullContentBoxes + secondFullContentBoxes + footer + "</div>";
$("html").append(fullBody);