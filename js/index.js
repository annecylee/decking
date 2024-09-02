document.addEventListener("DOMContentLoaded", function() {
  init();
  setupFormSubmission();

  // Header scroll effect
 ndow.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Carousel
  // Carousel
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const imagesContainer = carousel.querySelector(".carousel-images");
    const dotsContainer = carousel.querySelector(".carousel-dots");
    let images = Array.from(imagesContainer.querySelectorAll("img"));
    let currentIndex = 0;
    let intervalId;

    // Function to get image at any index (positive or negative)
    function getImageAtIndex(index) {
      return images[((index % images.length) + images.length) % images.length];
    }

    // Set up the carousel
    function setupCarousel() {
      imagesContainer.style.width = `${images.length * 100}%`;
      images.forEach((img, index) => {
        img.style.width = `${100 / images.length}%`;
        img.style.left = `${index * 100}%`;
      });
    }

    // Create half as many dots as there are images
    const numberOfDots = Math.ceil(images.length / 2);
    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => showImage(i * 2));
      dotsContainer.appendChild(dot);
    }
    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

    function showImage(index) {
      currentIndex = index;
      updateCarousel();
      updateDots();
    }

    function updateCarousel() {
      if (currentIndex == images.length - 1) {
        return;
      } else {
        const translateValue = (-currentIndex * 100) / images.length;
        imagesContainer.style.transition = "transform 0.5s ease";
        imagesContainer.style.transform = `translateX(${translateValue}%)`;
      }

      // Check if we need to loop
      if (currentIndex < 0 || currentIndex >= images.length) {
        setTimeout(() => {
          imagesContainer.style.transition = "none";
          currentIndex =
            ((currentIndex % images.length) + images.length) % images.length;
          const newTranslateValue = (-currentIndex * 100) / images.length;
          imagesContainer.style.transform = `translateX(${newTranslateValue}%)`;
          setTimeout(() => {
            imagesContainer.style.transition = "transform 0.5s ease";
          }, 50);
        }, 500);
      }
    }
    function updateDots() {
      const actualIndex = Math.floor(currentIndex / 2);
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === actualIndex);
      });
    }

    function showNext() {
      showImage(currentIndex + 1);
    }

    function showPrev() {
      showImage(currentIndex - 1);
    }

    function startAutoPlay() {
      intervalId = setInterval(showNext, 3000);
    }

    function stopAutoPlay() {
      clearInterval(intervalId);
    }

    // Initialize
    setupCarousel();
    updateDots();
    startAutoPlay();

    carousel.addEventListener("mouseenter", stopAutoPlay);
    carousel.addEsventListener("mouseleave", startAutoPlay);

    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        showNext();
      } else if (touchEndX - touchStartX > 50) {
        showPrev();
      }
    });
  });
