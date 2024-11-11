//1
console.log(document.querySelectorAll("img"));

//2
console.log(document.querySelectorAll('img[src*="imagem"]'));

//3
console.log(document.querySelectorAll('[href^="#"]'));

//4
console.log(document.querySelector(".animais-descricao h2"));

//5
const ps = document.querySelectorAll("p");
console.log(ps[ps.length - 1]);
