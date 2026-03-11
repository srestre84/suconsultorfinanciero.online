import React, { useState } from 'react';
import { dictionaryData } from '../data/dictionaryData';
import './Dictionary.css';

const Dictionary = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTerms = dictionaryData.filter((item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShare = async (item) => {
        const shareData = {
            title: `${item.term} | Diccionario Financiero`,
            text: `Aprende qué es ${item.term}: ${item.definition}`,
            url: window.location.href, // Compartirá la URL actual (idealmente apuntaría a un anchor link del diccionario)
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback para navegadores que no soportan Web Share API
                await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                alert("¡Definición copiada al portapapeles! Puedes pegarla en tus redes.");
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

                    <div className="terms-grid animate-fade-in delay-3">
                        {filteredTerms.length > 0 ? (
                            filteredTerms.map((item) => (
                                <div key={item.id} className="term-card" style={{ position: 'relative' }}>
                                    <div className="term-header">
                                        <h3>{item.term}</h3>
                                        <span className="term-category">{item.category}</span>
                                    </div>
                                    <p className="term-def">{item.definition}</p>
                                    {item.value && <p className="term-val"><strong>Dato clave:</strong> {item.value}</p>}

                                    <button
                                        onClick={() => handleShare(item)}
                                        className="share-btn"
                                        title="Compartir en redes"
                                        style={{ marginTop: '1rem', background: 'none', border: '1px solid var(--mostaza)', color: 'var(--azul-oscuro)', borderRadius: '20px', padding: '0.4rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', fontSize: '0.9rem', fontWeight: 'bold' }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .6 1.6l-3.3 1.65a2.5 2.5 0 0 1 0 1.5l3.3 1.65a2.5 2.5 0 1 1-.8 1.45l-3.3-1.65a2.5 2.5 0 1 1 0-2.4l3.3-1.65A2.5 2.5 0 0 1 11 2.5zm-5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                        Compartir
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No se encontraron términos para "{searchTerm}".</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dictionary;
