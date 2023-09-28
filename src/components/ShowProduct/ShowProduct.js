import React from 'react';

import './ShowProduct.css'
import addCart from '../../utility/addCart/addCart';
import removeCart from '../../utility/removeCart/removeCart';

const ShowProduct = (props) => {
    const {name,price,brand,id}=props.product;

    return (
        <div className='container'>
            <h2>Product name:{name}</h2>
            <h3>price: {price}</h3>
            <h4>brand: {brand}</h4>
            <button className='btn' onClick={()=>addCart(id,name,price)}>add</button>
            <button className='btn' onClick={()=>removeCart(id)}>remove</button>
        </div>
    );
};

export default ShowProduct;