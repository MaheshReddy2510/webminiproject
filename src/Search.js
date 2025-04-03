import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';
import { products } from './products';

const Search = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';
    const searchTerm = query.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="container">
            <h2>Search Results for "{query}"</h2>
            {filteredProducts.length > 0 ? (
                <div className="products-container">
                    {filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No products found matching your search.</p>
            )}
        </div>
    );
};

export default Search;