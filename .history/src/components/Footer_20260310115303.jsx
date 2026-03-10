import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-section">
                        <img src="/logo.png" alt="Su Consultor Financiero Logo" className="footer-logo" />
                        <p>Soluciones profesionales a tu alcance con diferentes entidades del mercado financiero Colombiano.</p>
                    </div>

                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>📱 WhatsApp: <a href="https://wa.me/573167443613">+57 316 744 3613</a></p>
                        <p>✉️ info@suconsultorfinanciero.online</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Suconsultorfinanciero.online. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* Botón Flotante WhatsApp */}
            <a
                className="whatsapp-btn animate-fade-in delay-3"
                href="https://wa.me/573167443613"
                target="_blank"
                rel="noopener noreferrer"
                title="Chatea conmigo por WhatsApp"
            >
                <span className="icono">💬</span>
                <span className="texto">¡Escríbeme!</span>
            </a>
        </>
    );
};

export default Footer;
