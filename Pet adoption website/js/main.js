// Simple mobile navigation toggle (beginner friendly)
document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
