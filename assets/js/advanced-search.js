/**
 * Système de recherche avancée pour FR-RSL
 * Avec autocomplétion, filtres et suggestions intelligentes
 */

class AdvancedSearch {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchClear = document.getElementById('searchClear');
        this.searchSuggestions = document.getElementById('searchSuggestions');

        this.searchTimeout = null;
        this.isLoading = false;
        
        // Base de données de recherche COMPLÈTE
        this.searchData = this.buildCompleteDatabase();

        // Exemples de recherche RÉELS du site
        this.searchExamples = [
            'Tetsuya le Sauveur',
            'Toshiro le Sanglant',
            'Ninja',
            'Arashi',
            'Shu-Zhen',
            'Clan de l\'Ombre',
            'Gardes Sylvains',
            'Shadowkin',
            'Légendaire',
            'Mythique'
        ];
        this.currentExampleIndex = 0;

        this.init();
    }

    buildCompleteDatabase() {
        return {
            // CHAMPIONS DISPONIBLES - NOMS UNIQUEMENT
            champions: [
                // SHADOWKIN (Clan de l'Ombre)
                { name: 'Tetsuya le Sauveur', type: 'Légendaire', url: 'pages/factions/faction14/legendary/tetsuya/tetsuya.html', keywords: 'tetsuya sauveur shadowkin lead faction' },
                { name: 'Arashi', type: 'Légendaire', url: 'pages/factions/faction14/legendary/arashi/arashi.html', keywords: 'arashi shadowkin' },
                { name: 'Shu-Zhen', type: 'Légendaire', url: 'pages/factions/faction14/legendary/shu-zhen/shu-zhen.html', keywords: 'shu zhen shadowkin' },
                { name: 'Ninja', type: 'Légendaire', url: 'pages/factions/faction14/legendary/ninja/ninja.html', keywords: 'ninja shadowkin' },
                { name: 'Jintoro', type: 'Légendaire', url: 'pages/factions/faction14/legendary/jintoro/jintoro.html', keywords: 'jintoro shadowkin' },
                { name: 'Jingwon', type: 'Légendaire', url: 'pages/factions/faction14/legendary/jingwon/jingwon.html', keywords: 'jingwon shadowkin' },
                { name: 'Ieyasu', type: 'Légendaire', url: 'pages/factions/faction14/legendary/ieyasu/ieyasu.html', keywords: 'ieyasu shadowkin' },
                { name: 'Zinogre', type: 'Légendaire', url: 'pages/factions/faction14/legendary/zinogre/zinogre.html', keywords: 'zinogre shadowkin' },
                { name: 'Riho Bonespear', type: 'Légendaire', url: 'pages/factions/faction14/legendary/riho/riho.html', keywords: 'riho bonespear shadowkin' },
                { name: 'Ishiyama Yumi', type: 'Légendaire', url: 'pages/factions/faction14/legendary/ishiyama/ishiyama.html', keywords: 'ishiyama yumi shadowkin' },
                { name: 'Kimi', type: 'Légendaire', url: 'pages/factions/faction14/legendary/kimi/kimi.html', keywords: 'kimi shadowkin' },
                { name: 'Toshiro le Sanglant', type: 'Mythique', url: 'pages/factions/faction14/mythical/toshiro/toshiro.html', keywords: 'toshiro sanglant shadowkin mythique' },
                { name: 'Mikage', type: 'Mythique', url: 'pages/factions/faction14/mythical/mikage/mikage.html', keywords: 'mikage shadowkin mythique' },

                // SYLVAN WATCHERS (Gardes Sylvains)
                { name: 'Aratheia', type: 'Légendaire', url: 'pages/factions/faction15/legendary/aratheia/aratheia.html', keywords: 'aratheia sylvan watchers' },
            ],

            // FACTIONS DISPONIBLES - NOMS UNIQUEMENT
            factions: [
                { name: 'Clan de l\'Ombre', url: 'pages/factions/faction14/hub.html', keywords: 'shadowkin clan ombre faction 14' },
                { name: 'Gardes Sylvains', url: 'pages/factions/faction15/hub.html', keywords: 'sylvan watchers gardes sylvains faction 15' },
                { name: 'Shadowkin', url: 'pages/factions/faction14/hub.html', keywords: 'shadowkin clan ombre' },
                { name: 'Sylvan Watchers', url: 'pages/factions/faction15/hub.html', keywords: 'sylvan watchers gardes sylvains' },
            ],

            // GUIDES DISPONIBLES - NOMS UNIQUEMENT
            guides: [
                { name: 'Reliques', url: '#guides', keywords: 'reliques artifacts sets' },
                { name: 'Joyaux', url: '#guides', keywords: 'joyaux gems' },
                { name: 'Grâces', url: '#guides', keywords: 'graces benedictions' },
                { name: 'Builds PvP', url: '#guides', keywords: 'pvp arene builds' },
                { name: 'Donjons', url: '#guides', keywords: 'donjons dungeons' },
                { name: 'Tier Lists', url: 'https://pgbmax.github.io', keywords: 'tier lists classement' },
            ],

        };
    }

    init() {
        this.bindEvents();
        this.startPlaceholderRotation();
    }

    startPlaceholderRotation() {
        // Changer le placeholder toutes les 3 secondes
        setInterval(() => {
            if (this.searchInput !== document.activeElement && this.searchInput.value === '') {
                this.currentExampleIndex = (this.currentExampleIndex + 1) % this.searchExamples.length;
                const example = this.searchExamples[this.currentExampleIndex];
                this.searchInput.placeholder = `Rechercher : ${example}...`;
            }
        }, 3000);
    }
    
    bindEvents() {
        // Événements de saisie
        this.searchInput.addEventListener('input', (e) => this.handleInput(e));
        this.searchInput.addEventListener('focus', () => this.handleFocus());
        this.searchInput.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Bouton de suppression
        this.searchClear.addEventListener('click', () => this.clearSearch());
        
        // Clic en dehors pour fermer
        document.addEventListener('click', (e) => this.handleOutsideClick(e));

        // Raccourcis clavier globaux
        document.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));
    }
    
    handleFocus() {
        const query = this.searchInput.value.trim();
        if (query.length >= 2) {
            this.performSearch(query);
        }
    }

    handleInput(e) {
        const query = e.target.value.trim();

        // Afficher/masquer le bouton de suppression
        if (query.length > 0) {
            this.searchClear.classList.add('show');
        } else {
            this.searchClear.classList.remove('show');
            this.hideSuggestions();
            return;
        }

        // Recherche instantanée avec délai réduit
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 150);
    }
    
    handleKeydown(e) {
        const suggestions = this.searchSuggestions.querySelectorAll('.suggestion-item');
        const activeSuggestion = this.searchSuggestions.querySelector('.suggestion-item.active');
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.navigateSuggestions(suggestions, 'down');
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navigateSuggestions(suggestions, 'up');
                break;
            case 'Enter':
                e.preventDefault();
                if (activeSuggestion) {
                    this.selectSuggestion(activeSuggestion);
                }
                break;
            case 'Escape':
                this.hideSuggestions();
                this.searchInput.blur();
                break;
        }
    }
    
    navigateSuggestions(suggestions, direction) {
        const current = Array.from(suggestions).findIndex(s => s.classList.contains('active'));
        
        // Supprimer la sélection actuelle
        suggestions.forEach(s => s.classList.remove('active'));
        
        let next;
        if (direction === 'down') {
            next = current < suggestions.length - 1 ? current + 1 : 0;
        } else {
            next = current > 0 ? current - 1 : suggestions.length - 1;
        }
        
        if (suggestions[next]) {
            suggestions[next].classList.add('active');
            suggestions[next].scrollIntoView({ block: 'nearest' });
        }
    }
    
    selectSuggestion(suggestion) {
        const url = suggestion.dataset.url;
        if (url) {
            if (url.startsWith('http')) {
                window.open(url, '_blank');
            } else {
                window.location.href = url;
            }
        }
        this.hideSuggestions();
    }
    
    clearSearch() {
        this.searchInput.value = '';
        this.searchClear.classList.remove('show');
        this.hideSuggestions();
        this.searchInput.focus();
    }
    
    handleOutsideClick(e) {
        if (!e.target.closest('.search-container')) {
            this.hideSuggestions();
        }
    }

    handleGlobalKeydown(e) {
        // Ctrl/Cmd + K pour ouvrir la recherche
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            this.searchInput.focus();
            this.searchInput.select();
            return;
        }
    }
    
    performSearch(query) {
        if (query.length === 0) {
            this.hideSuggestions();
            return;
        }

        if (query.length < 2) {
            this.hideSuggestions();
            return;
        }

        // Recherche instantanée sans loading
        const results = this.searchInData(query);
        this.displayResults(results, query);
    }
    
    searchInData(query) {
        const results = [];
        const queryLower = query.toLowerCase().trim();

        // Recherche simple et efficace - NOM + MOTS-CLÉS UNIQUEMENT
        const getScore = (item) => {
            const name = item.name.toLowerCase();
            const keywords = (item.keywords || '').toLowerCase();

            let score = 0;

            // Recherche dans le nom (priorité maximale)
            if (name === queryLower) {
                score = 100; // Correspondance exacte
            } else if (name.startsWith(queryLower)) {
                score = 90; // Commence par
            } else if (name.includes(queryLower)) {
                score = 80; // Contient
            }

            // Recherche dans les mots-clés (priorité secondaire)
            if (score === 0 && keywords.includes(queryLower)) {
                score = 60; // Trouvé dans les mots-clés
            }

            // Recherche par mots individuels
            if (score === 0) {
                const queryWords = queryLower.split(' ').filter(w => w.length > 1);
                let wordMatches = 0;

                queryWords.forEach(word => {
                    if (name.includes(word) || keywords.includes(word)) {
                        wordMatches++;
                    }
                });

                if (wordMatches > 0) {
                    score = (40 * wordMatches) / queryWords.length;
                }
            }

            return { score: Math.round(score), matchType: 'simple' };
        };

        // Recherche dans toutes les catégories
        Object.entries(this.searchData).forEach(([category, items]) => {
            items.forEach(item => {
                const { score, matchType } = getScore(item, category);

                if (score > 0) {
                    results.push({
                        ...item,
                        category,
                        score: Math.round(score),
                        matchType
                    });
                }
            });
        });

        // Trier par score décroissant et limiter à 8 résultats
        return results
            .sort((a, b) => b.score - a.score)
            .slice(0, 8);
    }
    
    displayResults(results, query) {
        if (results.length === 0) {
            this.showNoResults(query);
            return;
        }

        // Grouper les résultats par score pour un meilleur affichage
        const topResults = results.filter(r => r.score >= 70);
        const goodResults = results.filter(r => r.score >= 40 && r.score < 70);
        const otherResults = results.filter(r => r.score < 40);

        let html = '';

        // Afficher les meilleurs résultats en premier
        if (topResults.length > 0) {
            html += topResults.map(result => this.createSuggestionHTML(result, query)).join('');
        }

        if (goodResults.length > 0) {
            html += goodResults.map(result => this.createSuggestionHTML(result, query)).join('');
        }

        if (otherResults.length > 0) {
            html += otherResults.map(result => this.createSuggestionHTML(result, query)).join('');
        }

        this.searchSuggestions.innerHTML = html;

        // Ajouter les événements de clic
        this.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => this.selectSuggestion(item));
        });

        this.showSuggestions();
    }
    
    createSuggestionHTML(result, query) {
        const icons = {
            champions: '👑',
            factions: '⚔️',
            guides: '📚'
        };

        const typeColors = {
            'Légendaire': '#ffb700',
            'Mythique': '#9333ea'
        };

        const highlightText = (text, query) => {
            if (!text) return '';
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<mark>$1</mark>');
        };

        // Affichage ultra-simple : SEULEMENT le nom
        const mainBadgeColor = result.category === 'champions' && result.type ?
            typeColors[result.type] || '#64748b' : '#64748b';

        return `
            <div class="suggestion-item" data-url="${result.url}">
                <div class="suggestion-icon">${icons[result.category] || '🔍'}</div>
                <div class="suggestion-content">
                    <div class="suggestion-title">${highlightText(result.name, query)}</div>
                </div>
                <div class="suggestion-type" style="background: ${mainBadgeColor}; color: white;">
                    ${this.getCategoryDisplayName(result.category)}
                </div>
            </div>
        `;
    }

    getCategoryDisplayName(category) {
        const names = {
            champions: 'Champion',
            factions: 'Faction',
            guides: 'Guide'
        };
        return names[category] || category;
    }
    
    showLoading() {
        this.isLoading = true;
        this.searchSuggestions.innerHTML = `
            <div class="search-loading">
                <div class="loading-spinner"></div>
                Recherche en cours...
            </div>
        `;
        this.showSuggestions();
    }
    
    showNoResults(query) {
        const suggestions = this.getSuggestions(query);

        this.searchSuggestions.innerHTML = `
            <div class="search-no-results">
                <div class="search-no-results-icon">🤔</div>
                <div><strong>Aucun résultat pour "${query}"</strong></div>
                <div class="no-results-suggestions">
                    <div>Essayez plutôt :</div>
                    <div class="suggestion-examples">
                        ${suggestions.map(s => `<span class="example-tag" onclick="document.getElementById('searchInput').value='${s}'; document.getElementById('searchInput').dispatchEvent(new Event('input'))">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        this.showSuggestions();
    }

    getSuggestions(query) {
        // Suggestions intelligentes basées UNIQUEMENT sur les champions du site
        const queryLower = query.toLowerCase();

        if (queryLower.includes('shadow') || queryLower.includes('ombre')) {
            return ['Clan de l\'Ombre', 'Tetsuya le Sauveur', 'Ninja', 'Toshiro le Sanglant'];
        }
        if (queryLower.includes('sylv') || queryLower.includes('nature')) {
            return ['Gardes Sylvains', 'Aratheia'];
        }
        if (queryLower.includes('legend') || queryLower.includes('légend')) {
            return ['Tetsuya le Sauveur', 'Ninja', 'Arashi', 'Shu-Zhen'];
        }
        if (queryLower.includes('mythique') || queryLower.includes('myth')) {
            return ['Toshiro le Sanglant', 'Mikage'];
        }
        if (queryLower.includes('support')) {
            return ['Shu-Zhen', 'Jingwon', 'Mikage', 'Aratheia'];
        }
        if (queryLower.includes('attaquant') || queryLower.includes('dps')) {
            return ['Ninja', 'Arashi', 'Toshiro le Sanglant', 'Ieyasu'];
        }
        if (queryLower.includes('tank') || queryLower.includes('def')) {
            return ['Jintoro'];
        }
        if (queryLower.includes('force')) {
            return ['Arashi', 'Jintoro', 'Toshiro le Sanglant'];
        }
        if (queryLower.includes('magie')) {
            return ['Tetsuya le Sauveur', 'Ninja', 'Mikage'];
        }
        if (queryLower.includes('esprit')) {
            return ['Shu-Zhen', 'Jingwon', 'Aratheia'];
        }
        if (queryLower.includes('vide')) {
            return ['Ieyasu', 'Kimi'];
        }

        // Suggestions par défaut avec VOS champions
        return ['Tetsuya le Sauveur', 'Ninja', 'Clan de l\'Ombre', 'Gardes Sylvains'];
    }
    
    showSuggestions() {
        this.searchSuggestions.classList.add('show');
    }
    
    hideSuggestions() {
        this.searchSuggestions.classList.remove('show');
    }
}

// Styles pour le highlighting
const searchStyles = `
    .search-suggestions mark {
        background: var(--legendary-gold);
        color: var(--rsl-dark);
        padding: 0.1rem 0.2rem;
        border-radius: 3px;
        font-weight: 600;
    }
    
    .suggestion-item.active {
        background: rgba(255, 183, 0, 0.15) !important;
        border-left: 3px solid var(--legendary-gold);
    }
`;

// Injecter les styles
const styleSheet = document.createElement('style');
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);

// Initialiser la recherche avancée
let advancedSearch;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        advancedSearch = new AdvancedSearch();
    });
} else {
    advancedSearch = new AdvancedSearch();
}
