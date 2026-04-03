// ===== MAGNAVOX MAIN JS =====

document.addEventListener('DOMContentLoaded', () => {

  // --- Profile Dropdown ---
  const profileBtn = document.getElementById('profile-btn');
  const profileDropdown = document.getElementById('profile-dropdown');

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      profileDropdown.classList.remove('open');
    });
  }

  // --- Active nav link ---
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .bottom-nav .nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Scroll reveal ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // --- Animate progress bars when visible ---
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.progress-fill');
        if (fill) fill.style.width = fill.dataset.width;
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress-bar').forEach(bar => {
    const fill = bar.querySelector('.progress-fill');
    if (fill) {
      const target = fill.style.width;
      fill.dataset.width = target;
      fill.style.width = '0';
      barObserver.observe(bar);
    }
  });

});
