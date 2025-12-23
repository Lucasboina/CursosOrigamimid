// const doc = fetch("./doc.txt");
// doc
//   .then((resolved) => {
//     return resolved.text();
//   })
//   .then((body) => {
//     console.log(body);
//   });

// const cep = fetch("https://viacep.com.br/ws/01001000/json");
// cep
//   .then((resolved) => {
//     return resolved.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

const img = fetch("./image.png");
img
  .then((resolved) => {
    return resolved.blob();
  })
  .then((body) => {
    blobURL = URL.createObjectURL(body);
    const imageDom = document.querySelector("img");
    imageDom.src = blobURL;
  });
