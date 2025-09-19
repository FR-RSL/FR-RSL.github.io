import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/assets/images/logos/logo.png" alt="Logo FR RSL" className="footer-logo" />
            <div className="footer-brand-info">
              <h3>FR RSL</h3>
              <p>Guide français pour Raid: Shadow Legends</p>
              <div className="social-links">
                <a href="#" title="Discord"><i className="fab fa-discord"></i></a>
                <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" title="Twitch"><i className="fab fa-twitch"></i></a>
                <a href="#" title="Reddit"><i className="fab fa-reddit"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Site</h4>
              <nav>
                <Link to="/factions">Factions</Link>
                <Link to="/equipment/artifacts">Reliques</Link>
                <Link to="/equipment/accessories">Joyaux</Link>
                <Link to="/equipment/blessings">Grâces</Link>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Ressources</h4>
              <nav>
                <a href="https://pgbmax.github.io" target="_blank" rel="noopener noreferrer">Tier Lists</a>
                <Link to="/tools/calculator">Calculateurs</Link>
                <Link to="/tools/database">Base de Données</Link>
                <a href="#" target="_blank" rel="noopener noreferrer">Guides Vidéo</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Aide</h4>
              <nav>
                <Link to="/contact">Contact</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/bug-report">Signaler un Bug</Link>
                <Link to="/suggestions">Suggestions</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <span className="disclaimer-badge">
              <span className="disclaimer-icon">ℹ️</span>
              <span className="disclaimer-text">Site de Fans Non-Officiel</span>
            </span>
          </div>
          
          <div className="footer-legal">
            <p className="copyright">© 2025 <strong>FR RSL</strong></p>
            <nav className="legal-links">
              <Link to="/legal/mentions-legales">Mentions Légales</Link>
              <Link to="/legal/privacy-policy">Politique de Confidentialité</Link>
              <Link to="/legal/terms-of-service">Conditions d'Utilisation</Link>
              <Link to="/legal/disclaimer">Mentions d'Usage</Link>
            </nav>
            <p className="legal-notice">
              Ce site n'est pas affilié à <strong>Plarium Games</strong>. 
              Raid: Shadow Legends est une marque déposée de Plarium Games Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer