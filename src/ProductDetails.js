
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './products';
import { CartContext } from './CartContext';
import { formatINR } from './currencyFormatter';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="container">Product not found</div>;
    }

    return (
        <div className="container">
            <div className="product-details">
                <img src={product.image} alt={product.name} className="details-image" />
                <div className="details-info">
                    <h1 className="details-title">{product.name}</h1>
                    <p className="details-price">{formatINR(product.price)}</p>
                    <p className="details-description">{product.description}</p>
                    <button
                        className="add-to-cart"
                        onClick={() => addToCart(product)}
                        style={{ width: '200px' }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;