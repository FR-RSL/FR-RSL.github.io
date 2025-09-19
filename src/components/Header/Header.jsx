import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)
  }

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-section">
          <Link to="/">
            <img src="/assets/images/logos/logo.png" alt="Logo FR RSL" />
            <h1>FR RSL</h1>
          </Link>
        </div>

        <nav className="main-nav">
          <div className="nav-item dropdown">
            <button 
              className="nav-link"
              onClick={() => toggleDropdown('champions')}
            >
              Champions <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'champions' ? 'open' : ''}`}>
              <Link to="/factions">Toutes les Factions</Link>
              <Link to="/factions/shadowkin">Clan de l'Ombre</Link>
              <Link to="/factions/sylvan-watchers">Gardes Sylvains</Link>
              <a href="https://pgbmax.github.io" target="_blank" rel="noopener noreferrer">Tier Lists</a>
            </div>
          </div>

          <div className="nav-item dropdown">
            <button 
              className="nav-link"
              onClick={() => toggleDropdown('guides')}
            >
              Guides <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'guides' ? 'open' : ''}`}>
              <Link to="/guides">Tous les Guides</Link>
              <Link to="/equipment/artifacts">Reliques</Link>
              <Link to="/equipment/accessories">Joyaux</Link>
              <Link to="/equipment/blessings">Grâces</Link>
              <Link to="/guides/pvp">Builds PvP</Link>
              <Link to="/guides/dungeons">Donjons</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <button 
              className="nav-link"
              onClick={() => toggleDropdown('tools')}
            >
              Outils <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`dropdown-menu ${dropdownOpen === 'tools' ? 'open' : ''}`}>
              <Link to="/tools/calculator">Calculateurs</Link>
              <Link to="/tools/optimizer">Optimiseur de Builds</Link>
              <Link to="/tools/planner">Planificateur d'Équipe</Link>
              <Link to="/tools/database">Base de Données</Link>
            </div>
          </div>

          <Link to="/news" className="nav-link">Actualités</Link>
        </nav>

        <SearchBar />
      </div>
    </header>
  )
}

export default Header