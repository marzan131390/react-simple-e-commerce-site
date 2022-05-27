import React from 'react';
import './ProductDetail.css';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div className="ProductDetail-container">
            <Product product={product} showAddToCartBtn ={false}></Product>
        </div>
    );
};

export default ProductDetail;