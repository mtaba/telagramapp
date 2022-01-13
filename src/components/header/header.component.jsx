import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss'
const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="item">
               Chat List
            </Link>
             <Link to="/contact" className="item">Contacts</Link>

        </div>
    )
}

export default Header;