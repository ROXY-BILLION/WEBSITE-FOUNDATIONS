const SaveButton = document.getElementById("saveButton");
const Duration = document.getElementById("duration");
const Feedback = document.getElementById("feedback");

const savedDuration = localStorage.getItem("Duration");
Duration.value = savedDuration;
if (savedDuration !== null) {
    Duration.value = savedDuration;
}
SaveButton.addEventListener("click", function () {
    const duration = Duration.value;

    localStorage.setItem("Duration", duration);

    Feedback.textContent = "You have successfully saved ur workout time";
    Feedback.style.color = "white";
    Feedback.style.backgroundColor = "green";
})