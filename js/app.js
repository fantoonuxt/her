const circles = document.querySelectorAll('.circle');
        
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circles.forEach(c => c.classList.remove('active'));
        circle.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
  function increment(button) {
      let targetId = button.getAttribute('data-target');
      let counterElement = document.querySelector(`#${targetId}`);
      if (!counterElement) return;
      let count = parseInt(counterElement.innerText) || 0;
      count++;
      counterElement.innerText = count;
  }
  function decrement(button) {
      let targetId = button.getAttribute('data-target');
      let counterElement = document.querySelector(`#${targetId}`);
      if (!counterElement)  return;
      let count = parseInt(counterElement.innerText) || 0;
      if (count > 1) {
          count--;
          counterElement.innerText = count;
      }
  }
  window.increment = increment;
  window.decrement = decrement;
});

function toggleSection(element) {
  const content = element.nextElementSibling;
  const section = element.parentElement;
  
  if (content.style.display === "none") {
      content.style.display = "block";
      section.classList.remove("open");
  } else {
      content.style.display = "none";
      section.classList.add("open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".intro-product");
  const targetDiv = document.querySelector(".fixed-div");
  if (!section || !targetDiv) return; 
  const sectionTop = section.offsetTop;
  const offset = 20;
  function checkSticky() {
      const scrollY = window.scrollY;
      if (scrollY >= sectionTop - offset) {
          targetDiv.classList.add("sticky-container");
      } else {
          targetDiv.classList.remove("sticky-container");
      }
  }
  checkSticky();
  window.addEventListener("scroll", checkSticky);
});


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,  
      touchRatio: 1,   
      touchAngle: 45,   
      breakpoints: {
        300: {
          slidesPerView: 1.1,
          },
        400: {
          slidesPerView: 1.1,
          },
        500: {
          slidesPerView: 1.7,
          },
        767: {
          slidesPerView: 2.2,
          },
      }
  });
});