document.addEventListener("DOMContentLoaded", function () {
    const featureItems = document.querySelectorAll(".feature-item");

    const animateItems = (items, isMobile) => {
        let delay = 0;
        if (isMobile) {
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("show");
                }, index * 1000);
            });
        } else {
            for (let i = 0; i < items.length / 2; i++) {
                if (items[i]) {
                    setTimeout(() => {
                        items[i].classList.add("show");
                    }, delay);
                    delay += 1000;
                }
                if (items[i + Math.floor(items.length / 2)]) {
                    setTimeout(() => {
                        items[i + Math.floor(items.length / 2)].classList.add("show");
                    }, delay);
                    delay += 1000;
                }
            }
        }
    };

    const handleAnimation = () => {
        const isMobile = window.innerWidth <= 768;
        animateItems(featureItems, isMobile);
    };

    handleAnimation();

    window.addEventListener('resize', () => {
        featureItems.forEach(item => item.classList.remove('show'));
        handleAnimation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-message");
    const closeButton = document.getElementById("close-popup");

    function showPopup() {
        popup.style.display = "block";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    // Show popup when the testimonials section is in view
    const testimonialsSection = document.querySelector(".testimonials-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showPopup();
            }
        });
    });

    observer.observe(testimonialsSection);

    // Close popup when the close button is clicked
    closeButton.addEventListener("click", closePopup);
});
