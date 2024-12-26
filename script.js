// Profile Slideshow
let currentProfileSlide = 0;
const profileSlides = document.querySelectorAll(".profile_details > div");
const totalProfileSlides = profileSlides.length;

// Show the current profile slide
function showProfileSlide(index) {
  profileSlides.forEach((slide, i) => {
    slide.classList.remove("active", "prev", "next");
    if (i === index) {
      slide.classList.add("active");
    } else if (i === (index - 1 + totalProfileSlides) % totalProfileSlides) {
      slide.classList.add("prev");
    } else if (i === (index + 1) % totalProfileSlides) {
      slide.classList.add("next");
    }
  });
}

// Move to the next profile slide
function nextProfileSlide() {
  currentProfileSlide = (currentProfileSlide + 1) % totalProfileSlides;
  showProfileSlide(currentProfileSlide);
}

// Initialize profile slideshow
setInterval(nextProfileSlide, 4000); // Change profile slide every 4 seconds
showProfileSlide(currentProfileSlide);

// Highlight Active Section Link in Navigation
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});

// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("sidebarToggle");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});


function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
