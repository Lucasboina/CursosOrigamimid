export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const container = document.querySelector('[data-modal="container"]');
  if ((botaoAbrir, botaoFechar, container)) {
    function toggleModal(evt) {
      evt.preventDefault();
      container.classList.toggle("ativo");
    }
    function clickeForaModal(evt) {
      if (evt.target === this) {
        toggleModal(evt);
      }
    }
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    container.addEventListener("click", clickeForaModal);
  }
}
