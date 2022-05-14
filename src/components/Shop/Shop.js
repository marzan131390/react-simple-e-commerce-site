import React, { useState } from 'react';
import data from "../../fakeData/products.json"
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState(data);
    return (
        <div className="shop-container">
           <div className="products-container"> 
                {
                    products.map(product => <Product product={product}></Product>)
                }
           </div>
           <div className="cart-container"> 
                <h3>This Styles are for shopping Cart....</h3>
           </div>
        </div>
    );
};

export default Shop;