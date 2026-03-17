import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { properties } from '../data/properties';
import './Properties.css';

function PropertyDetail() {
    const { id } = useParams();
    const property = properties.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!property) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Inmueble no encontrado</h2>
                <p style={{ margin: '1rem 0 2rem' }}>Parece que la propiedad que buscas no existe o ha sido retirada.</p>
                <Link to="/inmuebles" className="btn btn-primary">Ver Inmuebles</Link>
            </div>
        );
    }

    const currentUrl = `https://suconsultorfinanciero.online/inmuebles/${property.id}`;
    const whatsappUrl = `https://wa.me/${property.contacto.whatsapp}?text=${encodeURIComponent(property.contacto.texto)}`;

    return (
        <main className="property-detail-page">
            <Helmet>
                <title>{property.titulo} | Su Consultor Financiero</title>
                <meta name="description" content={property.descripcion} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={property.titulo} />
                <meta property="og:description" content={property.descripcion} />
                <meta property="og:image" content={`https://suconsultorfinanciero.online${property.fotos[0]}`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta property="twitter:title" content={property.titulo} />
                <meta property="twitter:description" content={property.descripcion} />
                <meta property="twitter:image" content={`https://suconsultorfinanciero.online${property.fotos[0]}`} />
            </Helmet>

            <section className="section-padding container">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <Link to="/inmuebles" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--azul-oscuro)', textDecoration: 'none', fontWeight: 'bold' }}>
                        &larr; Volver al listado
                    </Link>

                    <div className="prop-detail-header" style={{ marginBottom: '2rem' }}>
                        <span className={`prop-badge prop-badge--${property.estado === 'Disponible' ? 'available' : 'sold'}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>
                            {property.estado}
                        </span>
                        <h1 style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>
                            {property.titulo}
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
                            📍 {property.ubicacion.referencia} — {property.ubicacion.ciudad}, {property.ubicacion.departamento}
                        </p>
                        <h2 style={{ color: 'var(--mostaza)', fontSize: '2rem', fontWeight: 'bold' }}>
                            {property.precioFormateado}
                        </h2>
                    </div>

                    {/* Galería Principal */}
                    <div className="prop-detail-gallery" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '3rem' }}>
                        {property.fotos.map((foto, index) => (
                            <img
                                key={index}
                                src={foto}
                                alt={`${property.titulo} - vista ${index + 1}`}
                                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                            />
                        ))}
                    </div>

                    <div className="prop-detail-content" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
                        <div className="prop-info-main">
                            <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1.5rem', borderBottom: '2px solid var(--mostaza)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                Descripción
                            </h3>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                                {property.descripcion}
                            </p>

                            <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1.5rem', borderBottom: '2px solid var(--mostaza)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                Características Principales
                            </h3>
                            <div className="prop-detail-specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div className="spec-item glass" style={{ padding: '1rem', textAlign: 'center', borderRadius: '10px' }}>
                                    <span style={{ fontSize: '1.5rem', display: 'block' }}>📐</span>
                                    <strong>Área</strong>
                                    <p>{property.caracteristicas.area} m²</p>
                                </div>
                                <div className="spec-item glass" style={{ padding: '1rem', textAlign: 'center', borderRadius: '10px' }}>
                                    <span style={{ fontSize: '1.5rem', display: 'block' }}>🛏️</span>
                                    <strong>Habitaciones</strong>
                                    <p>{property.caracteristicas.habitaciones || 'N/A'}</p>
                                </div>
                                <div className="spec-item glass" style={{ padding: '1rem', textAlign: 'center', borderRadius: '10px' }}>
                                    <span style={{ fontSize: '1.5rem', display: 'block' }}>🚿</span>
                                    <strong>Baños</strong>
                                    <p>{property.caracteristicas.banos || 'N/A'}</p>
                                </div>
                                <div className="spec-item glass" style={{ padding: '1rem', textAlign: 'center', borderRadius: '10px' }}>
                                    <span style={{ fontSize: '1.5rem', display: 'block' }}>⭐</span>
                                    <strong>Estrato</strong>
                                    <p>{property.caracteristicas.estrato}</p>
                                </div>
                            </div>

                            {property.amenidadesUnidad && (
                                <>
                                    <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1.5rem', borderBottom: '2px solid var(--mostaza)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                        Amenidades de la Unidad
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                                        {property.amenidadesUnidad.map((amenidad, i) => (
                                            <span key={i} className="prop-tag" style={{ background: 'var(--azul-claro)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold' }}>
                                                {amenidad}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <aside className="prop-contact-sidebar">
                            <div className="glass sticky" style={{ padding: '2rem', borderRadius: '20px', position: 'sticky', top: '100px' }}>
                                <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1rem' }}>¿Te interesa este inmueble?</h3>
                                <p style={{ marginBottom: '2rem', fontSize: '1rem', color: '#666' }}>
                                    Contáctanos para agendar una visita o recibir asesoría financiera personalizada.
                                </p>
                                
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    💬 Contactar por WhatsApp
                                </a>

                                <div className="prop-share" style={{ borderTop: '1px solid #ddd', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                                    <p style={{ fontWeight: 'bold', marginBottom: '1rem', color: 'var(--azul-oscuro)' }}>Compartir esta propiedad:</p>
                                    <div className="prop-share-btns" style={{ display: 'flex', gap: '1rem' }}>
                                        <button 
                                            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('¡Mira esta oportunidad! ' + currentUrl)}`, '_blank')}
                                            className="prop-share-btn prop-share-btn--ws"
                                            style={{ background: '#25D366', color: 'white', width: '40px', height: '40px' }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                                        </button>
                                        <button 
                                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')}
                                            className="prop-share-btn prop-share-btn--fb"
                                            style={{ background: '#1877F2', color: 'white', width: '40px', height: '40px' }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                        </button>
                                        <button 
                                            onClick={() => {
                                                navigator.clipboard.writeText(currentUrl);
                                                alert('¡Enlace copiado!');
                                            }}
                                            className="prop-share-btn prop-share-btn--copy"
                                            style={{ background: 'var(--mostaza)', color: 'var(--azul-oscuro)', width: '40px', height: '40px' }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PropertyDetail;
