var light = document.getElementById("light");
var dark = document.getElementById("dark");

window.onload = function() {
   dark.style.display = "none";
};

light.addEventListener("click", function() {
   dark.style.display = "block";
   light.style.display = "none";
   document.getElementById("body").style.color = "#c5c0b3";
   document.getElementById("body").style.backgroundImage = "linear-gradient(#76422015,#76422015), url(pics/dark.svg)";
   document.getElementsByClassName("navButton").style.background = "linear-gradient(270deg, #70635a60, #70707050)";
   document.getElementsByClassName("cardbutton").style.backgroundColor = "#76747080";

});

dark.addEventListener("click", function() {
   dark.style.display = "none";
   light.style.display = "block";
   document.getElementById("body").style.color = "#454033";
   document.getElementById("body").style.backgroundImage = "linear-gradient(#c6b29050,#c6b29050), url(pics/light.svg)";
   document.getElementsByClassName("navButton").style.background = "linear-gradient(270deg, #b6a79870, #c0c0c060)";
   document.getElementsByClassName("cardbutton").style.backgroundColor = "#c6c4c080";
});