
/* Select the form and feedback element */
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

/* Select the form inputs */
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

/* Listen for form submission */
contactForm.addEventListener("submit", function (event) {

  /* Stop the browser from refreshing the page */
  event.preventDefault();

  /* Get the values entered by the user */
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  /* Check whether any field is empty */
  if (name === "" || email === "" || message === "") {

    feedback.textContent = "Please complete all fields.";
    feedback.style.color = "#efa17b";

  } else {

    feedback.textContent = "Thank you! Your message has been submitted.";
    feedback.style.color = "#8bc99b";

    contactForm.reset();

  }

});
