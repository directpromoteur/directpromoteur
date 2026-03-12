// main.js - DirectPromoteur.tn (version complète - mars 2026)

document.addEventListener('DOMContentLoaded', () => {

    // ────────────────────────────────────────────────
    // 1. Menu burger mobile
    // ────────────────────────────────────────────────
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }


    // ────────────────────────────────────────────────
    // 2. Navbar qui devient opaque au scroll
    // ────────────────────────────────────────────────
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }


    // ────────────────────────────────────────────────
    // 3. Overlay "coming soon" / "site en préparation"
    // ────────────────────────────────────────────────
    const overlay = document.getElementById('comingSoonOverlay');
    const closeBtn = document.getElementById('closeOverlay');

    // Éléments sur lesquels on NE PAS déclencher l'overlay
    // (ajoute ici les sélecteurs que tu veux garder fonctionnels)
    const exceptions = [
        // '#newsletterForm button',     // si tu veux que newsletter marche sans overlay
        // '#launchNotifyForm button',   // idem pour le formulaire d'alerte lancement
        '.close-overlay',             // le bouton fermer
    ];

    document.addEventListener('click', (e) => {
        // On cherche le plus proche <a> ou <button>
        const target = e.target.closest('a, button');

        if (!target) return;

        // Ignorer les exceptions
        if (exceptions.some(sel => target.matches(sel))) {
            return;
        }

        // On affiche l'overlay sur presque tout le reste
        if (overlay) {
            e.preventDefault();           // bloque le lien / submit par défaut
            overlay.classList.add('active');
        }
    });

    // Fermeture de l'overlay
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }

    // Clic à l'extérieur du contenu → fermer
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }


    // ────────────────────────────────────────────────
    // 4. Suivi optionnel des soumissions FormSubmit
    //    (pas obligatoire – FormSubmit gère déjà l'envoi)
    // ────────────────────────────────────────────────
    const newsletterForm = document.getElementById('newsletterForm');
    const launchForm = document.getElementById('launchNotifyForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', () => {
            console.log('[FormSubmit] → Inscription newsletter envoyée');
            // Optionnel : on peut fermer l'overlay si jamais il était ouvert
            // overlay?.classList.remove('active');
        });
    }

    if (launchForm) {
        launchForm.addEventListener('submit', () => {
            console.log('[FormSubmit] → Demande notification lancement envoyée');
            // On peut laisser l'utilisateur voir la page de merci de FormSubmit
            // ou forcer la fermeture après 1.5s si tu préfères
            // setTimeout(() => overlay?.classList.remove('active'), 1500);
        });
    }


    // ────────────────────────────────────────────────
    // 5. Recherche (simulation – à connecter plus tard)
    // ────────────────────────────────────────────────
    const searchForm = document.getElementById('searchForm');

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            // Pour l'instant on laisse l'overlay s'afficher (via le listener global)
            // Quand le site sera prêt, tu pourras enlever e.preventDefault()
            // et faire une vraie recherche
            console.log('[Search] → Recherche simulée :', 
                new FormData(searchForm).get('keyword'),
                new FormData(searchForm).get('city')
            );
        });
    }

});
