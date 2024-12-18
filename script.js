let currentSlide = 0;
const slides = document.querySelectorAll(".profile_details > div");
const totalSlides = slides.length;

// Handle profile slideshow
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev", "next");
    if (i === index) {
      slide.classList.add("active");
    } else if (i === (index - 1 + totalSlides) % totalSlides) {
      slide.classList.add("prev");
    } else if (i === (index + 1) % totalSlides) {
      slide.classList.add("next");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 8000); // Change profile slide every 8 seconds
showSlide(currentSlide); // Initialize the first slide

// Function to scroll the gallery images using the mouse
const track = document.getElementById("image-track");

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  track.classList.add("active");
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => {
  isDown = false;
  track.classList.remove("active");
});

track.addEventListener("mouseup", () => {
  isDown = false;
  track.classList.remove("active");
});

track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the scroll speed
  track.scrollLeft = scrollLeft - walk;
});