import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            2024 SOVEREIGN by CLAUDIA ARIAS
            <div className='socials'>
                <Link to="">Portfolio</Link>
                <Link to="">Facebook</Link>
                <Link to="">Linkedin</Link>
                <Link to="">Github</Link>
                <Link to="">Dribbble</Link>
                <Link to="">Pinterest</Link>
            </div>
        </div>
    )
}

export default Footer