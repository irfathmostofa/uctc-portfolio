// ===== Header Scroll Effect =====
const header = document.getElementById("header");
const toTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    toTopBtn.style.display = "block";
  } else {
    header.classList.remove("scrolled");
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== EmailJS Contact Form =====
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const formStatus = document.getElementById("formStatus");

const EMAILJS_SERVICE_ID = "service_zkaasiw";
const EMAILJS_TEMPLATE_ID = "template_9z7u0na";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !title || !message) {
    formStatus.style.color = "red";
    formStatus.textContent = "Please fill in all fields.";
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

  emailjs
    .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
      formStatus.style.color = "green";
      formStatus.textContent = "✅ Message sent successfully!";
      contactForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      formStatus.style.color = "red";
      formStatus.textContent = "❌ Something went wrong. Please try again.";
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    });
});
