
const filterButtons = document.querySelectorAll(".filter-btn");
const propertyCards = document.querySelectorAll(".property-card");
const currentYear = document.querySelector("#current-year");
const searchForm = document.querySelector("#property-search");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const enquiryForm = document.querySelector("#enquiry-form");
const formMessage = document.querySelector("#form-message");
const emptyMessage = document.querySelector("#empty-message");

currentYear.textContent = new Date().getFullYear();

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.category;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        propertyCards.forEach(function (card) {
            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const location = document.querySelector("#search-location").value.toLowerCase();
    const type = document.querySelector("#search-type").value;
    const status = document.querySelector("#search-status").value;

    let found = false;

    propertyCards.forEach(function (card) {
        const propertyLocation = card.dataset.location;
        const propertyType = card.dataset.category;
        const propertyStatus = card.dataset.status;

        if (
            (location === "" || propertyLocation.includes(location)) &&
            (type === "all" || propertyType === type) &&
            (status === "all" || propertyStatus === status)
        ) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    filterButtons.forEach(function (button) {
        button.classList.remove("active");
    });

    emptyMessage.hidden = found;
    document.querySelector("#properties").scrollIntoView();
});

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        emptyMessage.hidden = false;

        propertyCards.forEach(function (card) {
            if (card.style.display !== "none") {
                emptyMessage.hidden = true;
            }
        });
    });
});

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your enquiry has been validated. This demo does not send messages to the real estate team.";

    formMessage.classList.remove("error");
    formMessage.classList.add("success");

    enquiryForm.reset();
});
