export function renderContactForm(data) {
  return `
    <section class="section" id="contact">
      <div class="container contact-container">
        <div class="section-header reveal-up" style="text-align: center;">
          <span class="section-subtitle">07 / GET IN TOUCH</span>
          <h2 class="section-title">Let's Build Something Exceptional</h2>
          <p style="color: var(--text-secondary); margin-top: 12px;">
            Have a project in mind, an opportunity, or just want to connect? Send me a message below.
          </p>
        </div>

        <form class="contact-form reveal-up" id="contactForm">
          <div class="form-group">
            <label for="formName">YOUR NAME</label>
            <input type="text" id="formName" class="form-input" placeholder="e.g. Alex Rivera" />
            <span class="error-message" id="nameError">Please enter your name.</span>
          </div>

          <div class="form-group">
            <label for="formEmail">EMAIL ADDRESS</label>
            <input type="email" id="formEmail" class="form-input" placeholder="e.g. alex@example.com" />
            <span class="error-message" id="emailError">Please enter a valid email address.</span>
          </div>

          <div class="form-group">
            <label for="formMessage">YOUR MESSAGE</label>
            <textarea id="formMessage" class="form-textarea" rows="5" placeholder="Tell me about your project or inquiry..."></textarea>
            <span class="error-message" id="messageError">Please enter a message.</span>
          </div>

          <button type="submit" class="btn-primary" style="justify-content: center; width: 100%; margin-top: 8px;">
            <span>SEND MESSAGE</span>
            <i data-lucide="send"></i>
          </button>
        </form>
      </div>
    </section>

    <!-- Success Feedback Modal (Repo-2 Feature) -->
    <div class="modal-overlay" id="successModal">
      <div class="modal-card">
        <i data-lucide="check-circle-2" style="width: 48px; height: 48px; color: var(--accent-primary); margin-bottom: 16px;"></i>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll review your inquiry and get back to you promptly.</p>
        <button class="btn-secondary" id="modalCloseBtn" style="width: 100%; justify-content: center;">
          <span>Close</span>
        </button>
      </div>
    </div>
  `;
}
