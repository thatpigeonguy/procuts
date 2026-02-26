let slideIndex = 0;
let autoSlideInterval;

// Dynamically load images
function loadImages(imageArray) {
    const container = document.querySelector('.slideshow-container');
    const dotsContainer = document.querySelector('.dots-container');

    imageArray.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.classList.add('mySlides');
        slide.style.display = index === 0 ? 'block' : 'none';

        const img = document.createElement('img');
        img.src = image;
        img.style.width = '100%';

        slide.appendChild(img);
        container.appendChild(slide);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('onclick', `currentSlide(${index + 1})`);
        dotsContainer.appendChild(dot);
    });
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Hide all slides and deactivate all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoScroll();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
    resetAutoScroll();
}

function autoScrollSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

function startAutoScroll() {
    autoSlideInterval = setInterval(autoScrollSlides, 2500); // milliseconds
}

function resetAutoScroll() {
    clearInterval(autoSlideInterval);
    startAutoScroll();
}

const images = [
  "/assets/img/gallery/20240822_.webp",
  "/assets/img/gallery/20240822_(1).webp",
  "/assets/img/gallery/20240823_.webp",
  "/assets/img/gallery/20240823_(1).webp",
  "/assets/img/gallery/FullSizeR.webp",
  "/assets/img/gallery/FullSizeR(1).webp",
  "/assets/img/gallery/FullSizeR(2).webp",
  "/assets/img/gallery/FullSizeR(3).webp",
  "/assets/img/gallery/FullSizeR(4).webp",
  "/assets/img/gallery/FullSizeR(5).webp",
  "/assets/img/gallery/image0000.webp",
  "/assets/img/gallery/image0000(1).webp",
  "/assets/img/gallery/IMG_0515.webp",
  "/assets/img/gallery/IMG_0518.webp",
  "/assets/img/gallery/IMG_0522.webp",
  "/assets/img/gallery/IMG_0525.webp",
  "/assets/img/gallery/IMG_0528.webp",
  "/assets/img/gallery/IMG_0529.webp",
  "/assets/img/gallery/IMG_0530.webp",
  "/assets/img/gallery/IMG_1287.webp",
  "/assets/img/gallery/IMG_1289.webp",
  "/assets/img/gallery/IMG_1732.webp",
  "/assets/img/gallery/IMG_1735.webp",
  "/assets/img/gallery/IMG_1741.webp",
  "/assets/img/gallery/IMG_4988.webp",
  "/assets/img/gallery/IMG_5873.webp",
  "/assets/img/gallery/IMG_5875.webp",
  "/assets/img/gallery/IMG_5876.webp",
  "/assets/img/gallery/IMG_5877.webp",
  "/assets/img/gallery/IMG_5878.webp",
  "/assets/img/gallery/IMG_7518.webp",
  "/assets/img/gallery/IMG_7521.webp",
  "/assets/img/gallery/IMG_7572.webp",
  "/assets/img/gallery/IMG_7573.webp",
  "/assets/img/gallery/IMG_7574.webp",
  "/assets/img/gallery/IMG_7575.webp",
];


loadImages(images);
showSlides(slideIndex);
startAutoScroll();
