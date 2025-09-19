import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import FactionsPage from './pages/FactionsPage/FactionsPage'
import EquipmentPage from './pages/EquipmentPage/EquipmentPage'
import GuidesPage from './pages/GuidesPage/GuidesPage'
import ToolsPage from './pages/ToolsPage/ToolsPage'
import CommunityPage from './pages/CommunityPage/CommunityPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="factions/*" element={<FactionsPage />} />
          <Route path="equipment/*" element={<EquipmentPage />} />
          <Route path="guides/*" element={<GuidesPage />} />
          <Route path="tools/*" element={<ToolsPage />} />
          <Route path="community/*" element={<CommunityPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App