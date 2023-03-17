/*
var boton = document.createElement("button");
boton.innerHTML = "CONTACTO";

var divContacto = document.getElementsByClassName("contacto")[0];
divContacto.appendChild(boton);

boton.addEventListener ("click", function() {
  window.location.href = "mailto:jrodri67@gmail.com";
});
*/
function show(shown, hidden1, hidden2) {
  document.getElementById(shown).style.display = 'block';
  document.getElementById(hidden1).style.display = 'none';
  document.getElementById(hidden2).style.display = 'none';
};