import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

export default function MasterLayout() {
  return (
    <>
        <NavBar />

        <Outlet />

        <Footer />
    </>
  )
}
