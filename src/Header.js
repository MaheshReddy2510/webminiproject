import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Header = () => {
    const { cart, user, logoutUser } = useContext(CartContext);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    return (
        <header>
            <div className="nav-container">
                {/* Student Information */}
                <div className="student-info">
                    <span className="student-name">M Venkata Mahesh Reddy</span>
                    <span className="student-reg">    23BCE0476</span>
                </div>

                {/* Logo */}
                <Link to="/" className="logo">
                    MD <span>Electronics</span>
                </Link>

                {/* Search Bar */}
                <div className="search-container">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Navigation Links */}
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/mobiles">Mobiles</Link>
                    <Link to="/laptops">Laptops</Link>
                    <Link to="/earbuds">Earbuds</Link>
                    <Link to="/watches">Watches</Link>
                    <Link to="/portfolio">My Portfolio</Link> {/* New Portfolio Link */}

                    {user ? (
                        <>
                            <span className="welcome-user">Welcome, {user.name}</span>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}

                    <Link to="/cart" className="cart-icon">
                        🛒
                        {cart.length > 0 && (
                            <span className="cart-count">
                                {cart.reduce((total, item) => total + item.quantity, 0)}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;