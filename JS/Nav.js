document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navList = document.querySelector(".nav-list");

  navbarToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
