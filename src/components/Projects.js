export function renderProjects(data) {
  const projectsHtml = data.projects.map((proj) => `
    <div class="project-card reveal-up" data-image="${proj.image}">
      <div>
        <div class="project-category">${proj.category}</div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
      </div>

      <div>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${proj.live}" target="_blank" rel="noopener" class="project-link-btn">
            <span>LIVE DEMO</span>
            <i data-lucide="external-link"></i>
          </a>
          <a href="${proj.github}" target="_blank" rel="noopener" class="project-link-btn">
            <span>GITHUB</span>
            <i data-lucide="github"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header reveal-up">
          <span class="section-subtitle">03 / FEATURED WORK</span>
          <h2 class="section-title">Selected Engineering Projects</h2>
        </div>

        <div class="projects-grid">
          ${projectsHtml}
        </div>
      </div>
    </section>

    <!-- Floating Image Hover Preview Box (Repo-2 Feature) -->
    <div class="project-preview-box" id="projectPreviewBox">
      <img src="" id="projectPreviewImg" alt="Project Preview" />
    </div>
  `;
}

export function initProjectHoverPreview() {
  const previewBox = document.getElementById('projectPreviewBox');
  const previewImg = document.getElementById('projectPreviewImg');
  const projectCards = document.querySelectorAll('.project-card');

  if (!previewBox || !previewImg) return;

  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      const imgSrc = card.getAttribute('data-image');
      if (imgSrc) {
        previewImg.src = imgSrc;
        previewBox.classList.add('visible');
      }
    });

    card.addEventListener('mousemove', (e) => {
      previewBox.style.left = `${e.clientX}px`;
      previewBox.style.top = `${e.clientY}px`;
    });

    card.addEventListener('mouseleave', () => {
      previewBox.classList.remove('visible');
    });
  });
}
