import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Particles from '../Particles/Particles'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <Particles />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout