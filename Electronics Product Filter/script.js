const AllBtn = document.getElementById("allBtn");
const PhoneBtn = document.getElementById("phoneBtn");
const LaptopBtn = document.getElementById("laptopBtn");
const AccessoryBtn = document.getElementById("accessoryBtn");

const cards = document.querySelectorAll(".product-card");

AllBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "block";
    })
})

PhoneBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "none";
    })
    document.querySelectorAll(".phone").forEach(function (card) {
        card.style.display = "block";
    })
})

LaptopBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "none";
    })
    document.querySelectorAll(".laptop").forEach(function (card) {
        card.style.display = "block";
    })
})

AccessoryBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "none";
    })
    document.querySelectorAll(".accessory").forEach(function (card) {
        card.style.display = "block";
    })
})