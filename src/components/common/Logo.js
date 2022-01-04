import React from 'react'
import LogoIcon from '../../images/education.png';

function Logo({ width }) {
    return (
        <img className='p-1' src={LogoIcon}
            style={{ width: width }}
            alt="Logo" />
    )
}

export default Logo
