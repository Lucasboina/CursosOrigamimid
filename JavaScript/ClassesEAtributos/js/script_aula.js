const menu = document.querySelector(".menu");
menu.classList.add("ativo", "teste");
menu.classList.remove("teste");
menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("Possui-azul");
} else {
  menu.classList.add("!Possui-azul");
}

const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo
