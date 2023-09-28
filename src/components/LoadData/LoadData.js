import React, { useEffect,useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';

const LoadData = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=> setProducts(data));
    },[])


    return (
        <div>
            {
                products.map(p=> <ShowProduct product={p}></ShowProduct>)
            }
        </div>
    );
};

export default LoadData;