// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let sumTax = 0;
let sumRec = 0;
transacoes.forEach((element) => {
  if (element.descricao.toLocaleLowerCase().includes("taxa")) {
    sumTax += Number(element.valor.replace("R$ ", ""));
  } else {
    sumRec += Number(element.valor.replace("R$ ", ""));
  }
});
console.log(sumRec - sumTax);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.replace(/[span]+/g, "a"));
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let count = 0;
transacoes2.forEach((element) => {
  if (element.trim().toLocaleLowerCase().includes("taxa")) {
    count++;
  }
});
console.log(count);
