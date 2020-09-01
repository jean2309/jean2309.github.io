//Scroll interno suave

function initScrollSuave() {
  const linksMenu = document.querySelectorAll(".menu-suave a[href^='#']");
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksMenu.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Animação no Scroll

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".scroll-anime");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();

//Efeito Maquina de Escrever
function initMaquinaEscrever() {
  const subTitulo = document.querySelector(".maquina");
  typeWrite(subTitulo);
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 155 * i);
    });
  }
}
initMaquinaEscrever();

//Scrol Menu Invisivel

function initScrolMenuInvisivel() {
  window.onscroll = function () {
    scrollMenu();
  };
  function scrollMenu() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      document.getElementById("menuOff").className =
        "scroll-menu-on colorLink header";
    } else {
      document.getElementById("menuOff").className = "header";
    }
  }
}
initScrolMenuInvisivel();

/*menu mobile*/

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector("#menu");
  const eventos = ["click"];

  function openMenu(event) {
    menuList.classList.add("active");
    menuButton.classList.add("active");

    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = "data-outside";
    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
      element.setAttribute(outside, "");
    }
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
  }
  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}
initMenuMobile();

/*teste menu ativo*/

function mostrarAtivo(tag) {
  var tag_li = document.querySelector(".header_menu");
  var tag_a = tag_li.getElementsByTagName("a");
  for (i = 0; i < tag_a.length; i++) {
    tag_a[i].style.color = "";
  }
  tag.style.color = "#ff0000";
}
