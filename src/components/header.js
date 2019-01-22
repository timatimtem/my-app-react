import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg';

import './Header.css'


const Header = ({ siteTitle }) => (
    <div>
        <div className="Header">
            <div className="HeaderGroup">
                <Link to="/"><img width="30" src={logo}/></Link>
                <Link to="/courses">Courses</Link>
                <Link to="/downloads">Downloads</Link>
                <Link to="/workshops">Workshops</Link>
                <Link to="/buy"><button>Buy</button></Link>
            </div>
        </div>
    </div>

)

export default Header
