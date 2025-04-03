import React from 'react';
import { products } from './products';
import Product from './Product';

const Earbuds = () => {
    const earbuds = products.filter(product => product.category === 'earbuds');

    return (
        <div className="container">
            <h1 className="category-title">Earbuds</h1>
            <div className="products-container">
                {earbuds.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Earbuds;