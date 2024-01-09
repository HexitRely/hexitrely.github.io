// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const contentBoxes = document.querySelectorAll('.content-box, .team-member-box');
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.popup');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupContent = document.getElementById('popup-content');

  contentBoxes.forEach(box => {
    box.addEventListener('click', function() {
      const title = this.getAttribute('data-title');
      const content = this.getAttribute('data-content');
      const imageUrl = this.getAttribute('data-image');

      popupTitle.textContent = title;
      popupContent.textContent = content;
      popupImage.src = imageUrl;

      overlay.style.display = 'flex';
      popup.style.display = 'block';
    });
  });

  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });
});
