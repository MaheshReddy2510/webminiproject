import React from 'react';
import { products } from './products';
import Product from './Product';

const Watches = () => {
    const watches = products.filter(product => product.category === 'watches');

    return (
        <div className="container">
            <h1 className="category-title">Watches</h1>
            <div className="products-container">
                {watches.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Watches;