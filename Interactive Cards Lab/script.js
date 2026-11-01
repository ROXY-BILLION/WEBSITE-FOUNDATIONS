
/* Select all product cards */
const cards = document.querySelectorAll(".product-card");

/* Add mouse events to every card */
cards.forEach(function (card) {

  card.addEventListener("mouseenter", function () {
    card.style.backgroundColor = "#5810a0";
  });

  card.addEventListener("mouseleave", function () {
    card.style.backgroundColor = "#1b132d";
  });

});
