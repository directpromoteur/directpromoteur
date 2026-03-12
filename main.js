document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('comingSoonOverlay');

  document.addEventListener('click', function(e) {
    const target = e.target.closest('a, button');

    if (target && overlay) {
      e.preventDefault();
      e.stopPropagation();

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }, { capture: true });
});
