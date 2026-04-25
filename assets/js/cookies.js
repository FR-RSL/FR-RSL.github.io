/**
 * Gestion du bandeau de consentement aux cookies
 * Conforme RGPD pour FR-RSL.fr
 */

class CookieConsent {
    constructor() {
        this.cookieName = 'fr-rsl-cookie-consent';
        this.cookieExpiry = 365; // jours
        this.init();
    }

    init() {
        // Vérifier si le consentement a déjà été donné
        if (!this.hasConsent()) {
            this.showBanner();
        } else {
            // Si consentement déjà donné, charger les scripts
            this.loadAnalytics();
            this.loadAds();
        }
    }

    hasConsent() {
        return localStorage.getItem(this.cookieName) !== null;
    }

    getConsentLevel() {
        const consent = localStorage.getItem(this.cookieName);
        return consent ? JSON.parse(consent) : null;
    }

    setConsent(preferences) {
        const consentData = {
            timestamp: new Date().toISOString(),
            preferences: preferences,
            version: '1.0'
        };
        localStorage.setItem(this.cookieName, JSON.stringify(consentData));
        
        // Charger les scripts selon les préférences
        if (preferences.analytics) this.loadAnalytics();
        if (preferences.advertising) this.loadAds();
        
        this.hideBanner();
    }

    showBanner() {
        const banner = this.createBanner();
        document.body.appendChild(banner);
        
        // Animation d'apparition
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);
    }

    hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';
        
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-text">
                    <h3>🍪 Gestion des cookies</h3>
                    <p>Nous utilisons des cookies pour améliorer votre expérience et afficher des publicités personnalisées. 
                    Vous pouvez choisir quels cookies accepter.</p>
                </div>
                <div class="cookie-buttons">
                    <button class="cookie-btn cookie-btn-settings" onclick="cookieConsent.showSettings()">
                        ⚙️ Paramètres
                    </button>
                    <button class="cookie-btn cookie-btn-accept" onclick="cookieConsent.acceptAll()">
                        ✅ Tout accepter
                    </button>
                    <button class="cookie-btn cookie-btn-essential" onclick="cookieConsent.acceptEssential()">
                        🔒 Essentiels uniquement
                    </button>
                </div>
            </div>
        `;

        return banner;
    }

    showSettings() {
        const modal = this.createSettingsModal();
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('show');
        }, 100);
    }

    createSettingsModal() {
        const modal = document.createElement('div');
        modal.id = 'cookie-settings-modal';
        modal.className = 'cookie-modal';
        
        modal.innerHTML = `
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <h2>🍪 Paramètres des cookies</h2>
                    <button class="cookie-close" onclick="cookieConsent.closeSettings()">✕</button>
                </div>
                <div class="cookie-modal-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>🔒 Cookies essentiels</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" checked disabled>
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>📊 Cookies analytiques</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" id="analytics-cookies">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>Nous aident à comprendre comment vous utilisez le site (Google Analytics).</p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>📢 Cookies publicitaires</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" id="advertising-cookies">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>Permettent d'afficher des publicités personnalisées (Google AdSense).</p>
                    </div>
                </div>
                <div class="cookie-modal-footer">
                    <button class="cookie-btn cookie-btn-save" onclick="cookieConsent.saveSettings()">
                        💾 Sauvegarder mes préférences
                    </button>
                </div>
            </div>
        `;

        return modal;
    }

    closeSettings() {
        const modal = document.getElementById('cookie-settings-modal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    acceptAll() {
        this.setConsent({
            essential: true,
            analytics: true,
            advertising: true
        });
    }

    acceptEssential() {
        this.setConsent({
            essential: true,
            analytics: false,
            advertising: false
        });
    }

    saveSettings() {
        const analytics = document.getElementById('analytics-cookies').checked;
        const advertising = document.getElementById('advertising-cookies').checked;
        
        this.setConsent({
            essential: true,
            analytics: analytics,
            advertising: advertising
        });
        
        this.closeSettings();
    }

    loadAnalytics() {
        // Charger Google Analytics si pas déjà chargé
        if (!window.gtag && typeof GA_MEASUREMENT_ID !== 'undefined') {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(script);
            
            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', GA_MEASUREMENT_ID);
                window.gtag = gtag;
            };
        }
    }

    loadAds() {
        // Charger Google AdSense si pas déjà chargé
        if (!window.adsbygoogle && typeof AD_CONFIG !== 'undefined') {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CONFIG.adsense.client}`;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
            
            script.onload = () => {
                // Initialiser les publicités
                if (typeof initAds === 'function') {
                    initAds();
                }
            };
        }
    }

    // Méthode pour réinitialiser le consentement (pour les tests)
    resetConsent() {
        localStorage.removeItem(this.cookieName);
        location.reload();
    }
}

// Styles CSS pour le bandeau
const cookieStyles = `
    .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #1a1d29 0%, #2d3748 100%);
        border-top: 3px solid #ffb700;
        padding: 1rem;
        z-index: 10000;
        transform: translateY(100%);
        transition: transform 0.3s ease-in-out;
        box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);
    }
    
    .cookie-banner.show {
        transform: translateY(0);
    }
    
    .cookie-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }
    
    .cookie-text h3 {
        color: #ffb700;
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }
    
    .cookie-text p {
        color: #e2e8f0;
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .cookie-buttons {
        display: flex;
        gap: 0.5rem;
        flex-shrink: 0;
    }
    
    .cookie-btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
    }
    
    .cookie-btn-accept {
        background: #10b981;
        color: white;
    }
    
    .cookie-btn-accept:hover {
        background: #059669;
    }
    
    .cookie-btn-essential {
        background: #6b7280;
        color: white;
    }
    
    .cookie-btn-essential:hover {
        background: #4b5563;
    }
    
    .cookie-btn-settings {
        background: #4460ff;
        color: white;
    }
    
    .cookie-btn-settings:hover {
        background: #3b4de8;
    }
    
    .cookie-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 1rem;
    }
    
    .cookie-modal.show {
        opacity: 1;
    }
    
    .cookie-modal-content {
        background: linear-gradient(135deg, #1a1d29 0%, #2d3748 100%);
        border-radius: 12px;
        border: 2px solid #ffb700;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .cookie-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid #4a5568;
    }
    
    .cookie-modal-header h2 {
        color: #ffb700;
        margin: 0;
        font-size: 1.3rem;
    }
    
    .cookie-close {
        background: none;
        border: none;
        color: #e2e8f0;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    }
    
    .cookie-close:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .cookie-modal-body {
        padding: 1.5rem;
    }
    
    .cookie-category {
        margin-bottom: 1.5rem;
    }
    
    .cookie-category-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    
    .cookie-category h3 {
        color: #e2e8f0;
        margin: 0;
        font-size: 1rem;
    }
    
    .cookie-category p {
        color: #a0aec0;
        margin: 0;
        font-size: 0.85rem;
        line-height: 1.4;
    }
    
    .cookie-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }
    
    .cookie-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .cookie-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #4a5568;
        transition: 0.3s;
        border-radius: 24px;
    }
    
    .cookie-slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
    }
    
    input:checked + .cookie-slider {
        background-color: #10b981;
    }
    
    input:checked + .cookie-slider:before {
        transform: translateX(26px);
    }
    
    input:disabled + .cookie-slider {
        background-color: #6b7280;
        cursor: not-allowed;
    }
    
    .cookie-modal-footer {
        padding: 1.5rem;
        border-top: 1px solid #4a5568;
        text-align: center;
    }
    
    .cookie-btn-save {
        background: #ffb700;
        color: #1a1d29;
        font-weight: 600;
        padding: 0.75rem 2rem;
    }
    
    .cookie-btn-save:hover {
        background: #f59e0b;
    }
    
    @media (max-width: 768px) {
        .cookie-content {
            flex-direction: column;
            gap: 1rem;
        }
        
        .cookie-buttons {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .cookie-btn {
            flex: 1;
            min-width: 120px;
        }
        
        .cookie-modal-content {
            margin: 1rem;
            max-height: calc(100vh - 2rem);
        }
    }
`;

// Injecter les styles
const styleSheet = document.createElement('style');
styleSheet.textContent = cookieStyles;
document.head.appendChild(styleSheet);

// Initialiser le système de cookies
let cookieConsent;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        cookieConsent = new CookieConsent();
    });
} else {
    cookieConsent = new CookieConsent();
}
