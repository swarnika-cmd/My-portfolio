export function renderInsights(data) {
  const insightsHtml = data.insights.map((item) => `
    <div class="insight-card reveal-up">
      <div>
        <div class="insight-meta">
          <span>${item.date}</span>
          <span>${item.readTime}</span>
        </div>
        <h3 class="insight-title">${item.title}</h3>
      </div>
      <div>
        <span class="project-tag-pill">${item.tag}</span>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="insights" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal-up">
          <span class="section-subtitle">06 / INSIGHTS & ARTICLES</span>
          <h2 class="section-title">Technical Writing & Thoughts</h2>
        </div>

        <div class="insights-grid">
          ${insightsHtml}
        </div>
      </div>
    </section>
  `;
}
