import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import NewsSection from '../../components/NewsSection/NewsSection'
import GuidesSection from '../../components/GuidesSection/GuidesSection'
import FactionsSection from '../../components/FactionsSection/FactionsSection'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      
      {/* Publicité principale */}
      <div className="ad-container ad-container-hero">
        <div className="ad-label">Publicité</div>
        {/* Ici sera intégrée la publicité AdSense */}
      </div>

      <div className="main-content">
        <NewsSection />
        <GuidesSection />
        <FactionsSection />
        
        {/* Section Reliques */}
        <section className="section" id="reliques">
          <div className="section-header">
            <h2 className="section-title">Reliques & Équipements</h2>
            <p className="section-subtitle">Maîtrisez l'art de l'équipement pour optimiser vos champions</p>
          </div>
          <div className="card-grid">
            <Link to="/equipment/artifacts" className="card">
              <div className="card-icon">🛡️</div>
              <h3>Sets de Reliques</h3>
              <p>Guide complet des 20+ sets de reliques, leurs effets et synergies optimales</p>
            </Link>
            <Link to="/guides/stats" className="card">
              <div className="card-icon">⚔️</div>
              <h3>Statistiques Principales</h3>
              <p>Comprendre ATK%, DEF%, HP%, Vitesse et leurs impacts sur le gameplay</p>
            </Link>
            <Link to="/guides/substats" className="card">
              <div className="card-icon">🎯</div>
              <h3>Sous-statistiques</h3>
              <p>Optimisation des sous-stats : Taux Critique, Dégâts Critiques, Résistance</p>
            </Link>
            <Link to="/tools/calculator" className="card">
              <div className="card-icon">🔧</div>
              <h3>Calculateur d'Équipement</h3>
              <p>Outil interactif pour calculer les statistiques optimales de vos builds</p>
            </Link>
            <Link to="/guides/farming" className="card">
              <div className="card-icon">💰</div>
              <h3>Farming Efficace</h3>
              <p>Stratégies pour farmer les meilleures reliques dans les donjons</p>
            </Link>
            <Link to="/guides/upgrade" className="card">
              <div className="card-icon">⭐</div>
              <h3>Amélioration & Forge</h3>
              <p>Guide pour améliorer et forger vos reliques de manière optimale</p>
            </Link>
          </div>
        </section>

        {/* Section Joyaux */}
        <section className="section" id="joyaux">
          <div className="section-header">
            <h2 className="section-title">Joyaux & Optimisation</h2>
            <p className="section-subtitle">Débloquez le potentiel caché de vos champions avec les joyaux</p>
          </div>
          <div className="card-grid">
            <Link to="/equipment/accessories" className="card">
              <div className="card-icon">💎</div>
              <h3>Types de Joyaux</h3>
              <p>Colliers, Anneaux, Bannières : comprendre leurs spécificités et usages</p>
            </Link>
            <Link to="/guides/gems-optimization" className="card">
              <div className="card-icon">🎯</div>
              <h3>Optimisation Ressources</h3>
              <p>Gestion efficace de l'énergie, de l'argent et des ressources rares</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage