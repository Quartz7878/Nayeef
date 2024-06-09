document.addEventListener("DOMContentLoaded", function() {
    console.log("Nayeef's Portfolio Loaded");

    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});
