//JQUERY ÖVNING
//Glöm inte länken i indexHTML för att jQuery ska funka.

//Selekta h1-element
$("h1").text("jQuery");

//Selektar h1-elementets färg till skyblue
$("#hampus").text("Annan text");

//Ändrar alla h1-elements färg till
$("h1").css("color", "red");

//Ändrar bakgrundsfärgen på det sista h1-elementet
const h1s = document.querySelectorAll("h1");
h1s[h1s.length - 1].style.backgroundColor = "hotpink";

//Ändrar sista h-elementets bakgrundsfärg
$("h1").last().css("backgroundColor", "skyblue");

//Skapa en knapp
const btn = $("<button>Click!</button>");
//Appenda till bodyn
$("body").append(btn);
//Deklarerar 'clicks'
let clicks = 0;
//Addar ett event på 'click.
btn.click((event) => {
  clicks++;

  //css-selektor
  $("h1:nth-child(2)").text(clicks);
});

const url = "https://dog.ceo/api/breeds/image/random";

$.get(url).then((result) => {
  console.log(result);
  console.log(result.message);

  const img = $("<img>");
  img.attr("src", result.message);
  $("body").append(img);
});
