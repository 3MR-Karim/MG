document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slidesContainer = document.querySelector(".carousel-slide");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 0;

  function updateSlideIndicator() {
    const slideIndicator = document.getElementById("current-slide");
    if (slideIndicator) {
      slideIndicator.textContent = `${currentSlide + 1}/${totalSlides}`;
    }
  }

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
    updateSlideIndicator();
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Initialize the slide indicator
  updateSlideIndicator();

  // Automatically change slides every 5 seconds (optional)
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
});

// -____________________________

document.querySelectorAll(".economic-impact .item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// //

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".item");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pageNumber = document.getElementById("page-number");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    pageNumber.textContent = `${index + 1}/${slides.length}`;
  }

  prevButton.addEventListener("click", () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
  });

  nextButton.addEventListener("click", () => {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});

// // //
// // ؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
// // ظظ
// // ---____________________________________________________---\\

// k__________________________________________________________

let indexo = 0;
const items = document.querySelectorAll(".InnerCsrouslel > div");
const prevButton = document.querySelector(".prevv");
const nextButton = document.querySelector(".nextt");
const totalItems = items.length;
const slideInterval = 3000; // الوقت بين التبديلات التلقائية (بالميللي ثانية)

// تحديث العرض
function updateEvent() {
  items.forEach((item, index) => {
    item.style.opacity = index === indexo ? "1" : "0"; // عرض أو إخفاء العناصر بالشفافية
    item.style.position = index === indexo ? "relative" : "absolute"; // تكديس العناصر فوق بعضها البعض
  });

  // تحديث مؤشر الشريحة الحالية
  document.querySelector(".current-slide").textContent = `${
    indexo + 1
  }/${totalItems}`;
}

// الانتقال إلى الشريحة السابقة
prevButton.addEventListener("click", function () {
  indexo = (indexo - 1 + totalItems) % totalItems; // الانتقال إلى العنصر السابق
  updateEvent();
});

// الانتقال إلى الشريحة التالية
nextButton.addEventListener("click", function () {
  indexo = (indexo + 1) % totalItems; // الانتقال إلى العنصر التالي
  updateEvent();
});

// التبديل التلقائي
let autoSlide = setInterval(() => {
  indexo = (indexo + 1) % totalItems; // الانتقال إلى العنصر التالي
  updateEvent();
}, slideInterval);

// إيقاف التبديل التلقائي عند التفاعل مع الأزرار
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    indexo = (indexo + 1) % totalItems; // الانتقال إلى العنصر التالي
    updateEvent();
  }, slideInterval);
}

prevButton.addEventListener("click", resetAutoSlide);
nextButton.addEventListener("click", resetAutoSlide);

// التحديث الأولي
updateEvent();

____________________________;
let slideIndex = 0;

function showSlides(n) {
  let slides = document.querySelectorAll(".carousel-slide .slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "flex";
  document.getElementById("current-slide").innerText = `(${slideIndex + 1}/${
    slides.length
  })`;
}

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});

// _______________
document.addEventListener("DOMContentLoaded", () => {
  const parentDiv = document.querySelector(".parent");

  if (window.innerWidth <= 768) {
    parentDiv.style.display = "flex";
    parentDiv.style.overflowX = "scroll";
    parentDiv.style.scrollSnapType = "x mandatory";

    const children = parentDiv.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.scrollSnapAlign = "start";
      children[i].style.flex = "0 0 auto";
    }
  }
});

// _____________________________
document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".carousel-slide .slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlidePosition() {
    const offset = -currentIndex * 100;
    document.querySelector(
      ".carousel-slide"
    ).style.transform = `translateX(${offset}%)`;
    document.getElementById("current-slide").textContent = `${
      currentIndex + 1
    }/${totalSlides}`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  setInterval(showNextSlide, 3000); // Auto-slide every 3 seconds
});

// مم// JavaScript for Carousel Navigation
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.classList.add("inactive");
    });
    slides[index].classList.remove("inactive");
    slides[index].classList.add("active");
    document.getElementById("current-slide").textContent = `${index + 1}/${
      slides.length
    }`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Initial slide display
  showSlide(currentSlide);
});

// ظظ_______________________________

document.addEventListener("DOMContentLoaded", function () {
  const statsContainer = document.querySelector(".stats");
  let isDown = false;
  let startX;
  let scrollLeft;

  statsContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    statsContainer.classList.add("active");
    startX = e.pageX - statsContainer.offsetLeft;
    scrollLeft = statsContainer.scrollLeft;
  });

  statsContainer.addEventListener("mouseleave", () => {
    isDown = false;
    statsContainer.classList.remove("active");
  });

  statsContainer.addEventListener("mouseup", () => {
    isDown = false;
    statsContainer.classList.remove("active");
  });

  statsContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - statsContainer.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    statsContainer.scrollLeft = scrollLeft - walk;
  });
});
// __________________________________________________-
// __________________________________________________-
