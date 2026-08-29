export function renderHeader(data) {
  return `
    <header class="header" id="header">
      <div class="container header-container">
        <a href="#" class="brand-logo">
          ${data.personal.name.split(' ')[0]}<span>.dev</span>
        </a>

        <div class="nav-actions">
          <div class="badge desktop-only">
            <span class="pulse-dot"></span>
            <span>${data.personal.status}</span>
          </div>
          <button class="menu-toggle-btn" id="menuToggleBtn">
            <span>MENU</span>
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Fullscreen Slide-In Overlay Menu (Repo-2 Feature) -->
    <div class="fullscreen-menu" id="fullscreenMenu">
      <div class="menu-header">
        <a href="#" class="brand-logo">
          ${data.personal.name.split(' ')[0]}<span>.dev</span>
        </a>
        <button class="menu-close-btn" id="menuCloseBtn">
          <i data-lucide="x"></i>
        </button>
      </div>

      <nav class="menu-links">
        <a href="#about" class="menu-link-item nav-close-link">01. ABOUT</a>
        <a href="#services" class="menu-link-item nav-close-link">02. SERVICES</a>
        <a href="#projects" class="menu-link-item nav-close-link">03. PROJECTS</a>
        <a href="#skills" class="menu-link-item nav-close-link">04. SKILLS</a>
        <a href="#philosophy" class="menu-link-item nav-close-link">05. MANIFESTO</a>
        <a href="#insights" class="menu-link-item nav-close-link">06. INSIGHTS</a>
        <a href="#contact" class="menu-link-item nav-close-link">07. CONTACT</a>
      </nav>

      <div class="menu-footer">
        <div>
          <p class="section-subtitle">SAY HELLO</p>
          <a href="mailto:${data.personal.email}">${data.personal.email}</a>
        </div>
        <div style="display: flex; gap: 16px;">
          <a href="${data.personal.github}" target="_blank" rel="noopener">GITHUB</a>
          <a href="${data.personal.linkedin}" target="_blank" rel="noopener">LINKEDIN</a>
          <a href="${data.personal.twitter}" target="_blank" rel="noopener">X / TWITTER</a>
        </div>
      </div>
    </div>
  `;
}

export function initHeaderLogic() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggleBtn');
  const menuClose = document.getElementById('menuCloseBtn');
  const fullscreenMenu = document.getElementById('fullscreenMenu');
  const navLinks = document.querySelectorAll('.nav-close-link');

  // Sticky header scroll behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle fullscreen menu
  if (menuToggle && fullscreenMenu) {
    menuToggle.addEventListener('click', () => {
      fullscreenMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (menuClose && fullscreenMenu) {
    menuClose.addEventListener('click', () => {
      fullscreenMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      fullscreenMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}
