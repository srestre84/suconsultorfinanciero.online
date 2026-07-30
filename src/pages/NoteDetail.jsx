import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { notesData } from '../data/notesData';
import './NoteDetail.css';

function NoteDetail() {
    const { slug } = useParams();
    const [copied, setCopied] = useState(false);

    // Buscar nota por slug o por ID numérico
    const note = notesData.find(n => n.slug === slug || n.id === parseInt(slug));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!note) {
        return (
            <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Nota no encontrada</h2>
                <p>El consejo financiero que buscas no existe o ha sido movido.</p>
                <Link to="/notas" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                    Ver todas las Notas Financieras
                </Link>
            </div>
        );
    }

    const currentUrl = `https://suconsultorfinanciero.online/notas/${note.slug}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`💡 *${note.title}*\n\n"${note.quote}"\n\nLee el consejo completo y consulta tus opciones aquí: ${currentUrl}`)}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="note-detail-page">
            <Helmet>
                <title>{`${note.title} | Su Consultor Financiero`}</title>
                <meta name="description" content={`"${note.quote}" - Asesoría financiera profesional en Colombia con Sebastián Restrepo R.`} />
                
                {/* Open Graph Meta Tags para Previsualización en WhatsApp y Redes Sociales */}
                <meta property="og:title" content={note.title} />
                <meta property="og:description" content={`"${note.quote}"`} />
                <meta property="og:image" content={`https://suconsultorfinanciero.online${note.imageUrl}`} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="article" />
                
                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={note.title} />
                <meta name="twitter:description" content={`"${note.quote}"`} />
                <meta name="twitter:image" content={`https://suconsultorfinanciero.online${note.imageUrl}`} />
            </Helmet>

            <div className="container" style={{ maxWidth: '950px', padding: '2rem 1rem 5rem 1rem' }}>
                {/* NAVEGACIÓN DE RETORNO */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <Link to="/notas" className="note-back-link">
                        ← Volver a todas las Notas
                    </Link>
                </div>

                {/* TARJETA CABECERA DE LA NOTA */}
                <div className="note-hero-card glass">
                    <div className="note-badge">CONSEJO FINANCIERO</div>
                    <span className="note-subtitle">{note.subtitle}</span>
                    <h1 className="note-main-title">{note.title}</h1>
                    
                    {/* FRASE DESTACADA */}
                    <div className="note-quote-box">
                        <span className="note-quote-icon">“</span>
                        <p className="note-quote-text">{note.quote}</p>
                        <span className="note-author">— {note.author}</span>
                    </div>

                    {/* IMAGEN DE ESTADO VERTICAL TIPO POSTER */}
                    <div className="note-image-container">
                        <img 
                            src={note.imageUrl} 
                            alt={note.title} 
                            className="note-poster-image" 
                        />
                    </div>

                    {/* BOTONES DE COMPARTIR EN REDES Y WHATSAPP */}
                    <div className="note-share-bar">
                        <a 
                            href={whatsappShareUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-share-whatsapp"
                        >
                            📱 Compartir en mi Estado de WhatsApp
                        </a>
                        <button onClick={handleCopyLink} className="btn-share-copy">
                            {copied ? '¡Enlace Copiado! 📋' : 'Copiar Enlace Directo 🔗'}
                        </button>
                    </div>
                </div>

                {/* CONTENIDO EXPLICATIVO DE LA NOTA */}
                <div className="note-content-body glass">
                    <h2 className="section-subtitle">Explicación del Asesor</h2>
                    <div 
                        className="note-html-text"
                        dangerouslySetInnerHTML={{ __html: note.content }} 
                    />
                </div>

                {/* SECCIÓN 1: MIS SERVICIOS FINANCIEROS */}
                <div className="note-section-services glass">
                    <div className="section-header-badge">SERVICIOS PROFESIONALES</div>
                    <h2 className="section-title">¿Cómo te puedo ayudar a aplicar este consejo?</h2>
                    <p className="section-intro">
                        Como tu consultor financiero multibanca, gestiono ante las mejores entidades financieras de Colombia la solución que necesitas:
                    </p>

                    <div className="services-grid-notes">
                        <div className="service-card-mini">
                            <div className="service-icon">💳</div>
                            <h3>Compra de Cartera</h3>
                            <p>Unifica tus tarjetas y créditos costosos en una sola cuota con tasas de interés reducidas.</p>
                            <Link to="/servicios/libre-inversion" className="service-link-btn">Saber más →</Link>
                        </div>

                        <div className="service-card-mini">
                            <div className="service-icon">🏡</div>
                            <h3>Crédito Hipotecario & Leasing</h3>
                            <p>Financiación para compra de vivienda nueva, usada o sobre planos con las mejores condiciones.</p>
                            <Link to="/servicios/inmuebles" className="service-link-btn">Saber más →</Link>
                        </div>

                        <div className="service-card-mini">
                            <div className="service-icon">💵</div>
                            <h3>Libre Inversión / Libranza</h3>
                            <p>Liquidez inmediata para proyectos personales o inversión sin tramitología compleja.</p>
                            <Link to="/servicios/libre-inversion" className="service-link-btn">Saber más →</Link>
                        </div>

                        <div className="service-card-mini">
                            <div className="service-icon">🏗️</div>
                            <h3>Crédito Constructor</h3>
                            <p>Financia la construcción de tu casa ideal en lote propio o parcelación.</p>
                            <Link to="/servicios/constructor" className="service-link-btn">Saber más →</Link>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN 2: MIS VALORES AGREGADOS */}
                <div className="note-section-values glass">
                    <div className="section-header-badge">¿POR QUÉ ELEGIRME?</div>
                    <h2 className="section-title">Mis Valores Agregados</h2>

                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-check">✨</div>
                            <div>
                                <h4>Asesoría 100% Gratuita</h4>
                                <p>No cobramos honorarios ni estudios crediticios. Mi servicio de consultoría es sin costo para ti.</p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-check">🏛️</div>
                            <div>
                                <h4>Canales Bancarios Preferenciales</h4>
                                <p>Manejo acceso directo con las áreas de riesgos de más de 8 bancos aliados en Colombia.</p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-check">⚡</div>
                            <div>
                                <h4>Agilidad y Cero Filas</h4>
                                <p>Gestiono la recolección de documentos y el trámite de punta a punta sin que vayas a oficinas.</p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-check">📊</div>
                            <div>
                                <h4>Análisis de Ahorro Real</h4>
                                <p>Evaluamos el costo total anual (tasa + seguros) para garantizarte un ahorro real efectivo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN 3: PERFIL DEL ASESOR Y CONTACTO DIRECTO */}
                <div className="note-profile-card">
                    <div className="profile-inner">
                        <img 
                            src="/sebastian-restrepo.jpg" 
                            alt="Sebastián Restrepo R." 
                            className="profile-avatar"
                        />
                        <div className="profile-info">
                            <h3 className="profile-name">Sebastián Restrepo R.</h3>
                            <p className="profile-role">Ejecutivo Comercial / Consultor Financiero Multibanca</p>
                            <p className="profile-contact-text">
                                Celular / WhatsApp: <strong>+57 316 744 3613</strong>
                            </p>
                            <span className="profile-disclaimer">
                                *La tasa final está sujeta a políticas de la entidad financiera y perfil crediticio.
                            </span>
                        </div>
                    </div>

                    <div className="profile-cta-action">
                        <a 
                            href={`https://api.whatsapp.com/send?phone=573167443613&text=${encodeURIComponent(`¡Hola Sebastián! Vi tu consejo financiero "${note.title}" y me gustaría recibir asesoría gratuita para mi caso.`)}`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-cta-whatsapp"
                        >
                            💬 Agendar Asesoría Gratuita por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetail;
