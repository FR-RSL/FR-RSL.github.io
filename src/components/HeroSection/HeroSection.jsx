import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-main">FR RSL</span>
          <span className="hero-title-sub">Guide Français pour Raid: Shadow Legends</span>
        </h1>
        <p className="hero-description">
          Bienvenue sur le guide français le plus complet pour Raid: Shadow Legends.
          Découvrez nos guides, fiches de champions et dernières actualités.
        </p>
      </div>
    </div>
  )
}

export default HeroSection