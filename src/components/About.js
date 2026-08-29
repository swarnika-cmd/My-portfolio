export function renderAbout(data) {
  const statsHtml = data.stats.map(stat => `
    <div class="stat-card reveal-up">
      <div class="stat-number" data-target="${stat.value}" data-suffix="${stat.suffix}">0</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-header reveal-up">
          <span class="section-subtitle">01 / ABOUT ME</span>
          <h2 class="section-title">Driven by Performance & Aesthetic Precision</h2>
        </div>

        <div class="about-grid">
          <div class="about-text reveal-up">
            <p>
              I am a software engineer focused on building robust full-stack applications and high-throughput systems. 
              My design philosophy emphasizes structural integrity, clean code, and zero-latency user experiences.
            </p>
            <p>
              Whether crafting custom WebAssembly modules or architecting scalable backend APIs, 
              I strive to bridge technical complexity with sleek, intuitive interface design.
            </p>
          </div>

          <div class="stats-grid">
            ${statsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
