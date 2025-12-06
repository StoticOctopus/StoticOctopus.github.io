
// Find the element with id="year" in the footer
const yearElement = document.getElementById("year");

// If it exists, update it to the current year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// Find the scroll-to-top button (if present)
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button only when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll smoothly back to the top when button is clicked
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
