
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { formatINR } from './currencyFormatter';

const Cart = () => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        clearCart
    } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container">
                <h2>Your Cart</h2>
                <p>Your cart is empty</p>
                <Link to="/" className="continue-shopping">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                    />
                    <div className="cart-item-info">
                        <h3 className="cart-item-title">{item.name}</h3>
                        <p className="cart-item-price">{formatINR(item.price)}</p>
                        <div className="cart-item-quantity">
                            <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ marginLeft: '10px', color: 'red' }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="cart-total">
                Total: {formatINR(cartTotal)}
            </div>

            <button
                className="checkout-btn"
                onClick={() => alert('Proceeding to checkout')}
            >
                Proceed to Checkout
            </button>

            <button
                onClick={clearCart}
                style={{
                    background: '#f44336',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '15px'
                }}
            >
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;