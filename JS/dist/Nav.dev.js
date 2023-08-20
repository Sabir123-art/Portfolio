"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.querySelector(".navbar-toggle");
  var navList = document.querySelector(".nav-list");
  navbarToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});