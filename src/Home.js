import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { products } from './products';

const Home = () => {

    const featuredProducts = products.slice(0, 6);

    // Get products by category
    const mobiles = products.filter(product => product.category === 'mobiles').slice(0, 4);
    const laptops = products.filter(product => product.category === 'laptops').slice(0, 4);
    const earbuds = products.filter(product => product.category === 'earbuds').slice(0, 4);
    const watches = products.filter(product => product.category === 'watches').slice(0, 4);

    return (
        <div className="container">
            <h1>Welcome to MD Electronics</h1>

            <section>
                <h2 className="category-title">Featured Products</h2>
                <div className="products-container">
                    {featuredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section>
                <div className="category-header">
                    <h2 className="category-title">Mobiles</h2>
                    <Link to="/mobiles" className="view-all">View All</Link>
                </div>
                <div className="products-container">
                    {mobiles.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section>
                <div className="category-header">
                    <h2 className="category-title">Laptops</h2>
                    <Link to="/laptops" className="view-all">View All</Link>
                </div>
                <div className="products-container">
                    {laptops.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section>
                <div className="category-header">
                    <h2 className="category-title">Earbuds</h2>
                    <Link to="/earbuds" className="view-all">View All</Link>
                </div>
                <div className="products-container">
                    {earbuds.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section>
                <div className="category-header">
                    <h2 className="category-title">Watches</h2>
                    <Link to="/watches" className="view-all">View All</Link>
                </div>
                <div className="products-container">
                    {watches.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;