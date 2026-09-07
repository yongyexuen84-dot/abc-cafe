
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const nav = document.querySelector(".nav-links");
            nav.classList.remove("active");
        });
    });

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
