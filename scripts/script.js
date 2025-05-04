document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.roadmap-item');

  function animateVisible() {
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 30);
      }
    });
  }

  window.addEventListener('scroll', animateVisible);
  window.addEventListener('load', animateVisible);
});