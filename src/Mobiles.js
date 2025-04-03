import React from 'react';
import { products } from './products';
import Product from './Product';

const Mobiles = () => {
    const mobiles = products.filter(product => product.category === 'mobiles');

    return (
        <div className="container">
            <h1 className="category-title">Mobiles</h1>
            <div className="products-container">
                {mobiles.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Mobiles;