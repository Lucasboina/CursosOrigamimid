// const promessa = new Promise(function (resolve, reject) {
//   let condicao = false;
//   if (condicao) {
//     setTimeout(() => {
//       resolve("Lucas");
//     }, 1000);
//   } else {
//     reject(Error("um errinho"));
//   }
// });

// promessa
//   .then(function (resolved) {
//     console.log(resolved);
//   })
//   .catch(function (rejected) {
//     console.log(rejected);
//   });

const login = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("logado");
  }, 1000);
});
const dados = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolved) => console.log(resolved));
