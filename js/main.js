var modo = document.getElementById("modo");
modo.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    modo.src = "./assets/sol.png";
  } else {
    modo.src = "./assets/luna.png";
  }
};

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});


