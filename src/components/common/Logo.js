import React from 'react'
import LogoIcon from '../../images/education.png';

function Logo({ width }) {
    return (
        <img src={LogoIcon}
            style={{ width: width }}
            alt="Logo" />
    )
}

export default Logo
