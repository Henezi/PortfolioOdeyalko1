document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll('.work-card img');

  const fullscreen = document.querySelector('.fullscreen');

  const fullscreenImage = fullscreen.querySelector('img');


  items.forEach((image) => {

    image.addEventListener('click', () => {

      fullscreen.classList.add('active');

      fullscreenImage.src = image.src;

    });

  });


  fullscreen.addEventListener('click', () => {

    fullscreen.classList.remove('active');

  });


  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

      fullscreen.classList.remove('active');

    }

  });

});