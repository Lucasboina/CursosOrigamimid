// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   array.push(item);
//   console.log(item, index, array);
// });

const li = document.querySelectorAll("li");
li.forEach((item) => {
  item.classList.add("ativo");
});
