import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-glass">
            <div className="container header-container">
                <div className="header-brand">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                        <img src="/logo.png" alt="Su Consultor Financiero Logo" className="logo" />
                        <h1 className="header-title">Suconsultorfinanciero.online</h1>
                    </Link>
                </div>

                <nav className="header-nav">
                    <Link to="/" className="nav-link">Inicio</Link>
                    {/* Ejemplos de links futuros para agregar. Basta con descomentarlos e implementarlos */}
                    {/* <a href="#servicios" className="nav-link">Servicios</a> */}
                    {/* <a href="#contacto" className="nav-link">Contacto</a> */}
                    <Link to="/blog" className="nav-link nav-highlight">Blog Financiero</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
