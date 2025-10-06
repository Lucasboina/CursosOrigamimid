function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

lucas = new Pessoa("Lucas", 22);

// console.log(Pessoa.prototype);
// console.log(lucas.prototype);
// console.log(lucas.andar());

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar: function () {
    return true;
  },
};
