export function renderSkills(data) {
  const skillsCategoriesHtml = data.skills.map((cat) => `
    <div class="skill-category-card reveal-up">
      <h3 class="skill-cat-title">${cat.category}</h3>
      <div class="skill-items-wrap">
        ${cat.items.map(item => `<span class="skill-badge">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="skills" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal-up">
          <span class="section-subtitle">04 / TECH-STACK MATRIX</span>
          <h2 class="section-title">Languages, Frameworks & Tooling</h2>
        </div>

        <div class="skills-grid">
          ${skillsCategoriesHtml}
        </div>
      </div>
    </section>
  `;
}
