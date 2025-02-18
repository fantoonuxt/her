document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.popup-button');
  const popups = document.querySelectorAll('.popup');
  const overlays = document.querySelectorAll('.popup-overlay');
  
  if (buttons.length && popups.length && overlays.length) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const popupIndex = button.getAttribute('data-content') - 1; // -1 لأن الـindex يبدأ من 0
        popups[popupIndex].style.display = 'block';
        overlays[popupIndex].style.display = 'block';
      });
    });

    popups.forEach((popup, index) => {
      const closePopup = popup.querySelector('svg[id^="closePopup"]');
      const cancelButton = popup.querySelector('.button-border-dark');
      const overlay = overlays[index];

      const closePopupFunction = () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      };

      if (closePopup) {
        closePopup.addEventListener('click', closePopupFunction);
      }
      if (cancelButton) {
        cancelButton.addEventListener('click', closePopupFunction);
      }
      overlay.addEventListener('click', closePopupFunction);
    });
  } else {
    console.error('One or more elements are missing in the HTML.');
  }
});

  