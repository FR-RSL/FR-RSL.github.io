import React from 'react'
import { Link } from 'react-router-dom'
import './FactionsSection.css'

const FactionsSection = () => {
  const factions = [
    { name: 'Seigneurs', image: 'bannerlords.png', link: '/factions/bannerlords', dataName: 'Seigneurs' },
    { name: 'Haut Elfes', image: 'high-elves.png', link: '/factions/high-elves', dataName: 'Haut Elfes' },
    { name: "L'Ordre Sacré", image: 'sacred-order.png', link: '/factions/sacred-order', dataName: 'Ordre Sacre' },
    { name: 'Barbares', image: 'barbarians.png', link: '/factions/barbarians', dataName: 'Barbares' },
    { name: 'Tribus Ogryn', image: 'ogryn-tribes.png', link: '/factions/ogryn-tribes', dataName: 'Tribus Ogryn' },
    { name: 'Homme Lézards', image: 'lizardmen.png', link: '/factions/lizardmen', dataName: 'Homme Lezards' },
    { name: 'Marcheurs de Peau', image: 'skinwalkers.png', link: '/factions/skinwalkers', dataName: 'Marcheurs de Peau' },
    { name: 'Orcs', image: 'orcs.png', link: '/factions/orcs', dataName: 'Orcs' },
    { name: 'Rejetons Démo.', image: 'demonspawn.png', link: '/factions/demonspawn', dataName: 'Rejetons Demoniaques' },
    { name: 'Morts-vivants', image: 'undead-hordes.png', link: '/factions/undead-hordes', dataName: 'Morts-vivants' },
    { name: 'Elfes Noirs', image: 'dark-elves.png', link: '/factions/dark-elves', dataName: 'Elfes Noirs' },
    { name: 'Revenants Chevaliers', image: 'knight-revenant.png', link: '/factions/knight-revenant', dataName: 'Revenants Chevaliers' },
    { name: 'Nains', image: 'dwarves.png', link: '/factions/dwarves', dataName: 'Nains' },
    { name: "Clan de l'Ombre", image: 'shadowkin.png', link: '/factions/shadowkin', dataName: "Clan de l'Ombre" },
    { name: 'Gardes Sylvains', image: 'sylvan-watchers.png', link: '/factions/sylvan-watchers', dataName: 'Gardes Sylvains' }
  ]

  return (
    <section className="section faction-section" id="factions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Factions de Teleria</h2>
          <p className="section-subtitle">Choisissez votre faction et découvrez tous ses champions légendaires</p>
        </div>
        <div className="faction-grid" id="factionContainer">
          {factions.map((faction, index) => (
            <Link 
              key={index} 
              to={faction.link} 
              className="faction-bubble" 
              data-name={faction.dataName}
            >
              <img src={`/assets/images/factions/${faction.image}`} alt={faction.name} />
              <span>{faction.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FactionsSection