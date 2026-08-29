// hero.js

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  gsap.registerPlugin(ScrollTrigger);

  const heroImg = document.querySelector(".hero-img img");
  if (!heroImg) return;

  // Dynamically mapped active hero images from public/images/hero/
  const heroImages = [
    "/images/hero/img2.jpg",
    "/images/hero/img3.jpg",
    "/images/hero/img5.png",
    "/images/hero/img6.png",
    "/images/hero/img7.jpg",
    "/images/hero/img8.jpg",
    "/images/hero/img10.jpg"
  ];

  let currentImageIndex = 0;
  let scrollTriggerInstance = null;

  // Set initial image
  heroImg.src = heroImages[0];

  // Cycle through hero images every 250ms
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImg.src = heroImages[currentImageIndex];
  }, 250);

  // Initialize animations with ScrollTrigger
  const initAnimations = () => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
    }

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: ".hero-img-holder",
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(".hero-img", {
          y: `${-110 + 110 * progress}%`,
          scale: 0.25 + 0.75 * progress,
          rotation: -15 + 15 * progress,
        });
      },
    });
  };

  initAnimations();

  window.addEventListener("resize", () => {
    initAnimations();
  });
});