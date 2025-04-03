
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { formatINR } from './currencyFormatter';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                />
            </Link>
            <div className="product-info">
                <Link to={`/product/${product.id}`}>
                    <h3 className="product-title">{product.name}</h3>
                </Link>
                <p className="product-price">{formatINR(product.price)}</p>
                <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;