import React from 'react'
import { Link } from 'react-router-dom';

function SideNavbar({ showSideNav, sideNavbarHandler }) {
    const onCloseHandler = () => {
        sideNavbarHandler(false)
    }
    return (
        <div className={`h-screen bg-white w-9/12 absolute top-0 right-0 transition-all ${showSideNav ? `` : 'translate-x-full'}`}>
            <div id="navlinks" className='flex flex-col absolute top-12 p-8 space-y-2'>
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
            <div id="closeButton" className='absolute right-0 top-0 p-2' onClick={onCloseHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

        </div>
    )
}

export default SideNavbar
