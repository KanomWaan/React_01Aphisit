import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import '../App.css'


function Home() {
  return (
  <>
    <Nav />
    <div className='home'>
     <div className="headle">
        <h1>Generation Thailand<br/>React - Assessment</h1>
     </div>
      <div className='botton'>
        <Link to='/HomeUser'>
          <button >User Home Sector</button>
        </Link>
        <Link to ='/HomeAdmin'>
          <button>Admin Home Sector</button>
        </Link> 
     </div>
    </div>
  </>
  )
}

export default Home