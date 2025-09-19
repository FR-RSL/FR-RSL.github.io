import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './EquipmentPage.css'

const EquipmentPage = () => {
  return (
    <div className="equipment-page">
      <Routes>
        <Route index element={<EquipmentIndex />} />
        {/* Routes pour artifacts, accessories, blessings */}
      </Routes>
    </div>
  )
}

const EquipmentIndex = () => (
  <div className="equipment-index">
    <h1>Équipements</h1>
    <div className="equipment-grid">
      <Link to="artifacts" className="equipment-card">
        <h3>Reliques</h3>
        <p>Sets de reliques et optimisation</p>
      </Link>
      <Link to="accessories" className="equipment-card">
        <h3>Joyaux</h3>
        <p>Colliers, anneaux et bannières</p>
      </Link>
      <Link to="blessings" className="equipment-card">
        <h3>Grâces</h3>
        <p>Système de grâces</p>
      </Link>
    </div>
  </div>
)

export default EquipmentPage