const button_menu = document.querySelector(".button_menu");
const menu_navegacao = document.querySelector(".menu_navegacao");

button_menu.onclick = function () {
  menu_navegacao.classList.toggle("ativo");
};

const menuLinks = document.querySelectorAll('.menu_navegacao a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});