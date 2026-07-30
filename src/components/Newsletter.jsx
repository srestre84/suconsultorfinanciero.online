import React from 'react';
import './Newsletter.css';

function Newsletter() {
    const pdfUrl = "https://drive.google.com/uc?export=download&id=1jm3TLgeVblEjg13T9faQm7Kl6VFtSti9";

    return (
        <div className="newsletter-container animate-fade-in delay-3" id="descarga-pdf">
            <div className="newsletter-blob-1"></div>
            <div className="newsletter-blob-2"></div>
            
            <div className="newsletter-badge">100% GRATIS</div>
            
            <div className="newsletter-content-wrapper">
                <h3 className="newsletter-title">Descarga el PDF: Flujo de Caja by SRR 📉</h3>
                <p className="newsletter-desc">
                    Domina el control de tus ingresos y egresos con nuestra metodología exclusiva. 
                    Haz clic abajo para descargar de forma directa y sin registro la plantilla y guía paso a paso para optimizar tus finanzas.
                </p>

                <div style={{ margin: '2rem 0' }}>
                    <a 
                        href={pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="newsletter-btn newsletter-btn-link"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1.2rem 2.5rem',
                            fontSize: '1.2rem',
                            fontWeight: '800',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            boxShadow: '0 8px 25px rgba(225, 173, 1, 0.5)'
                        }}
                    >
                        📥 Descargar PDF Gratis Ahora
                    </a>
                </div>

                <div className="newsletter-share-section" style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', width: '100%' }}>
                    <p style={{ fontSize: '1rem', color: 'var(--mostaza)', marginBottom: '1rem', fontWeight: 'bold' }}>
                        🚀 ¡Si te sirve este material, ayúdanos compartiéndolo!
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a 
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent('🎁 ¡Descarga gratis este PDF de Flujo de Caja by SRR! Me pareció excelente para organizar las finanzas: https://suconsultorfinanciero.online#descarga-pdf')}`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="newsletter-btn newsletter-btn--whatsapp"
                            style={{ textDecoration: 'none', padding: '0.75rem 1.5rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px' }}
                        >
                            Compartir en WhatsApp
                        </a>
                        <a 
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://suconsultorfinanciero.online#descarga-pdf')}`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ background: '#1877F2', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(24, 119, 242, 0.4)' }}
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
