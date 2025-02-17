document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.popup-button');
  const popups = document.querySelectorAll('.popup');
  const overlays = document.querySelectorAll('.popup-overlay');
  
  if (buttons.length && popups.length && overlays.length) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const popupIndex = button.getAttribute('data-content') - 1; // -1 لأن الـindex يبدأ من 0
        // Show the popup and overlay based on data-content
        popups[popupIndex].style.display = 'block';
        overlays[popupIndex].style.display = 'block';
      });
    });

    // Close popups when clicking the close button or overlay
    popups.forEach((popup, index) => {
      const closePopup = document.getElementById(`closePopup${index + 1}`);
      const overlay = overlays[index];

      // Check if the closePopup exists before adding event listener
      if (closePopup) {
        closePopup.addEventListener('click', () => {
          popup.style.display = 'none';
          overlay.style.display = 'none';
        });
      }

      // Close popup when clicking outside the popup (on overlay)
      overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      });
    });
  } else {
    console.error('One or more elements are missing in the HTML.');
  }
});
  