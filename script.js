const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const year = document.getElementById("year");
const chips = document.querySelectorAll(".chip");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
  });
});
