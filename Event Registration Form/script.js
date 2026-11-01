const Registrationform = document.getElementById("registrationForm");
const Feedback = document.getElementById("feedback");
const SelectInput = document.getElementById("ticketType");

const FullNameInput = document.getElementById("fullName");
const EmailInput = document.getElementById("email");

Registrationform.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = FullNameInput.value.trim();
    const email = EmailInput.value.trim();
    const select = SelectInput.value;
    
    if (name === "" || email === "" || select === "") {
        return Feedback.textContent = "Fill in these fields"
    } else {
        Feedback.textContent = "Thank you! your message has been submitted successfully"
        Feedback.style.color = "green";
        
        Registrationform.reset();
    }
})