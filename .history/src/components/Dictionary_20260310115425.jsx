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
                                <div key={item.id} className="term-card">
                                    <div className="term-header">
                                        <h3>{item.term}</h3>
                                        <span className="term-category">{item.category}</span>
                                    </div>
                                    <p className="term-def">{item.definition}</p>
                                    {item.value && <p className="term-val"><strong>Dato clave:</strong> {item.value}</p>}
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
