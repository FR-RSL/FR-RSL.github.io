import React from 'react'
import { Link } from 'react-router-dom'
import './NewsSection.css'

const NewsSection = () => {
  const newsItems = [
    {
      date: '19 Déc 2024',
      title: 'Nouveau Champion : Tetsuya le Sauveur',
      description: 'Guide complet du nouveau lead faction Shadowkin avec builds optimaux et stratégies.',
      link: '/factions/shadowkin/legendary/tetsuya'
    },
    {
      date: '15 Déc 2024',
      title: 'Mise à jour des Tier Lists',
      description: 'Classements mis à jour suite aux derniers équilibrages et nouveaux champions.',
      link: 'https://pgbmax.github.io',
      external: true
    },
    {
      date: '10 Déc 2024',
      title: 'Guides Gardes Sylvains',
      description: 'Nouvelle section dédiée à la faction des Gardes Sylvains avec tous leurs champions.',
      link: '/factions/sylvan-watchers'
    }
  ]

  return (
    <section className="section" id="actualites">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Actualités & Nouveautés</h2>
          <p className="section-subtitle">Restez informé des dernières mises à jour et ajouts au site</p>
        </div>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article key={index} className="news-card">
              <div className="news-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.external ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                  Lire la suite →
                </a>
              ) : (
                <Link to={item.link} className="news-link">
                  Lire la suite →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection