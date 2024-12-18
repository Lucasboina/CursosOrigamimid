//1
const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach((item) => item.classList.add("ativo"));

//2
menuItens.forEach((item) => item.classList.remove("ativo"));
menuItens[0].classList.add("ativo");

//3
const imgs = document.querySelectorAll("img");
imgs.forEach((img) =>
  img.hasAttribute("alt") ? console.log("possui") : console.log("não possui")
);

const aExt = document.querySelectorAll('a[href="#');

aExt.forEach((item) => item.setAttribute("href", "novo link"));
