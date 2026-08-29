export function renderFooter(data) {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-cta">
            <span class="section-subtitle">WANT TO COLLABORATE?</span>
            <h2>Let's create the next big thing.</h2>
          </div>
          <a href="mailto:${data.personal.email}" class="btn-primary">
            <span>Start a Project</span>
            <i data-lucide="arrow-up-right"></i>
          </a>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} ${data.personal.name}. All rights reserved.
          </div>

          <!-- Real-Time Local Timezone Clock (Repo-2 Feature) -->
          <div class="clock-widget" id="footerClock">
            <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
            <span id="clockTime">00:00:00 AM</span>
            <span>(IST)</span>
          </div>

          <button class="back-to-top-btn" id="backToTopBtn">
            <span>BACK TO TOP</span>
            <i data-lucide="arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterClock() {
  const clockEl = document.getElementById('clockTime');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockEl.textContent = timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
