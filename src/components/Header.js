import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <Link to="/" className="logo">Logo</Link>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/second">Second</Link></li>
                <li><Link to="/third">Third</Link></li>
                <li><Link to="/fourth">Fourth</Link></li>
            </ul>
        </header>
    );
}

export default Header;
