//JQUERY ÖVNING

//Selekta h1-element
$("h1").text("jQuery");

//Selektar h1-elementets färg till skyblue
$("#hampus").text("Annan text");

//Ändrar alla h1-elements färg till
$("h1").css("color", "skyblue");

//Ändrar bakgrundsfärgen på det sista h1-elementet
const h1s = document.querySelectorAll("h1");
h1s[h1s.length - 1].style.backgroundColor = "hotpink";

//
