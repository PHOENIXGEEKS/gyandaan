import React from 'react'
import AboutImgVector from '../../images/about.jpg'

function About() {
    return (
        <div id="about" className="flex flex-column h-96 p-12">
            <div id="card" className="flex w-3/5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit at doloremque, quis voluptatibus facilis tempore ducimus vitae excepturi consectetur animi maxime eaque ex soluta. Consectetur reprehenderit asperiores repellendus magni dolore.
            </div>
            <img src={AboutImgVector} alt="About" />
        </div>
    )
}

export default About
