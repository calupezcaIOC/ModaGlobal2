function canviarColor() {
  const titol = document.querySelector("h1");
  if (titol) {
    titol.style.color = green;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Pàgina carregada correctament");
  canviarColor();
});
