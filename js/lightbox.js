/* ==========================================
   LIGHTBOX.JS
========================================== */

window.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const closeBtn = document.querySelector(".lb-close");
    const prevBtn = document.querySelector(".lb-prev");
    const nextBtn = document.querySelector(".lb-next");

    // Stop if lightbox HTML doesn't exist
    if (!lightbox || !lightboxImg || !closeBtn || !prevBtn || !nextBtn) {
        console.error("Lightbox HTML not found.");
        return;
    }

    let images = [];
    let currentIndex = 0;

    function refreshImages() {
        images = [...document.querySelectorAll(".popup-img")];
    }

    function openLightbox(index) {

        refreshImages();

        if (images.length === 0) return;

        currentIndex = index;

        lightboxImg.src = images[currentIndex].src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    function nextImage() {

        refreshImages();

        if (images.length === 0) return;

        currentIndex++;

        if (currentIndex >= images.length)
            currentIndex = 0;

        lightboxImg.src = images[currentIndex].src;

    }

    function prevImage() {

        refreshImages();

        if (images.length === 0) return;

        currentIndex--;

        if (currentIndex < 0)
            currentIndex = images.length - 1;

        lightboxImg.src = images[currentIndex].src;

    }

    // Image Click
    document.addEventListener("click", function (e) {

        if (!e.target.classList.contains("popup-img")) return;

        refreshImages();

        currentIndex = images.indexOf(e.target);

        openLightbox(currentIndex);

    });

    // Close
    closeBtn.addEventListener("click", closeLightbox);

    // Next
    nextBtn.addEventListener("click", nextImage);

    // Previous
    prevBtn.addEventListener("click", prevImage);

    // Click Background
    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    // Keyboard
    document.addEventListener("keydown", function (e) {

        if (!lightbox.classList.contains("active")) return;

        if (e.key === "Escape") {

            closeLightbox();

        }

        if (e.key === "ArrowRight") {

            nextImage();

        }

        if (e.key === "ArrowLeft") {

            prevImage();

        }

    });

});