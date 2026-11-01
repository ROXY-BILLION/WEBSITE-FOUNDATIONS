const allBtn = document.getElementById("allBtn");
const coffeeBtn = document.getElementById("coffeeBtn");
const teaBtn = document.getElementById("teaBtn");
const pastryBtn = document.getElementById("pastryBtn");

const cards = document.querySelectorAll(".menu-card");

allBtn.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.style.display = "block";
  });
});

coffeeBtn.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.style.display = "none";
  });

  document.querySelectorAll(".coffee").forEach(function (card) {
    card.style.display = "block";
  });
});

teaBtn.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.style.display = "none";
  });

  document.querySelectorAll(".tea").forEach(function (card) {
    card.style.display = "block";
  });
});

pastryBtn.addEventListener("click", function () {
  cards.forEach(function (card) {
    card.style.display = "none";
  });

  document.querySelectorAll(".pastry").forEach(function (card) {
    card.style.display = "block";
  });
});
