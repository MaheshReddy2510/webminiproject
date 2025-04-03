import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <div className="portfolio-card">
                <div className="portfolio-header">

                    <h2>M Venkata Mahesh Reddy</h2>
                    <p>23BCE0476</p>
                </div>

                <div className="portfolio-content">
                    <h3>About Me</h3>
                    <p>
                        Full-stack developer passionate about building modern web applications.
                        Created this MD Electronics store as a React learning project.
                    </p>

                    <div className="skills">
                        <h4>Skills</h4>
                        <div className="skill-tags">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML/CSS</span>
                            <span>Java Programming</span>
                        </div>
                    </div>

                    <Link to="/" className="view-project-btn">
                        <i className="fas fa-store"></i> View MD Electronics
                    </Link>

                    <a
                        href="https://github.com/MaheshReddy2510"
                        className="github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i> My GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;