// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "P9ZGW1VF1qia5P_ng";
const EMAILJS_SERVICE_ID = "service_zkaasiw";
const EMAILJS_TEMPLATE_ID = "template_9z7u0na";

// Initialize EmailJS
(function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// DOM Elements
const header = document.getElementById("header");
const toTopBtn = document.getElementById("goTopBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const formStatus = document.getElementById("formStatus");

// Header Scroll Effect
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 100) {
    header.classList.add("scrolled");
    toTopBtn.style.display = "block";
  } else {
    header.classList.remove("scrolled");
    toTopBtn.style.display = "none";
  }
});

// Go to Top Button
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Contact Form Handler
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name || !email || !title || !message) {
    formStatus.style.color = "red";
    formStatus.textContent = "Please fill in all fields.";
    formStatus.classList.add("show");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.style.color = "red";
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.classList.add("show");
    return;
  }

  const templateParams = {
    name,
    email,
    title,
    message,
    time: new Date().toLocaleString(),
  };

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  formStatus.textContent = "";
  formStatus.classList.remove("show");

  emailjs
    .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
      formStatus.style.color = "green";
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.classList.add("show");
      contactForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      formStatus.style.color = "red";
      formStatus.textContent = "❌ Something went wrong. Please try again.";
      formStatus.classList.add("show");
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    });
});

// Smooth reveal animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".project-card, .skills-grid span, .journey-item, .experience-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
