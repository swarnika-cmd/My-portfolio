export function initContactForm() {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate inputs
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');

    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const messageErr = document.getElementById('messageError');

    // Name check
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      nameErr.classList.add('active');
      isValid = false;
    } else {
      nameInput.classList.remove('error');
      nameErr.classList.remove('active');
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      emailErr.classList.add('active');
      isValid = false;
    } else {
      emailInput.classList.remove('error');
      emailErr.classList.remove('active');
    }

    // Message check
    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      messageErr.classList.add('active');
      isValid = false;
    } else {
      messageInput.classList.remove('error');
      messageErr.classList.remove('active');
    }

    if (isValid) {
      // Show success modal
      modal.classList.add('active');
      form.reset();
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}
