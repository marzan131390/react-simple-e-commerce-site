import React from 'react';
import cart from '../../images/cart-48.png';
import './SemiHeader.css'
const SemiHeader = () => {
    return (
        <div className="semi-header">
            <div className='content'> 
                <input type="text" placeholder="Type Here To Search" />
                <img src={cart} alt="" />
                <span>1</span>
            </div>
        </div>
    );
};

export default SemiHeader;