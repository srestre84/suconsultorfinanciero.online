import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dictionaryData } from '../data/dictionaryData';
import './Dictionary.css';

const Dictionary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Ajustado al tamaño de la card + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const filteredTerms = dictionaryData.filter((item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShare = async (e, item) => {
        e.stopPropagation();
        const shareUrl = `${window.location.origin}/diccionario/${item.id}`;
        const shareData = {
            title: `${item.term} | Diccionario Financiero`,
            text: `Aprende qué es ${item.term}: ${item.definition}`,
            url: shareUrl,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                alert("¡Definición copiada al portapapeles!");
            }
        } catch (err) {
            console.error('Error compartiendo:', err);
        }
    };

    return (
        <section className="section-padding" id="diccionario">
            <div className="container">
                <div className="dictionary-wrapper glass">
                    <h2 className="animate-fade-in">Diccionario Financiero</h2>
                    <p className="dict-subtitle animate-fade-in delay-1">Encuentra los términos más usados en el sistema financiero colombiano.</p>

                    <div className="search-container animate-fade-in delay-2">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Buscar término (ej. UVT, EA, Libranza)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div style={{ position: 'relative', width: '100%' }}>
                        {/* Flechas de navegación */}
                        <button 
                            onClick={() => scroll('left')}
                            style={{
                                position: 'absolute',
                                left: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 20,
                                background: 'white',
                                border: '1px solid var(--mostaza)',
                                color: 'var(--mostaza)',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                fontSize: '1.5rem',
                                transition: 'all 0.3s ease'
                            }}
                            className="nav-arrow"
                            aria-label="Anterior"
                        >
                            ‹
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            style={{
                                position: 'absolute',
                                right: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 20,
                                background: 'white',
                                border: '1px solid var(--mostaza)',
                                color: 'var(--mostaza)',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                fontSize: '1.5rem',
                                transition: 'all 0.3s ease'
                            }}
                            className="nav-arrow"
                            aria-label="Siguiente"
                        >
                            ›
                        </button>

                        <div className="terms-grid animate-fade-in delay-3" ref={scrollContainerRef}>
                            <style>
                                {`
                                    @media (max-width: 768px) {
                                        .nav-arrow { display: none; }
                                    }
                                `}
                            </style>
                            {filteredTerms.length > 0 ? (
                            filteredTerms.map((item) => (
                                <div key={item.id} className="term-card">
                                    <div className="term-header">
                                        <h3>{item.term}</h3>
                                        <span className="term-category">{item.category}</span>
                                    </div>
                                    <p className="term-def" style={{ fontSize: '0.9rem', minHeight: '80px', marginBottom: '0.5rem' }}>{item.definition}</p>
                                    {item.value && (
                                        <div className="term-val">
                                            <strong>Dato clave:</strong> {item.value}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                        <Link
                                            to={`/diccionario/${item.id}`}
                                            className="btn btn-outline"
                                            style={{ 
                                                padding: '0.5rem 1rem', 
                                                fontSize: '0.8rem', 
                                                flex: 1, 
                                                textAlign: 'center', 
                                                minHeight: '35px', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                borderRadius: '8px',
                                                border: '1px solid var(--mostaza)',
                                                color: 'var(--azul-oscuro)',
                                                fontWeight: '700',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Ver significado completo
                                        </Link>
                                        <button
                                            onClick={(e) => handleShare(e, item)}
                                            className="share-btn"
                                            title="Compartir definición"
                                            style={{ 
                                                background: 'rgba(225, 173, 1, 0.1)', 
                                                border: '1px solid rgba(225, 173, 1, 0.3)', 
                                                color: 'var(--mostaza)', 
                                                borderRadius: '8px', 
                                                width: '35px',
                                                height: '35px',
                                                cursor: 'pointer', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                transition: 'all 0.3s ease' 
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .6 1.6l-3.3 1.65a2.5 2.5 0 0 1 0 1.5l3.3 1.65a2.5 2.5 0 1 1-.8 1.45l-3.3-1.65a2.5 2.5 0 1 1 0-2.4l3.3-1.65A2.5 2.5 0 0 1 11 2.5zm-5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No se encontraron términos para "{searchTerm}".</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="scroll-hint" style={{ 
                    textAlign: 'center', 
                    fontSize: '0.85rem', 
                    color: 'var(--azul-oscuro)', 
                    marginTop: '0.5rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'rgba(225, 173, 1, 0.1)',
                    padding: '6px 15px',
                    borderRadius: '20px',
                    width: 'fit-content',
                    margin: '0.5rem auto'
                }}>
                    <span style={{ fontSize: '1.1rem' }}>↔</span> Desliza o usa las flechas para ver más términos
                </div>
            </div>
        </div>
    </section>
    );
};

export default Dictionary;
