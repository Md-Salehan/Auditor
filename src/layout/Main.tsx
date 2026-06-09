import React from 'react'
import { Navbar, Footer } from '../components'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className="bg-page-bg text-text font-body-lg min-h-screen antialiased selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Main