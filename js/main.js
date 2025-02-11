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
