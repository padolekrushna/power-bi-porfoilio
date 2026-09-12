document.getElementById('year').textContent = new Date().getFullYear();

// One quiet entrance for the hero only — not repeated on every section.
const heroText = document.querySelector('.hero-text');
const heroVisual = document.querySelector('.hero-visual');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroText && heroVisual && !reduceMotion) {
  [heroText, heroVisual].forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${i * 0.1}s`;
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      [heroText, heroVisual].forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
  });
}
