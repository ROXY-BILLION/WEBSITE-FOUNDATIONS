/* Select the HTML elements */
const fontSize = document.getElementById("fontSize");
const saveButton = document.getElementById("saveButton");
const readingText = document.getElementById("readingText");
const feedback = document.getElementById("feedback");

/* Retrieve the previously saved font size */
const savedFontSize = localStorage.getItem("readingFontSize");

/* Restore the saved preference */
if (savedFontSize !== null) {
    fontSize.value = savedFontSize;
    readingText.style.fontSize = savedFontSize;
}

/* Save the selected preference when the button is clicked */
saveButton.addEventListener("click", function () {

    const selectedSize = fontSize.value;

    /* Apply the selected font size */
    readingText.style.fontSize = selectedSize;

    /* Save the preference in localStorage */
    localStorage.setItem("readingFontSize", selectedSize);

    feedback.textContent = "Your reading preference has been saved.";
    feedback.style.color = "#8bc99b";

});
