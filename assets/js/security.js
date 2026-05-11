/**
 * FR RSL — Security Utilities
 * Sanitisation des entrées utilisateur & rate limiting côté client.
 *
 * Exposé globalement via `window.SecurityUtils`.
 */
(function (root) {
  'use strict';

  // ── HTML escape ────────────────────────────────────────────────────────────
  /**
   * Échappe les caractères HTML dangereux pour prévenir les injections XSS.
   * À utiliser lors de l'insertion de texte dans du HTML.
   */
  function escHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }

  // ── Strip HTML tags ────────────────────────────────────────────────────────
  /**
   * Supprime toutes les balises HTML d'une chaîne.
   * À utiliser sur les champs qui doivent rester du texte brut (titres, noms…).
   */
  function sanitizeText(str) {
    return String(str == null ? '' : str)
      .replace(/<[^>]*>/g, '')
      .trim();
  }

  // ── URL validation ─────────────────────────────────────────────────────────
  /**
   * Valide et nettoie une URL.
   * N'autorise que les protocoles http:// et https://.
   * Retourne '#' pour toute URL invalide ou suspecte (javascript:, data:…).
   */
  function sanitizeUrl(url) {
    var s = String(url == null ? '' : url).trim();
    if (!s || s === '#') return '#';
    try {
      var u = new URL(s);
      if (u.protocol !== 'http:' && u.protocol !== 'https:') return '#';
      return u.href;
    } catch (e) {
      return '#';
    }
  }

  // ── Client-side Rate Limiter ───────────────────────────────────────────────
  /**
   * Limite le nombre de tentatives d'une action sur une fenêtre glissante.
   * Utilise localStorage pour persister les compteurs entre les rechargements.
   *
   * @param {string} key      - Identifiant unique de l'action à limiter.
   * @param {number} maxFails - Nombre max d'échecs avant blocage.
   * @param {number} windowMs - Durée de la fenêtre glissante en millisecondes.
   *
   * @example
   * var limiter = new SecurityUtils.RateLimiter('admin_login', 5, 15 * 60 * 1000);
   * var status  = limiter.check();
   * if (!status.allowed) { showError('Trop de tentatives. Réessayez dans ' + status.waitSec + 's.'); }
   * // sur échec :
   * limiter.recordFailure();
   * // sur succès :
   * limiter.reset();
   */
  function RateLimiter(key, maxFails, windowMs) {
    this._key    = 'sec_rl_' + key;
    this._max    = maxFails;
    this._window = windowMs;
  }

  RateLimiter.prototype._load = function () {
    try {
      var raw = localStorage.getItem(this._key);
      return raw ? JSON.parse(raw) : { attempts: [], blockedUntil: 0 };
    } catch (e) {
      return { attempts: [], blockedUntil: 0 };
    }
  };

  RateLimiter.prototype._save = function (data) {
    try { localStorage.setItem(this._key, JSON.stringify(data)); } catch (e) {}
  };

  /**
   * Vérifie si une nouvelle tentative est autorisée.
   * @returns {{ allowed: boolean, waitSec: number, attemptsLeft: number }}
   */
  RateLimiter.prototype.check = function () {
    var now  = Date.now();
    var data = this._load();
    var win  = this._window;

    // Nettoyage des tentatives hors de la fenêtre
    data.attempts = (data.attempts || []).filter(function (ts) { return now - ts < win; });

    // Encore bloqué par un backoff précédent ?
    if (data.blockedUntil && now < data.blockedUntil) {
      return { allowed: false, waitSec: Math.ceil((data.blockedUntil - now) / 1000), attemptsLeft: 0 };
    }

    if (data.attempts.length >= this._max) {
      // Backoff exponentiel : 1 min → 2 min → 4 min → … plafonné à 30 min
      var extra     = data.attempts.length - this._max;
      var backoffMs = Math.min(30 * 60 * 1000, 60000 * Math.pow(2, extra));
      data.blockedUntil = now + backoffMs;
      this._save(data);
      return { allowed: false, waitSec: Math.ceil(backoffMs / 1000), attemptsLeft: 0 };
    }

    return { allowed: true, waitSec: 0, attemptsLeft: this._max - data.attempts.length };
  };

  /**
   * Enregistre une tentative échouée.
   * Doit être appelé après chaque échec d'authentification.
   */
  RateLimiter.prototype.recordFailure = function () {
    var now  = Date.now();
    var data = this._load();
    var win  = this._window;
    data.attempts = (data.attempts || []).filter(function (ts) { return now - ts < win; });
    data.attempts.push(now);
    this._save(data);
  };

  /**
   * Réinitialise le compteur.
   * Doit être appelé après une authentification réussie.
   */
  RateLimiter.prototype.reset = function () {
    try { localStorage.removeItem(this._key); } catch (e) {}
  };

  // ── Export ─────────────────────────────────────────────────────────────────
  root.SecurityUtils = {
    escHtml:      escHtml,
    sanitizeText: sanitizeText,
    sanitizeUrl:  sanitizeUrl,
    RateLimiter:  RateLimiter
  };

}(window));
