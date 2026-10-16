const NavLink = document.getElementById("navlink");
const MenuBtn = document.getElementById("menubtn");

function showMenu() {
    NavLink.classList.toggle("show");
        const MenuIcon = MenuBtn.querySelector("i");

    if (NavLink.classList.contains("show")) {
        MenuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        MenuIcon.classList.replace("fa-xmark", "fa-bars");
    }
}
MenuBtn.addEventListener("click", showMenu);