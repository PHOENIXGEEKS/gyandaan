import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id="navbar">
      <div className="shadow-xl h-20 w-full flex justify-between items-center px-10">
        <div id="logo" className="text-xl font-bold">
          gyaan<span className="text-primary-red underline">daan.</span>
        </div>
        <div id="auth" className="space-x-12">
          <Link id="login_btn" to="/auth">
            <div className="border-2 border-primary-red bg-primary-red px-8 py-2 rounded-full text-white">
              Login
            </div>
          </Link>
          <Link id="signup_btn" to="/auth">
            <div className="border-2 border-primary-red px-8 py-2 rounded-full text-primary-red">
              Join for Free
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
