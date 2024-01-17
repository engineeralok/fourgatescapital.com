// AOS.init({
//     once: true,
// });

var cursor = document.getElementById('cursor');

cursor.style.display = 'none';

var lastX = 0;
var lastY = 0;
var isFirstMove = true;

// function updateCursorPosition(e) {
//     cursor.style.display = 'block';
//     lastX = e.clientX - cursor.offsetWidth / 2;
//     lastY = e.clientY - cursor.offsetHeight / 2;

//     // Show the cursor when there's mouse movement
//     // cursor.style.display = isFirstMove ? 'block' : 'none';

//     cursor.style.height = "15px";
//     cursor.style.width = "15px";

//     gsap.to(cursor, { duration: 1, x: lastX, y: lastY, ease: "power2.out" });

//     // Set a timer to hide the cursor after the first movement (200ms delay)
//     if (isFirstMove) {
//         isFirstMove = false;
//     }
// }

// document.addEventListener('mousemove', updateCursorPosition);

// document.addEventListener('scroll', function () {
//     cursor.style.display = 'block';
//     gsap.to(cursor, { duration: 0.2, x: lastX, y: lastY, ease: "power2.out" });
// });

// // Check if it's the first page load
// if (document.readyState === 'complete') {
//     // If it's the first load, set display to 'none'
//     cursor.style.display = 'none';
// } else {
//     // If it's not the first load, wait for the 'load' event and then set display to 'none'
//     window.addEventListener('load', function () {
//         cursor.style.display = 'none';
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');
  
    carousels.forEach((carousel) => {
      const images = carousel.querySelector('.carousel-images');
      const prevBtn = carousel.querySelector('.prev-btn');
      const nextBtn = carousel.querySelector('.next-btn');
      const indicatorsContainer = carousel.querySelector('.indicator-container');
  
      let currentIndex = 0;
  
      function updateCarousel() {
        images.style.transform = `translateX(${-currentIndex * 100}%)`;
        updateIndicators();
      }
  
      function updateIndicators() {
        indicatorsContainer.innerHTML = '';
        images.querySelectorAll('.carousel-image').forEach((_, index) => {
          const indicator = document.createElement('div');
          indicator.classList.add('indicator');
          if (index === currentIndex) {
            indicator.classList.add('active');
          }
          indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
          });
          indicatorsContainer.appendChild(indicator);
        });
      }
  
      function showPrev() {
        currentIndex = (currentIndex - 1 + images.children.length) % images.children.length;
        updateCarousel();
      }
  
      function showNext() {
        currentIndex = (currentIndex + 1) % images.children.length;
        updateCarousel();
      }
  
      prevBtn.addEventListener('click', showPrev);
      nextBtn.addEventListener('click', showNext);
  
      updateCarousel();
    });
  });
  