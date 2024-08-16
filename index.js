document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".innerMainnOne");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  prevButton.addEventListener("click", () => {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides);
  });

  nextButton.addEventListener("click", () => {
    showSlide((currentSlide + 1) % totalSlides);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Automatically change slides every 5 seconds (optional)
  setInterval(() => {
    showSlide((currentSlide + 1) % totalSlides);
  }, 5000);
});

// ___________________________________

document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navOne = document.querySelector(".navOne");
  const buttonNavTwo = document.querySelector(".buttonNavTwo");
  const navTwoImg = document.querySelector(".navTwoImg ");
  const links = document.querySelectorAll(".navTwo ul li a");

  if (window.scrollY > 1) {
    header.classList.add("nav-scrolled");
    navTwoImg.style.display = "block";
    buttonNavTwo.style.display = "flex";
    navOne.style.display = "none";

    links.forEach((link) => {
      link.style.color = "black";
    });

    buttonNavTwo.querySelectorAll("button").forEach((button) => {
      button.style.color = "black";
    });
  } else {
    header.classList.remove("nav-scrolled");
    navTwoImg.style.display = "none";
    navOne.style.display = "flex";
    // استخدم "flex" للحفاظ على التنسيق

    links.forEach((link) => {
      link.style.color = ""; // يمكن تغيير اللون إلى القيمة الافتراضية أو تركه فارغًا
    });

    // إعادة اللون الافتراضي لنصوص الأزرار (إذا كان هناك نصوص في الأزرار)
    buttonNavTwo.querySelectorAll("button").forEach((button) => {
      button.style.color = ""; // يمكن تغيير اللون إلى القيمة الافتراضية أو تركه فارغًا
    });
  }
});

/*
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
*/

/*
_____
_____
_____
_____
_____
_____
_____
*/
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navOne = document.querySelector(".navOne");
  const buttonNavTwo = document.querySelector(".buttonNavTwo");
  const navTwoImg = document.querySelector(".navTwoImg ");
  const links = document.querySelectorAll(".navTwo ul li a");

  if (window.scrollY > 1) {
    header.classList.add("nav-scrolled");
    navTwoImg.style.display = "block";
    buttonNavTwo.style.display = "flex"; // استخدم "flex" إذا كانت الأزرار بحاجة إلى تنسيق باستخدام Flexbox
    navOne.style.display = "none";

    // تغيير لون النص لكل رابط
    links.forEach((link) => {
      link.style.color = "black";
    });

    // تغيير لون النص داخل الأزرار (إذا كان هناك نصوص في الأزرار)
    buttonNavTwo.querySelectorAll("button").forEach((button) => {
      button.style.color = "black";
    });
  } else {
    header.classList.remove("nav-scrolled");
    navTwoImg.style.display = "none";
    navOne.style.display = "flex"; // استخدم "flex" للحفاظ على التنسيق

    // إعادة اللون الافتراضي للنصوص
    links.forEach((link) => {
      link.style.color = ""; // يمكن تغيير اللون إلى القيمة الافتراضية أو تركه فارغًا
    });

    // إعادة اللون الافتراضي لنصوص الأزرار (إذا كان هناك نصوص في الأزرار)
    buttonNavTwo.querySelectorAll("button").forEach((button) => {
      button.style.color = ""; // يمكن تغيير اللون إلى القيمة الافتراضية أو تركه فارغًا
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-bttn");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
    document.body.style.overflow = "hidden"; // تعطيل التمرير
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    document.body.style.overflow = ""; // تمكين التمرير
  });
});

/*
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
_____
*/

// _________\\
// _________\\
// _________\\

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
const slideInterval = 3000;

function updateEvent() {
  items.forEach((item, index) => {
    item.style.opacity = index === indexo ? "1" : "0";
    item.style.position = index === indexo ? "relative" : "absolute";
  });

  document.querySelector(".current-slide").textContent = `${
    indexo + 1
  }/${totalItems}`;
}

prevButton.addEventListener("click", function () {
  indexo = (indexo - 1 + totalItems) % totalItems;
  updateEvent();
});

nextButton.addEventListener("click", function () {
  indexo = (indexo + 1) % totalItems;
  updateEvent();
});

let autoSlide = setInterval(() => {
  indexo = (indexo + 1) % totalItems;
  updateEvent();
}, slideInterval);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    indexo = (indexo + 1) % totalItems;
    updateEvent();
  }, slideInterval);
}

prevButton.addEventListener("click", resetAutoSlide);
nextButton.addEventListener("click", resetAutoSlide);

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
  const items = Array.from(statsContainer.children);
  let isDown = false;
  let startX;
  let currentIndex = 0;

  statsContainer.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
  });

  statsContainer.addEventListener("touchend", (e) => {
    if (!isDown) return;
    isDown = false;
    const moveX = e.changedTouches[0].pageX - startX;
    const threshold = 50; // Adjust threshold for swipe sensitivity
    if (moveX > threshold && currentIndex > 0) {
      currentIndex--;
    } else if (moveX < -threshold && currentIndex < items.length - 1) {
      currentIndex++;
    }
    items[currentIndex].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  });

  statsContainer.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
  });
});

// __________________________________________________-
// __________________________________________________-
