// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
const somaP = Array.prototype.reduce.call(
  paragrafos,
  (soma, item) => {
    return soma + item.innerText.length;
  },
  0
);
console.log(somaP);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function makeElement(tag, classe, conteudo) {
  const newElement = document.createElement(tag);
  classe ? newElement.classList.add(classe) : null;
  conteudo ? (newElement.innerHTML = conteudo) : "Default content";
  return newElement;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const makeTitle = makeElement.bind(null, "h1", "titulo");
