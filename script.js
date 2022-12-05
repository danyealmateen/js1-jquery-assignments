//JQUERY ÖVNING
//Glöm inte länken i indexHTML för att jQuery ska funka.

//Selekta h1-element och ändra texten till "jQuery"
// $("h1").text("jQuery");

// Selektar h1-elementets färg till skyblue
// $("#hampus").text("Annan text");

// Ändrar alla h1-elements färg till
// $("h1").css("color", "red");

// Ändrar bakgrundsfärgen på det sista h1-elementet
// const h1s = document.querySelectorAll("h1");
// h1s[h1s.length - 1].style.backgroundColor = "hotpink";

// Ändrar sista h-elementets bakgrundsfärg
// $("h1").last().css("backgroundColor", "skyblue");

// //Skapa en knapp
// const btn = $("<button>Click!</button>");
// Appenda till bodyn
// $("body").append(btn);
// Deklarerar 'clicks'
// let clicks = 0;
// Addar ett event på 'click.
// btn.click((event) => {
//   clicks++;

//   css-selektor
//   $("h1:nth-child(2)").text(clicks);
// });

// // Hämta och displaya API.
// const url = "https://dog.ceo/api/breeds/image/random";

// $.get(url).then((result) => {
//   console.log(result);
//   console.log(result.message);

//   const img = $("<img>");
//   //   img.attr("src", result.message);
//   $("body").append(img);
// });

// //Övningar - Events!
// //a) Lägg till en eventlistener på h1-element som lyssnar efter klick. När ett klick registreras ska “H1” loggas i konsolen.
// const header = document.querySelectorAll("h1");
// $("h1").click(() => {
//   console.log("H1");
// });

// //b) Lägg till en eventlistener på p-element som lyssnar efter klick. När ett klick registreras ska “P” loggas i konsolen.
// const para = document.querySelectorAll("p");
// $("p").click(() => {
//   console.log("P");
// });

// //c) Lägg till en eventlistener på knapp-element som lyssnar efter klick. När ett klick registreras ska “KNAPP” loggas i konsolen.
// // const button = document.querySelectorAll("button");
// // $("button").click(() => {
// //   console.log("KNAPP");
// // });

// //Ändra H2
// //a) Modifiera response-funktionerna från första uppgiften så att texten för h2-elementet ändras.
// //b) Klickar man på h1-elementet ska texten h2-elementet vara “Du klickade på H1!”
// const header = document.querySelectorAll("h1");
// const headerTwo = document.querySelectorAll("h2");
// $("h1").click(() => {
//   $("h2").text("Du klickade på H1!");
// });

// //c) Klickar man på p-elementet ska texten h2-elementet vara “Du klickade på P!”
// $("p").click(() => {
//   $("h2").text("Du klickade på P!");
// });

// //d) Klickar man på knappen ska texten h2-elementet vara “Du klickade på knappen!”
// $("button").click(() => {
//   $("h2").text("Du klickade på knappen");
// });

// //3.Ändra bakgrundsfärg
// // Lägg till ytterligare en sak till response-funktionerna från första uppgiften.
// // Klickar man på h1-elementet ska bodyns bakgrundsfärg bli ljusblå.
// $("h1").click(() => {
//   $("button").css("backgroundColor", "purple");
// });

// // Klickar man på p-elementet ska bodyns bakgrundsfärg bli rosa.
// $("p").click(() => {
//   $("body").css("backgroundColor", "hotpink");
// });

// // Klickar man på knappen ska bodyns bakgrundsfärg bli orange.
// // $("button").click(() => {
// //   $("body").css("backgroundColor", "orange");
// // });

// //MOUSEENTER / MOUSELEAVE
// //1. h1
// //a) Lägg till en eventlistener på h1-elementet som lyssnar efter ett mouseenter-event. När det eventet-sker ska textfärgen på h1-elementet ändras.
// $("h1").mouseenter(() => {
//   $("h1").css("color", "blue");
// });
// //b) Lägg till en eventlistener på h1-elementet som lyssnar efter ett mouseleave-event. När det eventet-sker ska textfärgen på h1-elementet ändras.
// $("h1").mouseenter(() => {
//   $("h1").css("color", "red");
// });

// //2. P
// //a) Lägg till en eventlistener på p-elementet som lyssnar efter ett mouseenter-event. När det eventet-sker ska textfärgen på knappen ändras.
// $("p").mouseenter(() => {
//   $("button").css("color", "yellow");
// });
// //b) Lägg till en eventlistener på p-elementet som lyssnar efter ett mouseleave-event. När det eventet-sker ska textfärgen på knappen ändras.
// $("p").mouseenter(() => {
//   $("button").css("color", "green");
// });

// //3. Button
// //a) Lägg till en eventlistener på knappen som lyssnar efter ett mouseenter-event. När det eventet-sker ska texten på h1-elementet ändras till “Knappen!”
// $("button").mouseenter(() => {
//   $("h1").text("Knappen!");
// });

// //b)Lägg till en eventlistener på knappen som lyssnar efter ett mouseleave-event. När det eventet-sker ska texten på h1-elementet ändras tillbaka till “H1-elementet”
// $("button").mouseleave(() => {
//   $("h1").text("H1-Elementet");
// });

//1. Bodyn
//a) Lägg till en eventlistner på body-elementet som lyssnar efter mousemove.
//b) Använd muspekarens y-position, alltså event.clientY för att ändra på h1-elementets font-storlek
// $("body").mousemove((e) => {
//   e.pageY;
//   console.log(e.pageY);
//   $("h1").css("fontSize", "50px");
// });
//c) Använd muspekarens x-position, alltså event.clientX för att ändra på bakgrundsfärgen för p-elementet.
// $("body").mousemove((e) => {
//   e.pageX;
//   $("p").css("backgroundColor", "beige");
// });

//Forms
//1. Lägg till element
//a)
// let form = document.querySelectorAll("form");
// let button = document.querySelectorAll("button");

// $("button").click((event) => {
//   event.preventDefault();
//   let input = document.querySelector("input").value;
//   console.log(input);
//   let header = document.createElement("h1");
//   header.innerHTML = `${input}`;
//   $("body").append(header);
//   console.log(header);
// });

//2. Lägg till lista
//a)
let form = document.querySelectorAll("form");
let button = document.querySelectorAll("button");

$("button").click((event) => {
  event.preventDefault();
  let input = document.querySelector("input").value;
  let list = document.createElement("li");
  list.innerHTML = `sup`;
  console.log($('#nisse #email'))
  console.log(`${input}`);
  $("body").append(list);
});
