/* Small, accessible scroll-reveal motion for Bowen Cars */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  document.documentElement.classList.add('motion-ready');

  const targets = document.querySelectorAll(
    'main > section, #inventory > article, #story, #mission, #customer-choice, #contact-details, #opening-hours, #enquiry'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  targets.forEach((el) => observer.observe(el));
})();
