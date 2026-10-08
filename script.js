/* =========================================================
   REATIVA ACADEMIA TERAPÊUTICA
   SCRIPT.JS
========================================================= */


/* =========================
   ELEMENTOS
========================= */

const header = document.querySelector(".header");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const menuLinks = document.querySelectorAll(".menu a");

const year = document.getElementById("year");


/* =========================
   HEADER AO ROLAR
========================= */

function updateHeader() {

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================
   MENU MOBILE
========================= */

if (menuBtn && menu) {

  menuBtn.addEventListener("click", () => {

    const isOpen = menu.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

  });

}


/* =========================
   FECHAR MENU AO CLICAR
========================= */

menuLinks.forEach((link) => {

  link.addEventListener("click", () => {

    menu.classList.remove("open");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.setAttribute(
      "aria-label",
      "Abrir menu"
    );

  });

});


/* =========================
   FECHAR MENU AO CLICAR FORA
========================= */

document.addEventListener("click", (event) => {

  if (!menu || !menuBtn) {
    return;
  }

  const clickedInsideMenu =
    menu.contains(event.target);

  const clickedButton =
    menuBtn.contains(event.target);

  if (
    menu.classList.contains("open") &&
    !clickedInsideMenu &&
    !clickedButton
  ) {

    menu.classList.remove("open");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.setAttribute(
      "aria-label",
      "Abrir menu"
    );

  }

});


/* =========================
   ESC FECHA MENU
========================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    menu.classList.remove("open");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.setAttribute(
      "aria-label",
      "Abrir menu"
    );

  }

});


/* =========================
   ANO AUTOMÁTICO
========================= */

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================
   ANIMAÇÃO SUAVE DOS ELEMENTOS
========================= */

const animatedElements = document.querySelectorAll(
  ".service-card, .about-highlight > div, .schedule-card"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


animatedElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);

});


/* =========================
   EFEITO DO BOTÃO VOLTAR AO TOPO
========================= */

const backTop = document.querySelector(".back-top");

if (backTop) {

  backTop.addEventListener("click", (event) => {

    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

           }
