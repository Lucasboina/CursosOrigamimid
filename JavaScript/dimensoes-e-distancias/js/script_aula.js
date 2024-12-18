const sect = document.querySelector(".animais-lista");

console.log(sect.clientHeight);
console.log(sect.scrollHeight);
console.log(sect.offsetTop);

const primeiroh2 = document.querySelector("h2");
console.log(primeiroh2.offsetLeft);

const rect = sect.getBoundingClientRect();
console.log(rect);
console.log(
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight, // soma a barra de endereço

  window.scrollY, // distância total do scroll vertical
  window.scrollX // distância total do scroll horizontal
);
if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}
const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
