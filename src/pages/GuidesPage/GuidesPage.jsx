import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GuidesSection from '../../components/GuidesSection/GuidesSection'
import './GuidesPage.css'

const GuidesPage = () => {
  return (
    <div className="guides-page">
      <Routes>
        <Route index element={<GuidesSection />} />
        {/* Ici seront ajoutées les routes spécifiques aux guides */}
      </Routes>
    </div>
  )
}

export default GuidesPage