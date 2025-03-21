document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
