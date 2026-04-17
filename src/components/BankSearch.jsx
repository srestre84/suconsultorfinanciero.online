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
                        <a href="https://wa.me/573167443613" target="_blank" rel="noopener noreferrer" className="bank-search-cta">
                            Solicitar Asesoría Gratuita
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </a>
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
