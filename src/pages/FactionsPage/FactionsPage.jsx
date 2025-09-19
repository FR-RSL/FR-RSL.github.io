import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FactionsSection from '../../components/FactionsSection/FactionsSection'
import './FactionsPage.css'

const FactionsPage = () => {
  return (
    <div className="factions-page">
      <Routes>
        <Route index element={<FactionsSection />} />
        {/* Ici seront ajoutées les routes spécifiques à chaque faction */}
      </Routes>
    </div>
  )
}

export default FactionsPage