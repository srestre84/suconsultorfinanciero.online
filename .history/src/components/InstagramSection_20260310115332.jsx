import React from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
    return (
        <section className="insta-section delay-2 animate-fade-in" id="instagram">
            <div className="container">
                <div className="insta-card glass">
                    <div className="insta-content">
                        <div className="insta-icon-wrapper">
                            <span className="insta-icon">📸</span>
                        </div>
                        <div className="insta-text">
                            <h2>Síguenos en Instagram</h2>
                            <p>Mantente actualizado con los mejores consejos financieros, tips de ahorro y novedades del mercado en Colombia.</p>
                        </div>
                        <a
                            href="https://www.instagram.com/tu_perfil_aqui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="insta-btn"
                        >
                            Visitar Perfil
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
