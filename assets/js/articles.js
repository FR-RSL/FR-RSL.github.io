/**
 * ══════════════════════════════════════════════════════
 *  Système d'articles — FR RSL
 * ══════════════════════════════════════════════════════
 *
 * Pour AJOUTER un article, insérez un objet au DÉBUT du
 * tableau ARTICLES (le plus récent en premier).
 *
 * Champs obligatoires :
 *   id       — entier unique, incrémenter à chaque ajout
 *   date     — 'YYYY-MM-DD'
 *   title    — Titre de l'article
 *   excerpt  — Courte description (1-2 phrases)
 *   category — 'Champions' | 'Équipement' | 'Factions' | 'Mise à jour' | 'Guide'
 *   link     — URL relative depuis la racine du site (ou '#' si non disponible)
 *
 * Champ optionnel :
 *   img      — chemin relatif vers une image de vignette
 */

const ARTICLES = [
  {
    id: 5,
    date: '2026-04-25',
    title: 'Gardes Sylvains : la faction est complète',
    excerpt: "Toutes les fiches de la faction 15 sont désormais disponibles — 20 légendaires et 3 mythiques.",
    category: 'Factions',
    link: 'pages/factions/faction15/hub.html',
  },
  {
    id: 4,
    date: '2026-03-10',
    title: 'Nouvelle fiche : Toshiro',
    excerpt: "Guide complet de Toshiro, champion mythique du Clan de l'Ombre avec ses deux formes.",
    category: 'Champions',
    link: 'pages/factions/faction14/mythical/toshiro/toshiro.html',
  },
  {
    id: 3,
    date: '2026-02-18',
    title: 'Nains — toute la faction disponible',
    excerpt: "10 légendaires et 2 mythiques de la faction Nains sont maintenant référencés sur le site.",
    category: 'Factions',
    link: 'pages/factions/faction13/hub.html',
  },
  {
    id: 2,
    date: '2025-12-19',
    title: 'Nouveau champion : Tetsuya le Sauveur',
    excerpt: "Guide complet du lead faction Shadowkin avec builds optimaux et stratégies.",
    category: 'Champions',
    link: 'pages/factions/faction14/legendary/tetsuya/tetsuya.html',
  },
  {
    id: 1,
    date: '2025-11-05',
    title: 'Lancement du site FR RSL',
    excerpt: "Ouverture du guide communautaire francophone dédié à Raid: Shadow Legends.",
    category: 'Mise à jour',
    link: '#',
  },
];

/** Renvoie les N articles les plus récents */
function getLatestArticles(n = 3) {
  return ARTICLES.slice(0, n);
}

/** Renvoie les articles d'une catégorie donnée */
function getArticlesByCategory(category) {
  return ARTICLES.filter(a => a.category === category);
}
