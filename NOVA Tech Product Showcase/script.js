const cards = document.querySelectorAll(".product-card");

cards.forEach(function (card){
    card.addEventListener("mouseenter", function () {
        card.style.backgroundColor = "Green";
    })

    card.addEventListener("mouseleave", function () {
        card.style.backgroundColor = "purple";
    })
})