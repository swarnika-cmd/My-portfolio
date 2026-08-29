export function renderServices(data) {
  const servicesHtml = data.services.map((service, index) => `
    <div class="service-item reveal-up ${index === 0 ? 'open' : ''}" data-service="${service.id}">
      <div class="service-header">
        <div class="service-title-wrap">
          <span class="service-id">${service.id}</span>
          <h3 class="service-title">${service.title}</h3>
        </div>
        <i data-lucide="${index === 0 ? 'chevron-up' : 'chevron-down'}" class="service-icon"></i>
      </div>
      <div class="service-body">
        <p>${service.description}</p>
        <div class="service-tags">
          ${service.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="services" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal-up">
          <span class="section-subtitle">02 / SERVICES & CAPABILITIES</span>
          <h2 class="section-title">What I Bring to the Table</h2>
        </div>

        <div class="services-list">
          ${servicesHtml}
        </div>
      </div>
    </section>
  `;
}

export function initServicesLogic() {
  const serviceHeaders = document.querySelectorAll('.service-header');
  serviceHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.closest('.service-item');
      const isOpen = item.classList.contains('open');

      // Close all service items
      document.querySelectorAll('.service-item').forEach((i) => {
        i.classList.remove('open');
        const icon = i.querySelector('.service-icon');
        if (icon) icon.setAttribute('data-lucide', 'chevron-down');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('open');
        const icon = item.querySelector('.service-icon');
        if (icon) icon.setAttribute('data-lucide', 'chevron-up');
      }

      // Re-init lucide icons for toggled chevron
      if (window.lucide) window.lucide.createIcons();
    });
  });
}
