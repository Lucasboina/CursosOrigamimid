//1
const img = document.querySelector("img");
console.log(img.offsetTop);

//2
const somaImagens = () => {
  const imgs = document.querySelectorAll("img");
  let sum = 0;
  imgs.forEach((item, index) => {
    sum += item.offsetWidth;
  });
  console.log(sum);
};
window.onload = somaImagens();

//3
let as = document.querySelectorAll("a");
as.forEach((a) => {
  item = a.getBoundingClientRect();
  if (item.height < 48 && item.width < 48) {
    console.log("indadequado");
  } else {
    console.log("adequado");
  }
});

//4
const menu = document.querySelector(".menu");
const mobile = window.matchMedia("(max-width: 720px)");
if (mobile.matches) {
  menu.classList.add("menu-mobile");
} else {
  menu.classList.remove("menu-mobile");
}
