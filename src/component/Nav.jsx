import React from 'react'
import'../App.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
  <nav className='navbar'>
    <Link to="/">Home</Link>
    <Link to="/Owner">Owner</Link>
  </nav>
  )
}

export default Nav