const MenuBtn = document.getElementById("menuBtn");
const navmenu = document.getElementById("nav");

MenuBtn.addEventListener("click", function () {
    navmenu.classList.toggle("active");
})