import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const Product = (props) => {
    // console.log(props);
    let {name, seller, price, stock, star, img, key, features} = props.product;
    return (
        <div className="product-container">
            <div className="img-content"> 
                <img src={img} alt="" />
            </div>
            <div className="product-content"> 
                <h3><Link to= {"/product/" + key}>{name}</Link> </h3> <br />
                <p>by: {seller}</p> 
                <br />
                <div className="inner-product-content"> 
                    <div> 
                        <h5 className="price">${price}</h5>
                        <br />
                        <small>Only {stock} products are available in stock so <span> Order Now!!!</span></small>
                        <br /><br />
                        {props.showAddToCartBtn &&
                            <button className="custom-btn" onClick={() => props.addProductListener(props.product)}><FontAwesomeIcon className='icon' icon={faShoppingCart} /> add to cart</button>   
                        }
                        {
                            props.removeBtn && <button className="custom-btn">Remove Product</button>
                        }
                        <br />
                    </div>
                    <div> 
                        <p>{star}</p>
                        <br />
                        <h2>Features</h2>
                        <ul className="features-lists"> 
                        {
                            features.map(singleFe => <li>{singleFe.description} is {singleFe.value}</li>)
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;