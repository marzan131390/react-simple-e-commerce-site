import React, { useState } from 'react';
import data from "../../fakeData/products.json"
import Product from '../Product/Product';
import Cart from '../ShoppingCart/Cart';
import './Shop.css';
import {addToDb} from '../../utilities/fakedb'
const Shop = () => {
    const [products, setProducts] = useState(data);
    let storageData = JSON.parse(localStorage.getItem('shopping-cart'));
    const storageKeys = Object.keys(storageData);
    console.log(storageKeys);
    const storageProducts = storageKeys.map(key => {
        const matchingProduct = products.find(product => product.key === key);
        return matchingProduct;
    })
    // console.log(storageProducts);
    const [cart, setCart] = useState(storageProducts);
    const productListener = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
        addToDb(product.key);
        // console.log(product.key);
    }
    return (
        <div className="shop-container">
           <div className="products-container"> 
                {
                    products.map(product => <Product product={product}
                    addProductListener={productListener} key={product.key} showAddToCartBtn = {true} removeBtn = {false}></Product>)
                }
           </div>
           <div className="cart-container"> 
                <Cart cart ={cart} reviewOrder = {true}></Cart>
           </div>
        </div>
    );
};

export default Shop;