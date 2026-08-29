import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal-up');
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Animated Numerical Stats Counters (Repo-2 Feature)
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach((statEl) => {
    const targetVal = parseFloat(statEl.getAttribute('data-target'));
    const isPercent = statEl.getAttribute('data-suffix') === '%';
    const isDecimal = targetVal % 1 !== 0;

    gsap.fromTo(
      statEl,
      { textContent: 0 },
      {
        textContent: targetVal,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: isDecimal ? 0.1 : 1 },
        scrollTrigger: {
          trigger: statEl,
          start: 'top 85%',
        },
        onUpdate: function () {
          const val = parseFloat(this.targets()[0].textContent);
          const suffix = statEl.getAttribute('data-suffix') || '';
          statEl.textContent = (isDecimal ? val.toFixed(1) : Math.floor(val)) + suffix;
        },
      }
    );
  });
}
