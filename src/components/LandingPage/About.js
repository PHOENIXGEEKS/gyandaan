import React from 'react'
import AboutImgVector from '../../images/about.jpg'

function About() {
    return (
        <div id="about" className="flex flex-col h-auto p-12 md:flex-row h-96">
            <div id="card" className="flex h-auto w-auto md:w-3/5 h-36 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit at doloremque, quis voluptatibus facilis tempore ducimus vitae excepturi consectetur animi maxime eaque ex soluta. Consectetur reprehenderit asperiores repellendus magni dolore.
            </div>
            <img className='h-44 md:h-52' src={AboutImgVector} alt="About" />
        </div>
    )
}

export default About
