const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

const allBtn = document.getElementById("allBtn");
const conferenceBtn = document.getElementById("conferenceBtn");
const musicBtn = document.getElementById("musicBtn");
const exhibitionBtn = document.getElementById("exhibitionBtn");

const eventCards = document.querySelectorAll(".event-card");

const savedCategory = document.getElementById("savedCategory");
const savePreference = document.getElementById("savePreference");
const preferenceFeedback = document.getElementById("preferenceFeedback");

const contactForm = document.getElementById("contactForm");
const visitorName = document.getElementById("visitorName");
const visitorEmail = document.getElementById("visitorEmail");
const visitorMessage = document.getElementById("visitorMessage");
const formFeedback = document.getElementById("formFeedback");

/* Mobile navigation */
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});

/* Event filtering */
allBtn.addEventListener("click", function () {
    eventCards.forEach(function (card) {
        card.style.display = "block";
    });
});

conferenceBtn.addEventListener("click", function () {
    eventCards.forEach(function (card) {
        if (card.classList.contains("conference")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

musicBtn.addEventListener("click", function () {
    eventCards.forEach(function (card) {
        if (card.classList.contains("music")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

exhibitionBtn.addEventListener("click", function () {
    eventCards.forEach(function (card) {
        if (card.classList.contains("exhibition")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

/* Restore saved event preference */
const previousPreference = localStorage.getItem("eventCategory");

if (previousPreference !== null) {
    savedCategory.value = previousPreference;
}

/* Save event preference */
savePreference.addEventListener("click", function () {
    const category = savedCategory.value;

    if (category === "") {
        preferenceFeedback.textContent = "Please select an event category.";
        preferenceFeedback.style.color = "#ff7777";
    } else {
        localStorage.setItem("eventCategory", category);

        preferenceFeedback.textContent = "Your event preference has been saved!";
        preferenceFeedback.style.color = "#D982A5";
    }
});

/* Contact form validation */
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = visitorName.value.trim();
    const email = visitorEmail.value.trim();
    const message = visitorMessage.value.trim();

    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please complete all fields.";
        formFeedback.style.color = "#ff7777";
    } else {
        formFeedback.textContent = "Thank you! Your message has been received.";
        formFeedback.style.color = "#D982A5";

        contactForm.reset();
    }
});
