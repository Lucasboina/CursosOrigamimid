// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
linksEx = document.querySelectorAll('a[href^="#"]');

linksEx.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    linksEx.forEach((link) => link.classList.remove("ativo"));
    e.currentTarget.classList.add("ativo");
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const all = document.querySelectorAll("body *");
all.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.currentTarget);
  });
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const all2 = document.querySelectorAll("body *");
all2.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.remove();
  });
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
let val = 16;
window.addEventListener("keydown", (e) => {
  if (e.key === "t") {
    val++;
    document.querySelector("html").style.fontSize = `${val}px`;
  }
});
