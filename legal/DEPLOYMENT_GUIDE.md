# 🚀 Guide de Déploiement OVH pour FR-RSL

## 📋 Checklist Pré-Déploiement

### ✅ Fichiers Techniques Créés
- [x] `.htaccess` - Optimisations serveur et redirections
- [x] `robots.txt` - Instructions pour les moteurs de recherche
- [x] `sitemap.xml` - Plan du site pour le SEO
- [x] `privacy-policy.html` - Politique de confidentialité (obligatoire pour AdSense)
- [x] `terms-of-service.html` - Conditions d'utilisation

### ✅ SEO Optimisé
- [x] Meta tags complets sur index.html
- [x] Open Graph et Twitter Cards
- [x] Balises canoniques
- [x] Structure HTML sémantique

### ✅ Monétisation Préparée
- [x] Script de gestion des publicités (`assets/js/ads.js`)
- [x] Système de consentement aux cookies (`assets/js/cookies.js`)
- [x] Bandeau cookies conforme RGPD
- [x] Emplacements publicitaires intégrés
- [x] Détection de bloqueurs de pub
- [x] **4 pages légales obligatoires :**
  - [x] Mentions légales (`mentions-legales.html`)
  - [x] Politique de confidentialité (`privacy-policy.html`)
  - [x] Conditions d'utilisation (`terms-of-service.html`)
  - [x] Disclaimer fansite (`disclaimer.html`)

## 🌐 Étapes de Déploiement OVH

### 1. Commande de l'hébergement
- **Recommandé :** OVH Pro ou Performance
- **Domaine :** fr-rsl.fr
- **SSL :** Inclus avec l'hébergement

### 2. Configuration DNS
```
A     @     IP_SERVEUR_OVH
CNAME www   fr-rsl.fr
```

### 3. Upload des fichiers
- Utiliser FileZilla ou le gestionnaire de fichiers OVH
- Uploader tous les fichiers dans `/www/`
- Vérifier les permissions (755 pour dossiers, 644 pour fichiers)

### 4. Configuration finale
- Tester toutes les pages
- Vérifier les redirections HTTPS
- Tester la compression GZIP

## 💰 Configuration Monétisation

### 1. Google AdSense
1. Créer un compte AdSense
2. Ajouter le site fr-rsl.fr
3. Remplacer `ca-pub-XXXXXXXXXXXXXXXXX` dans :
   - `index.html` (ligne 34)
   - `assets/js/ads.js` (ligne 8)

### 2. Google Analytics
1. Créer une propriété GA4
2. Remplacer `GA_MEASUREMENT_ID` dans `index.html` (lignes 32-38)

### 3. Emplacements publicitaires
- **Header :** Bannière 728x90 (desktop) / 320x50 (mobile)
- **Sidebar :** Rectangle 300x250
- **Footer :** Bannière responsive
- **In-content :** Publicités natives

## 📊 Optimisations Performance

### Déjà Implémentées
- ✅ Compression GZIP
- ✅ Cache des fichiers statiques
- ✅ Headers de cache optimisés
- ✅ Preload des ressources critiques

### À Faire Après Déploiement
- [ ] Configurer Cloudflare (optionnel)
- [ ] Optimiser les images (WebP)
- [ ] Minifier CSS/JS
- [ ] Configurer un CDN

## 🔍 SEO Post-Déploiement

### 1. Google Search Console
- Ajouter et vérifier le site
- Soumettre le sitemap.xml
- Surveiller les erreurs d'indexation

### 2. Contenu SEO
- Ajouter plus de pages de champions
- Créer des guides détaillés
- Optimiser les meta descriptions
- Ajouter des données structurées

### 3. Backlinks
- Partager sur Reddit r/RaidShadowLegends
- Collaborer avec des YouTubeurs RSL
- Échanger des liens avec d'autres sites de gaming

## 💡 Conseils Monétisation

### Revenus Potentiels
- **AdSense :** 1-5€ pour 1000 vues (RPM)
- **Affiliation :** Liens vers des guides payants
- **Sponsoring :** Partenariats avec des créateurs RSL

### Optimisation des Revenus
1. **Contenu de qualité :** Plus de visiteurs = plus de revenus
2. **SEO :** Cibler des mots-clés populaires RSL
3. **Engagement :** Encourager les visites répétées
4. **Mobile-first :** 70% du trafic gaming est mobile

## 🛠️ Maintenance

### Hebdomadaire
- Vérifier les performances du site
- Analyser les statistiques AdSense/Analytics
- Mettre à jour le contenu des champions

### Mensuelle
- Sauvegarder le site
- Vérifier les liens cassés
- Optimiser les pages les plus visitées

## 📞 Support

### OVH
- Manager OVH : https://www.ovh.com/manager/
- Support : Ticket depuis le manager

### Monétisation
- AdSense : https://www.google.com/adsense/
- Analytics : https://analytics.google.com/

## 🎯 Objectifs à 6 Mois
- [ ] 10 000 visiteurs/mois
- [ ] 100€/mois de revenus AdSense
- [ ] Top 3 Google pour "guide raid shadow legends français"
- [ ] 50+ pages de champions complètes
