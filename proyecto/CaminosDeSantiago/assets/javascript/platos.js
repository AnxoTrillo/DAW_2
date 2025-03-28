document.addEventListener("DOMContentLoaded", function () {
    let carousel = null;
    if (screen.width > 567) {
        carousel = document.getElementById("carouselExample");
    } else {
        carousel = document.getElementById("carouselExampleSmallScreen");
    }

    if (carousel) {
        const prevButton = carousel.getElementsByTagName("button")[0];
        const nextButton = carousel.getElementsByTagName("button")[1];
        const items = carousel.querySelectorAll(".carousel-item");

        function updateButtons() {
            const activeIndex = [...items].findIndex(item => item.classList.contains("active"));
            prevButton.style.display = activeIndex === 0 ? "none" : "block";
            nextButton.style.display = activeIndex === items.length - 1 ? "none" : "block";
        }

        carousel.addEventListener("slid.bs.carousel", updateButtons);
        updateButtons();
    }

    window.onload = function () {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../../assets/styles/styles.css";
        document.querySelectorAll("*")?.appendChild(link);
    };
});
