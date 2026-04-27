import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in">
                        <span className="badge-dot"></span>
                        Asesor Financiero: Compra de Cartera y Crédito
                    </div>
                    
                    <h1 className="hero-title animate-fade-in delay-1">
                        Toma el control de tu <span className="text-gradient">libertad financiera</span> con <span className="text-highlight">estrategia matemática</span>.
                    </h1>
                    
                    <p className="hero-subtitle animate-fade-in delay-2">
                        Más de 15 años como <strong>asesor financiero</strong> en Medellín y Antioquia, transformando deudas en liquidez a través de compra de cartera y créditos estratégicos.
                    </p>
                    
                    <div className="hero-actions animate-fade-in delay-3">
                        <a 
                            href="https://wa.me/573167443613?text=Hola%2C%20quiero%20una%20consultor%C3%ADa%20financiera" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-hero-primary"
                        >
                            <span className="btn-icon">💬</span>
                            Consultoría Gratis
                        </a>
                        <Link to="/#servicios" className="btn-hero-secondary">
                            Ver Servicios
                        </Link>
                    </div>

                    <div className="hero-stats animate-fade-in delay-3">
                        <div className="stat-item">
                            <span className="stat-value">+10</span>
                            <span className="stat-label">Años de Experiencia</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Transparencia</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hero-scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
