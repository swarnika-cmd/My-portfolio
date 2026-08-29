export function renderPhilosophy(data) {
  const cardsHtml = data.philosophy.map((item) => `
    <div class="philosophy-card reveal-up">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `).join('');

  return `
    <section class="section" id="philosophy">
      <div class="container">
        <div class="section-header reveal-up">
          <span class="section-subtitle">05 / ENGINEERING MANIFESTO</span>
          <h2 class="section-title">Core Principles & Code Standards</h2>
        </div>

        <div class="philosophy-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
