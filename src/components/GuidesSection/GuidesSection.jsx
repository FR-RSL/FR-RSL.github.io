import React from 'react'
import { Link } from 'react-router-dom'
import './GuidesSection.css'

const GuidesSection = () => {
  const guides = [
    {
      icon: '💎',
      title: 'Reliques',
      description: 'Guide complet des sets de reliques et optimisation',
      link: '/equipment/artifacts'
    },
    {
      icon: '💍',
      title: 'Joyaux',
      description: 'Optimisation des joyaux pour vos champions',
      link: '/equipment/accessories'
    },
    {
      icon: '✨',
      title: 'Grâces',
      description: 'Système de grâces et bénédictions',
      link: '/equipment/blessings'
    },
    {
      icon: '⚔️',
      title: 'Builds PvP',
      description: 'Configurations pour l\'Arène et les Guerres de Clans',
      link: '/guides/pvp'
    },
    {
      icon: '🏰',
      title: 'Donjons',
      description: 'Stratégies pour tous les donjons et défis',
      link: '/guides/dungeons'
    },
    {
      icon: '📊',
      title: 'Tier Lists',
      description: 'Classements des meilleurs champions',
      link: 'https://pgbmax.github.io',
      external: true
    }
  ]

  return (
    <section className="section" id="guides">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Guides & Ressources</h2>
          <p className="section-subtitle">Tout ce dont vous avez besoin pour progresser dans Raid: Shadow Legends</p>
        </div>
        <div className="guides-grid">
          {guides.map((guide, index) => (
            guide.external ? (
              <a key={index} href={guide.link} target="_blank" rel="noopener noreferrer" className="guide-bubble">
                <div className="guide-icon">{guide.icon}</div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </a>
            ) : (
              <Link key={index} to={guide.link} className="guide-bubble">
                <div className="guide-icon">{guide.icon}</div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuidesSection