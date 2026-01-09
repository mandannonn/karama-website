const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    caption: "رعاية تعليمية ونفسية للأيتام",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    caption: "مبادرات غذائية وصحية للأسر العفيفة",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    caption: "تمكين اقتصادي ومهني للمستفيدين",
  },
];

const heroImage = document.getElementById("hero-image");
const heroCaption = document.getElementById("hero-caption");
const prevButton = document.getElementById("hero-prev");
const nextButton = document.getElementById("hero-next");
const dotsContainer = document.getElementById("hero-dots");
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const year = document.getElementById("year");

let currentIndex = 0;

const renderDots = () => {
  if (!dotsContainer) {
    return;
  }
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("slider__dot");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide();
    });
    dotsContainer.appendChild(dot);
  });
};

const updateSlide = () => {
  if (!heroImage || !heroCaption) {
    return;
  }
  heroImage.src = slides[currentIndex].image;
  heroCaption.textContent = slides[currentIndex].caption;
  renderDots();
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
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
