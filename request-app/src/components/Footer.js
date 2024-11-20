import React from 'react'
import { Link } from 'react-router-dom'
import portfolio_icon from '../assets/icons/icons8-portfolio-24.png'
import x_icon from '../assets/icons/icons8-x-24.png'
import linkedin_icon from '../assets/icons/icons8-linkedin-24.png'
import dribbble_icon from '../assets/icons/icons8-dribbble-24.png'
import github_icon from '../assets/icons/icons8-github-24.png'
import pinterest_icon from '../assets/icons/icons8-pinterest-24.png'
import facebook_icon from '../assets/icons/icons8-facebook-24.png'

const Footer = () => {
    return (
        <div className="footer">
            <p>2024 SOVEREIGN by CLAUDIA ARIAS</p>
            <div className='socials'>
                <Link to="http://www.claudiaarias.net/"><img src={portfolio_icon} alt="portfolio icon"></img></Link>
                <Link to="http://www.x.com/floatyskyveil"><img src={x_icon} alt="x icon"></img></Link>
                <Link to="http://www.linkedin.com/in/xclaudiaarias"><img src={linkedin_icon} alt="linkedin icon"></img></Link>
                <Link to="https://dribbble.com/floatyskyveil"><img src={dribbble_icon} alt="dribbble icon"></img></Link>
                <Link to="http://www.github.com/xclaudiaarias"><img src={github_icon} alt="github icon"></img></Link>
                <Link to="http://www.pinterest.com/floatyskyveil"><img src={pinterest_icon} alt="pinterest icon"></img></Link>
                <Link to="http://www.facebook.com"><img src={facebook_icon} alt="facebook icon"></img></Link>
            </div>
        </div>
    )
}

export default Footer