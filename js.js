const cards = document.querySelectorAll('.project-card');

cards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)`;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'translateY(0px) rotateX(0deg) rotateY(0deg)';

  });

});