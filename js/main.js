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