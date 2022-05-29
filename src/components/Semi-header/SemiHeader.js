import React from 'react';
import cart from '../../images/cart-48.png';
import './SemiHeader.css'
import fakeData from '../../fakeData/products.json';
const SemiHeader = () => {
    let localStorageData = JSON.parse(localStorage.getItem("shopping-cart"));
    const pdKeys = Object.keys(localStorageData);
    const pdArray = pdKeys.map(key => {
        let matchingProduct = fakeData.find(data => data.key === key);
        return matchingProduct;
    });

    return (
        <div className="semi-header">
            <div className='content'> 
                <input type="text" placeholder="Type Here To Search" />
                <img src={cart} alt="" />
                <span>{pdArray.length}</span>
            </div>
        </div>
    );
};

export default SemiHeader;