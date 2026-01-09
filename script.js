const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    caption: "رعاية شاملة للأيتام والأسر العفيفة",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    caption: "تمكين الأسر عبر مبادرات مستدامة",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    caption: "مبادرات تعليمية وصحية متكاملة",
  },
];

const sliderImage = document.getElementById("slider-image");
const sliderCaption = document.getElementById("slider-caption");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const dotsContainer = document.getElementById("slider-dots");
const year = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

let currentSlide = 0;

const renderDots = () => {
  if (!dotsContainer) {
    return;
  }
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("slider__dot");
    if (index === currentSlide) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlide();
    });
    dotsContainer.appendChild(dot);
  });
};

const updateSlide = () => {
  if (!sliderImage || !sliderCaption) {
    return;
  }
  sliderImage.src = slides[currentSlide].image;
  sliderCaption.textContent = slides[currentSlide].caption;
  renderDots();
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
};

if (prevButton) {
  prevButton.addEventListener("click", prevSlide);
}
if (nextButton) {
  nextButton.addEventListener("click", nextSlide);
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
updateSlide();
setInterval(nextSlide, 6000);
