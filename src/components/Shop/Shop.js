import React, { useState } from 'react';
import data from "../../fakeData/products.json"
import Product from '../Product/Product';
import Cart from '../ShoppingCart/Cart';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const productListener = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
    }
    return (
        <div className="shop-container">
           <div className="products-container"> 
                {
                    products.map(product => <Product product={product}
                    addProductListener={productListener} key={product.key} ></Product>)
                }
           </div>
           <div className="cart-container"> 
                <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;