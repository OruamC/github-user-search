import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="header-title">
                    Bootcamp DevSuperior
            </div>
            </Link>
        </div>
    )
}

export default Header;