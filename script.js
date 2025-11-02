// Smooth scrolling and navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Form submission alert
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out, Joy will get back to you soon!");
});
