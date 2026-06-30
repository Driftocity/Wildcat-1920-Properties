document.addEventListener("DOMContentLoaded", () => {

  document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! We will contact you shortly for your estimate.");
    e.target.reset();
  });

});
