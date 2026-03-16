import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Revisar preferencia guardada al montar el componente
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <header className="header-glass">
            <div className="container header-container">
                <div className="header-brand">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                        <div className="logo-wrapper">
                            <img src="/logo.png" alt="Su Consultor Financiero Logo" className="logo" />
                        </div>
                        <h1 className="header-title">Suconsultorfinanciero.online</h1>
                    </Link>
                </div>

                <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/#servicios" className="nav-link">Servicios</Link>
                    <Link to="/inmuebles" className="nav-link">Inmuebles</Link>
                    <Link to="/privacidad" className="nav-link">Privacidad</Link>
                    <Link to="/blog" className="nav-link nav-highlight" style={{ marginRight: '1rem' }}>Blog Financiero</Link>

                    {/* Botón Toggle Dark Mode */}
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        title={isDarkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
                    >
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
