import React, { useState, useRef, useEffect } from 'react'
import './SearchBar.css'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length > 2) {
      // Ici on pourrait faire une vraie recherche
      // Pour l'instant, juste des suggestions factices
      const mockSuggestions = [
        'Tetsuya le Sauveur',
        'Arbiter',
        'Shadowkin',
        'Reliques',
        'Tier List'
      ].filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(mockSuggestions)
      setShowSuggestions(mockSuggestions.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }

  const clearSearch = () => {
    setQuery('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  return (
    <div className="search-container">
      <div className="advanced-search-bar">
        <div className="search-input-wrapper">
          <div className="search-icon">🔍</div>
          <input
            ref={inputRef}
            type="text"
            id="searchInput"
            value={query}
            onChange={handleInputChange}
            placeholder="Tapez pour rechercher : Tetsuya, Arbiter, Shadowkin..."
            autoComplete="off"
          />
          <div className="search-shortcut">Ctrl+K</div>
          {query && (
            <div className="search-clear" onClick={clearSearch}>✕</div>
          )}
        </div>
        {showSuggestions && (
          <div className="search-suggestions">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="search-suggestion">
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar