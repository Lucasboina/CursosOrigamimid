// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(name, age) {
  this.name = name;
  this.age = age;
  this.walk = () => {
    console.log(this.nome + " andou");
  };
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
João = new Pessoa("João", 20);
Bruno = new Pessoa("Bruno", 25);
Maria = new Pessoa("Maria", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  this.getElements = () => {
    return document.querySelectorAll(selector);
  };
  this.addClass = (newClass) => {
    this.getElements().forEach((e) => {
      e.classList.add(newClass);
    });
  };
  this.removeClass = (newClass) => {
    this.getElements().forEach((e) => {
      e.classList.remove(newClass);
    });
  };
}
