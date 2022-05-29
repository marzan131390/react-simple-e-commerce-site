import React, {useEffect, useState} from 'react';
import './Review.css';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../ShoppingCart/Cart';
const Review = () => {
    let storageData = JSON.parse(localStorage.getItem('shopping-cart'));
    const [cart, setCart] = useState([]);
    useEffect( () => {
        let allPdKeysValues = storageData ;
        const pdKeysArray = Object.keys(allPdKeysValues)
        const cartProducts = pdKeysArray.map(key => {
            const product = fakeData.find(data => data.key === key );
            product.quantity = allPdKeysValues[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    // console.log(pro);
    return (
        <div className="shop-container">
            <div className="products-container"> 
                {cart.map(product => <Product product = {product} removeBtn={true}></Product>)
                }
            </div>
            <div className="cart-container"> 
                <Cart cart = {cart} placeOrder = {true}></Cart>
            </div>
        </div>
    );
};

export default Review;