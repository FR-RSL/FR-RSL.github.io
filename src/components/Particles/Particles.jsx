import React, { useEffect, useRef } from 'react'
import './Particles.css'

const Particles = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const createParticles = () => {
      const particles = particlesRef.current
      if (!particles) return

      const particleCount = 50
      particles.innerHTML = '' // Clear existing particles

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 6 + 's'
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's'
        particles.appendChild(particle)
      }
    }

    createParticles()
  }, [])

  return <div ref={particlesRef} className="particles"></div>
}

export default Particles