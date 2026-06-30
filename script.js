document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SMOOTH SCROLLING
  ========================= */

  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  /* =========================
     FORM HANDLING (STATIC)
  ========================= */

  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector("input[type='text']").value;
      const email = this.querySelector("input[type='email']").value;
      const phone = this.querySelector("input[type='tel']").value;

      if (!name || !email || !phone) {
        alert("Please fill out all required fields.");
        return;
      }

      // Simulated success (GitHub Pages has no backend)
      alert("Thank you! We will contact you within 24 hours.");

      this.reset();
    });
  }

  /* =========================
     SCROLL ANIMATIONS
  ========================= */

  const animatedElements = document.querySelectorAll(".card, .property-card, .stat");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

  /* =========================
     NAV SHRINK EFFECT
  ========================= */

  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.padding = "5px 0";
      nav.style.background = "rgba(11, 15, 20, 0.95)";
    } else {
      nav.style.padding = "0";
      nav.style.background = "rgba(11, 15, 20, 0.85)";
    }
  });

});
