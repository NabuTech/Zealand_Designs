document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.querySelector(".logo-container");
    const logos = logoContainer.innerHTML;
    logoContainer.innerHTML += logos; // Duplicate logos for seamless scrolling

    let speed = 1; // Adjust speed as needed
    let step = speed;
    function scrollLogos() {
        logoContainer.scrollLeft += step;
        if (logoContainer.scrollLeft >= logoContainer.scrollWidth / 2) {
            logoContainer.scrollLeft = 0;
        }
        requestAnimationFrame(scrollLogos);
    }
    scrollLogos();
});