import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let  cart = props.cart;
    let shipping = 0;
    let total = 0;
    console.log(cart);
    cart.map((single) => {
        let shippingPrice = single.shipping;
        let totalPrice = single.price;
        shipping = shipping + shippingPrice;
        total = total + totalPrice;
    })
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
        <div>
            <h2>Order summary</h2>
            <p className="order-num">Items Ordered: {cart.length}</p>
            <div className="product-info-container"> 
                <div className="product-info-name"> 
                    <p><small>Shipping:</small></p>
                    <p><small>Tax:</small></p>
                    <p>Product Price:</p>
                    <h3>Total Price: </h3>
                </div>
                <div className="product-info-price">
                    <p><small>${shipping}</small></p>
                    <p><small>${tax}</small></p>
                    <p>${total}</p>
                    <h5>${grandTotal}</h5>    
                </div>
            </div>
            <button className="custom-btn review-btn">Review Your Orders</button>
        </div>
    );
};

export default Cart;