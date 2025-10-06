export default function animaNumeros() {
  function animaNums() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((num) => {
      const total = +num.innerText;
      const incremento = Math.floor(total / 50);
      let start = 0;
      const interval = setInterval(() => {
        start += incremento;
        num.innerText = start;
        if (start > total) {
          clearInterval(interval);
          num.innerText = total;
        }
      }, 50);
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNums();
      observer.disconnect();
    }
  }
  const observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector(".numeros");
  observer.observe(observeTarget, { attributes: true });
}
