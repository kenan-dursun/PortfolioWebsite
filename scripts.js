document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Leo's Dev Hub!");

    let menuLinks = document.querySelectorAll("nav a");

    for (let link of menuLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let destination = document.querySelector(this.getAttribute("href"));
            if (destination) {
                destination.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});