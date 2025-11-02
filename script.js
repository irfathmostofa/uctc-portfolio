// Navbar background on scroll
const header = document.getElementById("header");
const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    goTopBtn.style.display = "block";
  } else {
    header.classList.remove("scrolled");
    goTopBtn.style.display = "none";
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Go to top
goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form demo
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out, Joy will reply soon!");
});
