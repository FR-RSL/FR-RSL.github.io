// Génération des particules
function createParticles() {
    const particles = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particles.appendChild(particle);
    }
}

// Fonction de recherche améliorée
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const factionBubbles = document.querySelectorAll('.faction-bubble');
    const cards = document.querySelectorAll('.card');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        // Recherche dans les factions
        factionBubbles.forEach(bubble => {
            const name = bubble.getAttribute('data-name');
            if (name) {
                bubble.style.display = name.toLowerCase().includes(query) ? '' : 'none';
            }
        });

        // Recherche dans les cartes (guides)
        cards.forEach(card => {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            if (title && description) {
                const titleText = title.textContent.toLowerCase();
                const descriptionText = description.textContent.toLowerCase();
                const matches = titleText.includes(query) || descriptionText.includes(query);
                card.style.display = matches ? '' : 'none';
            }
        });
    });
}

// Navigation fluide
function initSmoothScroll() {
    const navPills = document.querySelectorAll('.nav-pill');
    
    navPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Supprimer la classe active de tous les pills
            navPills.forEach(p => p.classList.remove('active'));
            // Ajouter la classe active au pill cliqué
            pill.classList.add('active');
            
            // Scroll vers la section correspondante
            const target = pill.getAttribute('href');
            if (target && target.startsWith('#')) {
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Effet de parallaxe léger
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
}

// Animation des cartes au scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animation spéciale pour les statistiques
                if (entry.target.classList.contains('stat-card')) {
                    animateStatNumber(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observer toutes les cartes et sections
    document.querySelectorAll('.card, .faction-bubble, .section, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// Animation des nombres dans les statistiques
function animateStatNumber(statCard) {
    const numberElement = statCard.querySelector('.stat-number');
    if (!numberElement) return;

    const finalNumber = numberElement.textContent;
    const isNumeric = /^\d+\+?$/.test(finalNumber);
    
    if (isNumeric) {
        const targetNumber = parseInt(finalNumber.replace('+', ''));
        const hasPlus = finalNumber.includes('+');
        let currentNumber = 0;
        const increment = Math.ceil(targetNumber / 50);
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            numberElement.textContent = currentNumber + (hasPlus ? '+' : '');
        }, 30);
    }
}

// Effet de typing pour le titre principal
function initTypingEffect() {
    const title = document.querySelector('.hero h2');
    if (!title) return;

    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid var(--primary)';
    
    let i = 0;
    const timer = setInterval(() => {
        title.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 500);
        }
    }, 100);
}

// Mise à jour dynamique des statistiques
function updateDynamicStats() {
    const stats = [
        { selector: '.stat-card:nth-child(1) .stat-number', baseValue: 15 },
        { selector: '.stat-card:nth-child(2) .stat-number', baseValue: 950 },
        { selector: '.stat-card:nth-child(3) .stat-number', baseValue: 50 },
        { selector: '.stat-card:nth-child(4) .stat-number', baseValue: 100 }
    ];

    stats.forEach(stat => {
        const element = document.querySelector(stat.selector);
        if (element) {
            // Simulation d'une légère variation
            const variation = Math.floor(Math.random() * 5);
            const newValue = stat.baseValue + variation;
            const hasPlus = element.textContent.includes('+');
            element.textContent = newValue + (hasPlus ? '+' : '');
        }
    });
}

// Gestion des événements de redimensionnement
function handleResize() {
    // Recalculer les particules si nécessaire
    const particles = document.querySelector('.particles');
    if (particles && window.innerWidth < 768) {
        // Réduire le nombre de particules sur mobile
        const particleElements = particles.querySelectorAll('.particle');
        particleElements.forEach((particle, index) => {
            if (index > 25) {
                particle.style.display = 'none';
            }
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initSearch();
    initSmoothScroll();
    initParallax();
    initScrollAnimations();
    
    // Délai pour l'effet de typing
    setTimeout(() => {
        initTypingEffect();
    }, 500);
    
    // Mise à jour périodique des stats (toutes les 30 secondes)
    setInterval(updateDynamicStats, 30000);
    
    // Animation d'entrée pour les éléments
    setTimeout(() => {
        document.querySelectorAll('.section').forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1000);
    
    // Gestion du redimensionnement
    window.addEventListener('resize', handleResize);
    handleResize(); // Appel initial
});

// Gestion des erreurs d'images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image non disponible';
        });
    });
});

// Amélioration de l'accessibilité
document.addEventListener('keydown', function(e) {
    // Navigation au clavier pour les pills
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('nav-pill')) {
            focusedElement.style.outline = '2px solid var(--primary)';
        }
    }
    
    // Activation avec Entrée ou Espace
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('nav-pill')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Nettoyage de l'outline au blur
document.addEventListener('blur', function(e) {
    if (e.target.classList.contains('nav-pill')) {
        e.target.style.outline = 'none';
    }
}, true);
