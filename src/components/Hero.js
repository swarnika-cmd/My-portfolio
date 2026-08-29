export function renderHero(data) {
  return `
    <section class="hero-section" id="hero">
      <div class="container hero-content">
        <div class="hero-status reveal-up">
          <span class="badge">
            <span class="pulse-dot"></span>
            ${data.personal.title}
          </span>
        </div>

        <h1 class="hero-headline reveal-up">
          Engineering High-Performance <span class="highlight">Systems & Digital Experiences</span>
        </h1>

        <p class="hero-bio reveal-up">
          ${data.personal.bio}
        </p>

        <div class="hero-ctas reveal-up">
          <a href="#projects" class="btn-primary">
            <span>Explore Work</span>
            <i data-lucide="arrow-down-right"></i>
          </a>
          <a href="#contact" class="btn-secondary">
            <span>Get in Touch</span>
            <i data-lucide="mail"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}
