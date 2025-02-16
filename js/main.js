const loginBtn = document.getElementById("loginBtn");
const iconBtn = document.getElementById("iconBtn");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
function changeImage(element, image) {
  let lipstick = document.getElementById("lipstick");
  lipstick.style.transition = "opacity 0.2s ease-in-out";
  lipstick.style.opacity = 0;
  lipstick.addEventListener('transitionend', function onFadeOut() {
      lipstick.src = image;
      lipstick.style.opacity = 1;
      lipstick.removeEventListener('transitionend', onFadeOut);
  });
  
  document.querySelectorAll('.color').forEach(color => color.classList.remove('active'));
  element.classList.add('active');
}
const shadeSection = document.getElementById("shadeSection");
const hiddenSection = document.getElementById("hiddenSection");
shadeSection.addEventListener("mouseenter", () => {
    hiddenSection.classList.add("active");
});
shadeSection.addEventListener("mouseleave", () => {
    hiddenSection.classList.remove("active");
});


// Show popup
loginBtn.addEventListener("click", function () {
    popup.style.display = "block";
    popupOverlay.style.display = "block";
});

iconBtn.addEventListener("click", function () {
    popup.style.display = "block";
    popupOverlay.style.display = "block";
});

// Hide popup
closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
});

// Close popup when clicking outside
popupOverlay.addEventListener("click", function () {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
});
function toggleDropdown() {
    let dropdown = document.getElementById("dropdown");
    let arrow = document.querySelector(".arrow");
    dropdown.classList.toggle("show"); 
    arrow.classList.toggle("rotate");
}
function selectOption(option) {
    document.getElementById("selected-option").innerText = option; 
    closeDropdown();
}
function closeDropdown() {
    document.getElementById("dropdown").classList.remove("show");
    document.querySelector(".arrow").classList.remove("rotate");
}
//


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,  
      touchRatio: 1,   
      touchAngle: 45,   
      breakpoints: {
        300: {
          slidesPerView: 1.5,
          },
        400: {
          slidesPerView: 2,
          },
        767: {
          slidesPerView: 2.2,
          },
      }
  });
});