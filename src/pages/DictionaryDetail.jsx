import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { dictionaryData } from '../data/dictionaryData';

function DictionaryDetail() {
    const { id } = useParams();
    const item = dictionaryData.find(d => d.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!item) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Término no encontrado</h2>
                <Link to="/#diccionario" className="btn btn-primary" style={{ marginTop: '2rem' }}>Volver al diccionario</Link>
            </div>
        );
    }

    const currentUrl = `https://suconsultorfinanciero.online/diccionario/${item.id}`;

    return (
        <main className="dictionary-detail-page">
            <Helmet>
                <title>{item.term} | Diccionario Financiero</title>
                <meta name="description" content={item.definition} />
                <meta property="og:title" content={`${item.term} - Diccionario Financiero`} />
                <meta property="og:description" content={item.definition} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="https://suconsultorfinanciero.online/dictionary-preview.png" />
                <meta property="og:image:secure_url" content="https://suconsultorfinanciero.online/dictionary-preview.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={`${item.term} - Diccionario Financiero`} />
                <meta property="twitter:description" content={item.definition} />
                <meta property="twitter:image" content="https://suconsultorfinanciero.online/dictionary-preview.png" />
            </Helmet>

            <section className="section-padding container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Link to="/#diccionario" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--azul-oscuro)', textDecoration: 'none', fontWeight: 'bold' }}>
                        &larr; Volver al diccionario
                    </Link>

                    <div className="glass" style={{ padding: '3rem', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem 2rem', background: 'var(--mostaza)', color: 'var(--azul-oscuro)', fontWeight: 'bold', borderRadius: '0 0 0 20px' }}>
                            {item.category}
                        </div>

                        <div className="share-links-top" style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Aprende qué es ' + item.term + ': ' + currentUrl)}`, '_blank')} className="prop-share-btn prop-share-btn--ws" style={{ width: '30px', height: '30px' }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z" /></svg>
                            </button>
                            <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')} className="prop-share-btn prop-share-btn--fb" style={{ width: '30px', height: '30px' }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </button>
                            <button onClick={() => { navigator.clipboard.writeText(currentUrl); alert('¡Copiado!'); }} className="prop-share-btn prop-share-btn--copy" style={{ width: '30px', height: '30px' }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                            </button>
                        </div>

                        <h1 style={{ color: 'var(--azul-oscuro)', fontSize: '3rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                            {item.term}
                        </h1>

                        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                            {item.definition}
                        </p>

                        {item.value && (
                            <div style={{ background: 'rgba(var(--mostaza-rgb), 0.1)', padding: '1.5rem', borderRadius: '15px', borderLeft: '5px solid var(--mostaza)', marginBottom: '2rem' }}>
                                <h4 style={{ color: 'var(--azul-oscuro)', marginBottom: '0.5rem' }}>Dato clave:</h4>
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--azul-oscuro)' }}>{item.value}</p>
                            </div>
                        )}
                    </div>
                    
                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>¿Necesitas asesoría con este u otros temas?</h3>
                        <Link to="/#servicios" className="btn btn-primary">Ver todos nuestros servicios</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DictionaryDetail;
