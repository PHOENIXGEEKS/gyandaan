import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SideNavbar from './SideNavbar';

function Navbar() {
  const [showSideNav, setSideNav] = useState(false)
  const sideNavbarHandler = (action) => {
    setSideNav(action)
  }

  return (
    <div id="navbar">
      <SideNavbar showSideNav={showSideNav} sideNavbarHandler={sideNavbarHandler} />
      <div className="shadow-xl h-20 w-full flex justify-between items-center px-10">

        <div id="logo" className="flex justify-between items-center text-xl font-bold">
          <Logo width={50} />
          Gyaan<span className="text-primary-red underline">Daan</span>
        </div>

        <div id="hamburger-icon" onClick={() => sideNavbarHandler(true)} className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div id="auth" className="hidden md:flex justify-between items-center space-x-8">
          <Link id="login_btn" to="/auth">
            <div className="border-2 border-primary-red bg-primary-red px-6 py-2 rounded-full text-white">
              Login
            </div>
          </Link>
          <Link id="signup_btn" to="/auth">
            <div className="border-2 border-primary-red px-6 py-2 rounded-full text-primary-red">
              Join for Free
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
