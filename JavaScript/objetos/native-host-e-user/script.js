// Aula 403 - Origamid JavaScript Completo

// Exemplo de uso de objetos nativos, host e user

// Objeto nativo: Math
const randomNumber = Math.random();
console.log(`Número aleatório: ${randomNumber}`);

// Objeto host: Document
const pageTitle = document.title;
console.log(`Título da página: ${pageTitle}`);

// Objeto user: Criado pelo usuário
const user = {
  name: "Lucas",
  age: 30,
  greet() {
    console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos.`);
  },
};

user.greet();
