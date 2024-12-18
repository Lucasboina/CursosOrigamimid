// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const menu_clone = menu.cloneNode(true);
const copy = document.querySelector(".copy");
copy.appendChild(menu_clone);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const dt = document.querySelector("dt");
console.log(dt);
// Selecione o DD referente ao primeiro DT
console.log(dt.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector("body");
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
