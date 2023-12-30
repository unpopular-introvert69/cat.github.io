// for the navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Get DOM elements
const rows = document.querySelectorAll('.row');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close-btn');

// Function to open the lightbox with clicked image
function openLightbox(imageSrc) {
    lightboxContent.src = imageSrc;
    lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add click event listeners to thumbnails
rows.forEach(row => {
    row.addEventListener('click', () => {
        const imageSrc = row.querySelector('img').src;
        openLightbox(imageSrc);
    });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', closeLightbox);