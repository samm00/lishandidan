var light = document.getElementById("light");
var dark = document.getElementById("dark");
var sheet = window.document.styleSheets[0];

dark.style.visibility = "hidden";

light.addEventListener("click", function() {
   dark.style.visibility = "visible";
   light.style.visibility = "hidden";
   document.getElementById("body").style.color = "#c5c0b3";
   document.getElementById("body").style.backgroundImage = "linear-gradient(#76422020,#76422020), url(pics/dark.svg)";
   document.getElementsByClassName("navButton").style.background = "linear-gradient(270deg, #70635a60, #70707050);";
   document.getElementsByClassName("cardbutton").style.backgroundColor = "#76747080;";

});

dark.addEventListener("click", function() {
   dark.style.visibility = "hidden";
   light.style.visibility = "visible";
   sheet = window.document.styleSheets[0];
}