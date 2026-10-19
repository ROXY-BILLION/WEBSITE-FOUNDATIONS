const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

const reservationForm = document.querySelector("#reservation-form");
const reservationMessage = document.querySelector(
  ".form-message"
);
const reservationDate = document.querySelector("#reservation-date");

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;

      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", isActive);
    });

    menuCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow =
        selectedCategory === "all" ||
        cardCategory === selectedCategory;

      card.hidden = !shouldShow;
    });
  });
});

if (reservationDate) {
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  reservationDate.min = localToday;
}

if (reservationForm && reservationMessage) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!reservationForm.checkValidity()) {
      reservationForm.reportValidity();

      reservationMessage.textContent =
        "Please complete all required fields correctly.";

      reservationMessage.classList.remove("success");
      reservationMessage.classList.add("error");

      return;
    }

    const selectedDate = reservationDate.value;

    if (selectedDate && selectedDate < reservationDate.min) {
      reservationMessage.textContent =
        "Please select today or a future date.";

      reservationMessage.classList.remove("success");
      reservationMessage.classList.add("error");

      return;
    }

    const formData = new FormData(reservationForm);
    const guestName = formData.get("name");

    reservationMessage.textContent =
      `Thanks${guestName ? `, ${guestName.trim()}` : ""}! ` +
      "Your reservation request has been validated. " +
      "This demo does not send bookings to the restaurant.";

    reservationMessage.classList.remove("error");
    reservationMessage.classList.add("success");

    reservationForm.reset();

    if (reservationDate) {
      reservationDate.min = localToday;
    }
  });
}