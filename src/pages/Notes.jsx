import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { notesData } from '../data/notesData';
import './Notes.css';

function Notes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="notes-gallery-page">
            <Helmet>
                <title>Notas Motivacionales & Consejos Financieros | Su Consultor Financiero</title>
                <meta name="description" content="Colección de notas motivacionales y consejos financieros para inspirar, compartir en redes sociales y alcanzar tus metas financieras." />
            </Helmet>

            <div className="container" style={{ padding: '3rem 1rem 5rem 1rem' }}>
                <div className="notes-header-banner glass">
                    <span className="notes-top-badge">NOTAS MOTIVACIONALES & RECURSOS</span>
                    <h1 className="notes-page-title">Notas Motivacionales & Consejos Financieros</h1>
                    <p className="notes-page-desc">
                        Colección de notas motivacionales, tarjetas y frases clave diseñadas para inspirar tu crecimiento y compartir en redes sociales. 
                        Cada nota incluye una reflexión explicativa y guía para alcanzar la libertad financiera.
                    </p>
                </div>

                <div className="notes-grid">
                    {notesData.map(note => (
                        <div key={note.id} className="note-card-item glass">
                            <div className="note-card-img-wrapper">
                                <img src={note.imageUrl} alt={note.title} className="note-card-img" />
                                <span className="note-card-tag">{note.subtitle}</span>
                            </div>

                            <div className="note-card-body">
                                <h3 className="note-card-title">{note.title}</h3>
                                <p className="note-card-quote">"{note.quote}"</p>
                                
                                <div className="note-card-actions">
                                    <Link to={`/notas/${note.slug}`} className="btn-view-note">
                                        Ver Nota & Compartir →
                                    </Link>
                                    <a 
                                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`💡 *${note.title}*\n\n"${note.quote}"\n\nVer nota completa: https://suconsultorfinanciero.online/notas/${note.slug}`)}`}
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn-ws-quick"
                                        title="Compartir directo a WhatsApp"
                                    >
                                        📱
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes;
