import React from 'react'
import "./Layout.scss"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='Layout'>
      <div className='header'>
        <label className='title'>Pokedex</label>
      </div>
      <div className='outlet'>
          <Outlet />
      </div>
    </div>
  )
}

export default Layout