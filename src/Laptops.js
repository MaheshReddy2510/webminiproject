import React from 'react';
import { products } from './products';
import Product from './Product';

const Laptops = () => {
    const laptops = products.filter(product => product.category === 'laptops');

    return (
        <div className="container">
            <h1 className="category-title">Laptops</h1>
            <div className="products-container">
                {laptops.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Laptops;