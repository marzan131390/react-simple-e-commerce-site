import React from 'react';
import './Cart.css'
import {Link} from 'react-router-dom';
const Cart = (props) => {
    console.log(props);
    let  cart = props.cart;
    let shipping = 0;
    let total = 0;
    for(let i = 0; i<cart.length; i++) {
        let single = cart[i];
        let shippingPrice = single.shipping;
        let totalPrice = 0;
        if(single.quantity) {
            totalPrice = single.price * single.quantity;
        }
        else{
            totalPrice = single.price;
        }
        
        shipping = shipping + shippingPrice;
        total = total + totalPrice ;
    }
    //Styles For Shipping..
    if(total >500) {
        shipping = 0;
    }
    else if(total >300 && total <500){
        shipping = shipping * .5;
    };
    //Styles Fot Tax..
    let tax = (total*5)/100;
    tax = tax.toFixed(2);

    let grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div className="Cart-container">
            <h2>Order summary</h2>
            <p className="order-num">Items Ordered: {cart.length}</p>
            <div className="product-info-container"> 
                <div className="product-info-name"> 
                    <p>Product Price:</p>
                    <p><small>Shipping:</small></p>
                    <p><small>Tax:</small></p>
                    <h3>Total Price: </h3>
                </div>
                <div className="product-info-price">
                    <p>${total}</p>
                    <p><small>${shipping}</small></p>
                    <p><small>${tax}</small></p>           
                    <h5>${grandTotal}</h5>    
                </div>
            </div>
            {
                props.reviewOrder && <Link to="/review"><button className="custom-btn review-btn">Review Your Orders</button></Link>
            } 
            {
                props.placeOrder && <Link to="/manage"><button className="review-btn custom-btn">Place Your Order</button></Link>
            }
        </div>
    );
};

export default Cart;