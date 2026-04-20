import React from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
    return (
        <section className="insta-section delay-2 animate-fade-in" id="instagram">
            <div className="container">
                <div className="insta-card glass">
                    <div className="insta-header">
                        <div className="insta-icon-wrapper">
                            <span className="insta-icon">📸</span>
                        </div>
                        <div className="insta-text">
                            <h2>Síguenos en Instagram</h2>
                            <p>Mantente actualizado con los mejores consejos financieros, tips de ahorro y novedades del mercado en Colombia.</p>
                        </div>
                        <a
                            href="https://www.instagram.com/sebastian.restrepor/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="insta-btn"
                        >
                            Visitar Perfil
                        </a>
                    </div>
                    
                    {/* Nueva cuadrícula de vista previa */}
                    <div className="insta-grid">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="insta-grid-item">
                                <img src={`/instagram/post${i}.png?v=1`} alt={`Instagram post ${i}`} />
                                <div className="insta-grid-overlay">
                                    <span>❤️</span>
                                    <span>💬</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
