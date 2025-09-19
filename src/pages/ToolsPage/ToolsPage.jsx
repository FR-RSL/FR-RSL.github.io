import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ToolsPage.css'

const ToolsPage = () => {
  return (
    <div className="tools-page">
      <Routes>
        <Route index element={<ToolsIndex />} />
        {/* Routes pour les différents outils */}
      </Routes>
    </div>
  )
}

const ToolsIndex = () => (
  <div className="tools-index">
    <h1>Outils</h1>
    <div className="tools-grid">
      <Link to="calculator" className="tool-card">
        <h3>Calculateurs</h3>
        <p>Calculs de stats et dommages</p>
      </Link>
      <Link to="optimizer" className="tool-card">
        <h3>Optimiseur</h3>
        <p>Optimisation des builds</p>
      </Link>
    </div>
  </div>
)

export default ToolsPage