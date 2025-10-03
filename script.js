// menubar
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
      menuIcon.classList.replace('fa-times', 'fa-bars');
    }
  });
// texstmonial

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; 
  }

// page scroll animation
    // animation

document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");

  function elementInView(el, offset = 100) {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
  }

  function displayScrollElement(el) {
    el.classList.add("show");
  }

  function handleScrollAnimation() {
    scrollElements.forEach(el => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // first load check
});


