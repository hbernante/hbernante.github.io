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

// Get the modal
const modal = document.getElementById("myModal");
const modalImg1 = document.getElementById("modal-img1");
const modalImg2 = document.getElementById("modal-img2");
const modalImg3 = document.getElementById("modal-img3");
const modalImg4 = document.getElementById("modal-img4");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on an image, open the modal and display the images and description
document.querySelectorAll(".image").forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    
    // Set the images and description based on the clicked image
    switch (index) {
      case 0:
        modalImg1.src = "images/project_showcase/azure_blob.png";
        modalImg2.src = "images/project_showcase/azure_blob.png";
        modalImg3.src = "images/project_showcase/azure_blob.png";
        modalImg4.src = "images/project_showcase/azure_blob.png";
        modalTitle.textContent = "Azure Blob Storage";
        modalDescription.textContent = "Description for Azure Blob Storage.";
        break;
      case 1:
        modalImg1.src = "https://images.unsplash.com/photo-161019435236";
        modalImg2.src = "https://images.unsplash.com/photo-161019435236";
        modalImg3.src = "https://images.unsplash.com/photo-161019435236";
        modalImg4.src = "https://images.unsplash.com/photo-161019435236";
        modalTitle.textContent = "Unsplash Image";
        modalDescription.textContent = "Description for Unsplash Image.";
        break;
        case 2:
        modalImg1.src = "https://images.unsplash.com/photo-161019435236";
        modalImg2.src = "https://images.unsplash.com/photo-161019435236";
        modalImg3.src = "https://images.unsplash.com/photo-161019435236";
        modalImg4.src = "https://images.unsplash.com/photo-161019435236";
        modalTitle.textContent = "Unsplash Image";
        modalDescription.textContent = "Description for Unsplash Image.";
        break;
        case 3:
        modalImg1.src = "https://images.unsplash.com/photo-161019435236";
        modalImg2.src = "https://images.unsplash.com/photo-161019435236";
        modalImg3.src = "https://images.unsplash.com/photo-161019435236";
        modalImg4.src = "https://images.unsplash.com/photo-161019435236";
        modalTitle.textContent = "Unsplash Image";
        modalDescription.textContent = "Description for Unsplash Image.";
        break;
      // Add more cases as needed for other images
    }
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  // Highlight active section link
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

  // Select the sidebar and toggle button
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('sidebarToggle');

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden'); // Toggle the hidden class
});
