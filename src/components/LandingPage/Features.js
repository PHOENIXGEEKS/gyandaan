import React from 'react'
// import * as icons from '../../images/feature_icons'
import importAll from '../../utilities/importAllImages'

function Features() {
    const icons = []
    const images = importAll(require.context('../../images/feature_icons', false, /\.(png|jpe?g|svg)$/));
    Object
        .entries(images)
        .forEach(([key, value]) => {
            icons.push(value)
        })
    const texts = [
        'Doubt solving',
        'Towards Excellence',
        'Best Mentors',
        'Live Lectures',
        'Tutors'
    ]
    return (
        <div className="flex flex-col items-center justify-between w-full h-auto p-5 bg-primary-red space-y-20 md:flex-row h-80">
            {
                [
                    icons.map((icon, key) => {
                        return (
                            <div className="flex flex-col space-y-5 items-center">

                                <img className='invert h-32' src={icon} alt='icon' />
                                {
                                    <p className='invert font-bold text-2xl'>{texts[key]}</p>
                                }
                            </div>
                        )
                    }
                    ),
                ]
            }

        </div>
    )
}

export default Features
