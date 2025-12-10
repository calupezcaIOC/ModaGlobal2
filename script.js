function canviarColor() {
  const titol = document.querySelector("h1");
  if (titol) {
    titol.style.color = green;
  }
}

function canviarTitol() {
  const titol = document.querySelector("h1");
  if (titol) {
    titol.textContent = titol.textContent + " - 2025";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Pàgina carregada correctament");
  canviarColor();
  canviarTitol();
});
