import contentData from './src/data/content.json';

// Import CSS
import './src/styles/main.css';
import './src/styles/components.css';
import './src/styles/animations.css';

// Import Scripts
import { initLenis } from './src/scripts/lenis.js';
import { initCursor } from './src/scripts/cursor.js';
import { initAnimations } from './src/scripts/animations.js';
import { initContactForm } from './src/scripts/contact.js';

// Import Components
import { renderHeader, initHeaderLogic } from './src/components/Header.js';
import { renderHero } from './src/components/Hero.js';
import { renderTicker } from './src/components/Ticker.js';
import { renderAbout } from './src/components/About.js';
import { renderServices, initServicesLogic } from './src/components/Services.js';
import { renderProjects, initProjectHoverPreview } from './src/components/Projects.js';
import { renderSkills } from './src/components/Skills.js';
import { renderPhilosophy } from './src/components/Philosophy.js';
import { renderInsights } from './src/components/Insights.js';
import { renderContactForm } from './src/components/ContactForm.js';
import { renderFooter, initFooterClock } from './src/components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Render all unified components into app container
  app.innerHTML = `
    ${renderHeader(contentData)}
    <main>
      ${renderHero(contentData)}
      ${renderTicker(contentData)}
      ${renderAbout(contentData)}
      ${renderServices(contentData)}
      ${renderProjects(contentData)}
      ${renderSkills(contentData)}
      ${renderPhilosophy(contentData)}
      ${renderInsights(contentData)}
      ${renderContactForm(contentData)}
    </main>
    ${renderFooter(contentData)}
  `;

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize Interactive Features & Motion Scripts
  initLenis();
  initCursor();
  initHeaderLogic();
  initServicesLogic();
  initProjectHoverPreview();
  initContactForm();
  initFooterClock();
  initAnimations();
});
