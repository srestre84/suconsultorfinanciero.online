import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-glass">
            <div className="container header-container">
                <div className="logo-container">
                    <img src="/logo.png" alt="Su Consultor Financiero Logo" className="logo" />
                </div>
                <div className="header-text">
                    <h1>Suconsultorfinanciero.online</h1>
                    <p>
                        Soluciones profesionales a tu alcance con diferentes entidades del mercado financiero Colombiano.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
