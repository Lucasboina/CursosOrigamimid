function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((e) => {
        e.classList.remove("ativo", e.dataset.anime);
      });
      tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const active = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);
  }

  function activeAccordion() {
    this.classList.toggle(active);
    this.nextElementSibling.classList.toggle(active);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

function initSmoothScroll() {
  function scollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  linksInternos.forEach((link) => {
    link.addEventListener("click", scollToSection);
  });
}
function initAnimaScroll() {
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
initTabNav();
initAccordion();
initSmoothScroll();
initAnimaScroll();
