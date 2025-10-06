export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop - halfWindow < 0;
        if (isVisible) {
          section.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
