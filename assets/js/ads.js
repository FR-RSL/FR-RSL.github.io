/**
 * Gestion des publicités pour FR-RSL
 * Compatible avec Google AdSense et autres réseaux publicitaires
 */

// Configuration des emplacements publicitaires
const AD_CONFIG = {
    // AdSense (à remplacer par vos vrais IDs)
    adsense: {
        client: 'ca-pub-XXXXXXXXXXXXXXXXX', // Votre ID AdSense
        slots: {
            header: 'XXXXXXXXXX',
            sidebar: 'XXXXXXXXXX',
            footer: 'XXXXXXXXXX',
            inContent: 'XXXXXXXXXX'
        }
    },
    
    // Paramètres d'affichage
    display: {
        showOnMobile: true,
        showOnDesktop: true,
        delayMs: 1000 // Délai avant affichage des pubs
    }
};

// Fonction pour détecter les bloqueurs de pub
function detectAdBlocker() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    testAd.style.position = 'absolute';
    testAd.style.left = '-10000px';
    document.body.appendChild(testAd);
    
    setTimeout(() => {
        const isBlocked = testAd.offsetHeight === 0;
        document.body.removeChild(testAd);
        
        if (isBlocked) {
            showAdBlockMessage();
        }
    }, 100);
}

// Message pour les utilisateurs avec bloqueur de pub
function showAdBlockMessage() {
    const message = document.createElement('div');
    message.className = 'adblock-message';
    message.innerHTML = `
        <div class="adblock-content">
            <h3>🛡️ Bloqueur de publicité détecté</h3>
            <p>FR-RSL est gratuit grâce à la publicité. Merci de désactiver votre bloqueur pour nous soutenir !</p>
            <button onclick="this.parentElement.parentElement.style.display='none'">Compris</button>
        </div>
    `;
    document.body.appendChild(message);
}

// Créer un emplacement publicitaire
function createAdSlot(containerId, slotId, size = 'auto') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const adSlot = document.createElement('ins');
    adSlot.className = 'adsbygoogle';
    adSlot.style.display = 'block';
    adSlot.setAttribute('data-ad-client', AD_CONFIG.adsense.client);
    adSlot.setAttribute('data-ad-slot', slotId);
    
    if (size !== 'auto') {
        adSlot.setAttribute('data-ad-format', size);
    } else {
        adSlot.setAttribute('data-ad-format', 'auto');
        adSlot.setAttribute('data-full-width-responsive', 'true');
    }
    
    container.appendChild(adSlot);
    
    // Initialiser la pub après un délai
    setTimeout(() => {
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log('AdSense non disponible');
        }
    }, AD_CONFIG.display.delayMs);
}

// Initialiser les publicités (appelé par le système de cookies)
function initAds() {
    // Vérifier le consentement aux cookies publicitaires
    if (typeof cookieConsent !== 'undefined') {
        const consent = cookieConsent.getConsentLevel();
        if (!consent || !consent.preferences.advertising) {
            console.log('Publicités désactivées - pas de consentement');
            return;
        }
    }

    // Vérifier si on doit afficher les pubs selon l'appareil
    const isMobile = window.innerWidth <= 768;

    if ((isMobile && !AD_CONFIG.display.showOnMobile) ||
        (!isMobile && !AD_CONFIG.display.showOnDesktop)) {
        return;
    }

    // Créer les emplacements publicitaires
    createAdSlot('ad-header', AD_CONFIG.adsense.slots.header);
    createAdSlot('ad-sidebar', AD_CONFIG.adsense.slots.sidebar);
    createAdSlot('ad-footer', AD_CONFIG.adsense.slots.footer);
    createAdSlot('ad-content', AD_CONFIG.adsense.slots.inContent);

    // Détecter les bloqueurs de pub
    detectAdBlocker();
}

// Styles CSS pour les publicités
const adStyles = `
    .ad-container {
        margin: 20px 0;
        text-align: center;
        min-height: 90px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .ad-label {
        font-size: 0.8rem;
        color: #888;
        margin-bottom: 5px;
    }
    
    .adblock-message {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .adblock-content {
        background: #fff;
        color: #333;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
    }
    
    .adblock-content button {
        background: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
    }
    
    @media (max-width: 768px) {
        .ad-container {
            margin: 10px 0;
            min-height: 50px;
        }
    }
`;

// Injecter les styles
const styleSheet = document.createElement('style');
styleSheet.textContent = adStyles;
document.head.appendChild(styleSheet);

// Ne pas initialiser automatiquement - sera appelé par le système de cookies
// Les publicités ne se chargent que si l'utilisateur a donné son consentement

// Fonction pour réinitialiser les pubs si l'utilisateur change ses préférences
function reinitAds() {
    // Supprimer les anciennes pubs
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.innerHTML = '<div class="ad-label">Publicité</div>';
    });

    // Réinitialiser
    initAds();
}
