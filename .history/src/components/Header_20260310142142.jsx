import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-glass">
            <div className="container header-container">
                <div className="logo-container">
                    <Link to="/">
                        <img src="/logo.png" alt="Su Consultor Financiero Logo" className="logo" />
                    </Link>
                </div>
                <div className="header-text">
                    <h1>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Suconsultorfinanciero.online
                        </Link>
                    </h1>
                    <p>
                        Soluciones profesionales a tu alcance con diferentes entidades del mercado financiero Colombiano.
                    </p>
                    <nav style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Inicio</Link>
                        <Link to="/blog" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Blog Financiero</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
