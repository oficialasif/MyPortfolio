document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('#typed', {
        strings: ["Tech Enthusiast", "Developer", "Programmer"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            const currentActive = document.querySelector(".active");
            if (currentActive) {
                currentActive.classList.remove("active");
            }
            link.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const projectContents = document.querySelectorAll(".project-content");

    tabButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const tabName = button.getAttribute("data-tab");

            tabButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            projectContents.forEach(function(content) {
                content.classList.remove("active");
            });

            button.classList.add("active");
            const activeContent = document.querySelector(`.project-content[data-tab="${tabName}"]`);
            activeContent.classList.add("active");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
