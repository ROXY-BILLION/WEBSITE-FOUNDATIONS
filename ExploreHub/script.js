/* Select navigation elements */
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

/* Open and close the navigation menu */
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});


/* Select filter buttons */
const allBtn = document.getElementById("allBtn");
const natureBtn = document.getElementById("natureBtn");
const cityBtn = document.getElementById("cityBtn");
const beachBtn = document.getElementById("beachBtn");

/* Select all destination cards */
const cards = document.querySelectorAll(".destination-card");

/* Show all destination cards */
allBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "block";
    });
});

/* Show nature cards */
natureBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "none";
    });

    document.querySelectorAll(".nature").forEach(function (card) {
        card.style.display = "block";
    });
});

/* Show city cards */
cityBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "none";
    });

    document.querySelectorAll(".city").forEach(function (card) {
        card.style.display = "block";
    });
});

/* Show beach cards */
beachBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "none";
    });

    document.querySelectorAll(".beach").forEach(function (card) {
        card.style.display = "block";
    });
});


/* Select preference elements */
const savedCategory = document.getElementById("savedCategory");
const savePreference = document.getElementById("savePreference");
const preferenceFeedback = document.getElementById("preferenceFeedback");

/* Retrieve saved category */
const previousCategory = localStorage.getItem("preferredCategory");

/* Restore previous category */
if (previousCategory !== null) {
    savedCategory.value = previousCategory;
}

/* Save selected category */
savePreference.addEventListener("click", function () {

    const category = savedCategory.value;

    if (category === "") {
        preferenceFeedback.textContent = "Please choose a category first.";
        preferenceFeedback.style.color = "#F07867";
    } else {
        localStorage.setItem("preferredCategory", category);

        preferenceFeedback.textContent = "Your category preference has been saved.";
        preferenceFeedback.style.color = "#B6E36A";
    }

});


/* Select enquiry form elements */
const enquiryForm = document.getElementById("enquiryForm");
const visitorName = document.getElementById("visitorName");
const visitorEmail = document.getElementById("visitorEmail");
const visitorMessage = document.getElementById("visitorMessage");
const formFeedback = document.getElementById("formFeedback");

/* Validate enquiry form */
enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = visitorName.value.trim();
    const email = visitorEmail.value.trim();
    const message = visitorMessage.value.trim();

    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please complete all fields.";
        formFeedback.style.color = "#F07867";
    } else {
        formFeedback.textContent = "Your enquiry has been submitted successfully.";
        formFeedback.style.color = "#B6E36A";

        enquiryForm.reset();
    }

});
