// Retorne um número aleatório
// entre 1050 e 2000
Math.round(Math.random() * (2000 - 1050) + 1050);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
console.log(Math.max(...numeros.split(", ")));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];
let sum = 0;
listaPrecos = listaPrecos.map(
  (preco) =>
    (sum += Number(
      preco.toLowerCase().replace("r$", "").replace(",", ".").trim()
    ))
);
console.log(sum.toFixed(2));
