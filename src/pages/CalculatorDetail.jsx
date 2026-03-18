import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RateCalculator from '../components/RateCalculator';

function CalculatorDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentUrl = `https://suconsultorfinanciero.online/calculadora`;
    const title = "Calculadora de Tasas de Interés | Su Consultor Financiero";
    const description = "Convierte fácilmente entre tasas Efectiva Anual (EA), Mes Vencido (MV), Trimestre Vencido y más. La herramienta esencial para entender tus préstamos e inversiones.";

    return (
        <main className="calculator-detail-page">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="https://suconsultorfinanciero.online/calculator-preview.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://suconsultorfinanciero.online/calculator-preview.png" />
            </Helmet>

            <section className="section-padding container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--azul-oscuro)', textDecoration: 'none', fontWeight: 'bold' }}>
                        &larr; Volver al inicio
                    </Link>

                    <h1 style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                        Calculadora de Tasas
                    </h1>

                    <div className="share-links-top" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '0.9rem', color: '#666', alignSelf: 'center' }}>Compartir:</span>
                        <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Usa esta calculadora de tasas para tus créditos: ' + currentUrl)}`, '_blank')} className="prop-share-btn prop-share-btn--ws" style={{ width: '35px', height: '35px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z" /></svg>
                        </button>
                        <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')} className="prop-share-btn prop-share-btn--fb" style={{ width: '35px', height: '35px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </button>
                        <button onClick={() => { navigator.clipboard.writeText(currentUrl); alert('¡Enlace de calculadora copiado!'); }} className="prop-share-btn prop-share-btn--copy" style={{ width: '35px', height: '35px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', color: '#666' }}>
                        Nuestra herramienta gratuita para que siempre sepas cuánto estás pagando realmente.
                    </p>

                    <div className="glass" style={{ padding: '2rem', borderRadius: '30px', marginBottom: '3rem' }}>
                        <RateCalculator />
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center', background: 'rgba(var(--mostaza-rgb), 0.1)', padding: '2rem', borderRadius: '20px' }}>
                        <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1rem' }}>¿Necesitas una asesoría personalizada?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Te ayudamos a encontrar el crédito con la mejor tasa del mercado según tu perfil.</p>
                        <a href="https://wa.me/573167443613?text=Hola, usé la calculadora de tasas y me gustaría recibir asesoría personalizada." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Hablar con un experto
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CalculatorDetail;
