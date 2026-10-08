const header = document.querySelector(".header");

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


/* =========================
   HEADER
========================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   MENU MOBILE
========================= */

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("open");

});


/* =========================
   FECHAR MENU
========================= */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("open");

    });

});


/* =========================
   ANO AUTOMÁTICO
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
