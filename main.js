// 1. Menu burger mobile
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Fermer le menu si on clique sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Navbar qui change au scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Empêcher le rechargement par défaut + message (simulation)
  const searchForm = document.getElementById('searchForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Recherche en cours... (à connecter au backend)');
      // Ici tu pourras plus tard faire une vraie requête fetch ou rediriger
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        alert(`Merci ! Nous vous enverrons les nouveautés sur ${email}`);
        newsletterForm.reset();
      }
    });
  }
});
