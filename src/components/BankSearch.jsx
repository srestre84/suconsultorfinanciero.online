import React from 'react';
import './BankSearch.css';

const BankSearch = () => {
    return (
        <section className="bank-search-section section-padding">
            <div className="container">
                <div className="bank-search-card glass animate-fade-in delay-1">
                    <div className="bank-search-content">
                        <span className="bank-search-badge">Personalizado</span>
                        <h2 className="bank-search-title">
                            Tu Casa Propia <span className="text-highlight">Empieza Aquí</span>
                        </h2>
                        <p className="bank-search-description">
                            Según tu perfil buscamos el mejor Banco para que por fin tengas tu casa propia o inviertas en una nueva. Analizamos tasas, plazos y requisitos para encontrar la opción perfecta para ti.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/573167443613" target="_blank" rel="noopener noreferrer" className="bank-search-cta">
                                Solicitar Asesoría Gratuita
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                            </a>
                            <button 
                                onClick={() => {
                                    const shareText = "🏡 **¡Tu Casa Propia es Posible!** | Según tu perfil buscamos el mejor Banco. Mira cómo:";
                                    const shareUrl = "https://suconsultorfinanciero.online/servicios/busqueda-banco-vivienda";
                                    if (navigator.share) {
                                        navigator.share({ title: 'Búsqueda del Mejor Banco', text: shareText, url: shareUrl });
                                    } else {
                                        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
                                    }
                                }}
                                className="bank-search-cta" 
                                style={{ background: 'transparent', color: 'var(--azul-oscuro)', border: '2px solid var(--azul-oscuro)', boxShadow: 'none' }}
                            >
                                Compartir Servicio
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                            </button>
                        </div>
                    </div>
                    <div className="bank-search-image">
                        <img src="/bank-search.png" alt="Búsqueda de banco para vivienda" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BankSearch;
