import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="" />
           <nav className="nav-link"> 
                <ul>
                    <li><a href="/shop" className="active">Shop</a></li>
                    <li><a href="/review">Order Review</a></li>
                    <li><a href="/manage">Manage Inventory Here</a></li>
                </ul>
           </nav>
        </div>
    );
};

export default Header;