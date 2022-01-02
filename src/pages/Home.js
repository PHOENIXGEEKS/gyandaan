import React from 'react'
import Navbar from '../components/common/Navbar';
import About from '../components/LandingPage/About'
import Features from '../components/LandingPage/Features'
import Footer from '../components/common/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <About />
            <Features />
            <Footer />
        </div>
    )
}

export default Home
