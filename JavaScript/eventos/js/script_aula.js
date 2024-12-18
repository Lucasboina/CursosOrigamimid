const img = document.querySelector("img");

const callback = (e) => {
  console.log("clicou");
  console.log(e);
};

// img.addEventListener("click", callback);

// const imgsLista = document.querySelector(".animais-lista");

const callbackLista = (event) => {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
};

// imgsLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="#"]');

linkExterno.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("w");
});

const h1 = document.querySelector("h1");
// function handleEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);
// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);
// window.addEventListener("keydown", handleEvent);

// function handleKeyboard(event) {
//   console.log(event.key);

//   if (event.key == "Escape") {
//     console.log("saindo");
//   }
// }
// window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

imgs.forEach((i) => {
  i.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
