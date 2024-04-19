
import React, { useState } from 'react'
import './worker.css'
import worker from '../../assets/logo/worker.png'
import appLogo from '../../assets/logo/appLogo.png'
import HomeW from './HomeW'

const NavbarW = () => {

  const [currComp, setCurrComp] = useState('Home')

  return (

    <div className="flexPage">
      <div className='navbarBox'>

        <div className="flexTitle">
          <img src={appLogo} alt="" />
          <h1>LinkWare</h1>
        </div>

        <img src={worker} className='workerImg' alt="" />

        <div className="navbarComp">
          <h2>Home</h2>
          <h2>Products </h2>
          <h2>Notification</h2>
          <h2>Contact</h2>

          <div className="menuLast">
            <i className="fas fa-cog"></i>
            <i className="fa-solid fa-power-off"></i>
          </div>
        </div>

      </div>
      {currComp == 'Home' ? <HomeW /> : ''}

    </div>
  )
}

export default NavbarW