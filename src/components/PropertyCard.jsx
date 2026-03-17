import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const formatPrice = (price) =>
    price ? '$' + price.toLocaleString('es-CO') : 'No disponible';

const PropertyCard = ({ property }) => {
    const {
        titulo,
        estado,
        ubicacion,
        caracteristicas,
        etiquetas,
        fotos,
        contacto,
        precioFormateado,
    } = property;

    const [activePhoto, setActivePhoto] = useState(0);
    const hasPhotos = fotos && fotos.length > 0;
    const imagenSrc = hasPhotos ? fotos[activePhoto] : '/apt-la-inmaculada.png';

    const whatsappUrl = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.texto)}`;

    const shareUrl = `${window.location.origin}/inmuebles/${property.id}`;
    const shareText = `¡Mira esta propiedad! ${titulo} - ${precioFormateado}`;

    const handleShare = (platform) => {
        let url = '';
        switch (platform) {
            case 'whatsapp':
                url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
            case 'copy':
                navigator.clipboard.writeText(shareUrl);
                alert('¡Enlace copiado al portapapeles!');
                return;
            default:
                break;
        }
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <article className="prop-card glass" id={property.id}>
            {/* Galería de imágenes */}
            <div className="prop-card-gallery">
                {/* Foto principal */}
                <div className="prop-card-img-wrapper">
                    <img
                        key={imagenSrc}
                        src={imagenSrc}
                        alt={`${titulo} - foto ${activePhoto + 1}`}
                        className="prop-card-img"
                    />
                    <span className={`prop-badge prop-badge--${estado === 'Disponible' ? 'available' : 'sold'}`}>
                        {estado}
                    </span>
                    <span className="prop-badge prop-badge--tipo">{property.tipo}</span>

                    {/* Flechas de navegación */}
                    {hasPhotos && fotos.length > 1 && (
                        <>
                            <button className="prop-arrow prop-arrow--left" onClick={() => setActivePhoto(i => (i - 1 + fotos.length) % fotos.length)}>‹</button>
                            <button className="prop-arrow prop-arrow--right" onClick={() => setActivePhoto(i => (i + 1) % fotos.length)}>›</button>
                            <span className="prop-photo-counter">{activePhoto + 1} / {fotos.length}</span>
                        </>
                    )}
                </div>

                {/* Miniaturas */}
                {hasPhotos && fotos.length > 1 && (
                    <div className="prop-thumbnails">
                        {fotos.map((foto, i) => (
                            <button
                                key={i}
                                className={`prop-thumb ${i === activePhoto ? 'prop-thumb--active' : ''}`}
                                onClick={() => setActivePhoto(i)}
                            >
                                <img src={foto} alt={`Vista ${i + 1}`} />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="prop-card-body">
                <h3 className="prop-card-title">{titulo}</h3>
                <p className="prop-card-location">
                    📍 {ubicacion.referencia} — {ubicacion.ciudad}, {ubicacion.departamento}
                </p>
                <p className="prop-card-address">{ubicacion.edificio} · {ubicacion.direccion}</p>

                {/* Precio */}
                <p className="prop-card-price">{precioFormateado}</p>

                {/* Características */}
                <div className="prop-card-specs">
                    <div className="prop-spec">
                        <span className="prop-spec-icon">📐</span>
                        <span>{caracteristicas.area} m²</span>
                    </div>
                    {caracteristicas.habitaciones !== undefined && (
                        <div className="prop-spec">
                            <span className="prop-spec-icon">🛏️</span>
                            <span>{caracteristicas.habitaciones} hab.</span>
                        </div>
                    )}
                    {caracteristicas.banos !== undefined && (
                        <div className="prop-spec">
                            <span className="prop-spec-icon">🚿</span>
                            <span>{caracteristicas.banos} baños</span>
                        </div>
                    )}
                    <div className="prop-spec">
                        <span className="prop-spec-icon">⭐</span>
                        <span>Estrato {caracteristicas.estrato}</span>
                    </div>
                    {caracteristicas.balcon && (
                        <div className="prop-spec">
                            <span className="prop-spec-icon">🌤️</span>
                            <span>Balcón</span>
                        </div>
                    )}
                    {!caracteristicas.parqueadero && (
                        <div className="prop-spec prop-spec--no">
                            <span className="prop-spec-icon">🚗</span>
                            <span>Sin parqueadero</span>
                        </div>
                    )}
                </div>

                {/* Etiquetas */}
                <div className="prop-tags">
                    {etiquetas.map((tag, i) => (
                        <span key={i} className="prop-tag">{tag}</span>
                    ))}
                </div>

                {/* Info adicional */}
                <div className="prop-card-extra">
                    {caracteristicas.predialAnual && (
                        <span>📋 Predial {caracteristicas.anoPredial}: {formatPrice(caracteristicas.predialAnual)}/año</span>
                    )}
                    {caracteristicas.administracion && (
                        <span>  |  🏘️ Admón: {formatPrice(caracteristicas.administracion)} /mes</span>
                    )}
                </div>

                {/* Compartir */}
                <div className="prop-share">
                    <span className="prop-share-label">Compartir:</span>
                    <div className="prop-share-btns">
                        <button onClick={() => handleShare('whatsapp')} title="Compartir en WhatsApp" className="prop-share-btn prop-share-btn--ws">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                        </button>
                        <button onClick={() => handleShare('facebook')} title="Compartir en Facebook" className="prop-share-btn prop-share-btn--fb">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </button>
                        <button onClick={() => handleShare('copy')} title="Copiar enlace" className="prop-share-btn prop-share-btn--copy">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        </button>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link
                        to={`/inmuebles/${property.id}`}
                        className="btn btn-outline"
                        style={{ width: '100%', textAlign: 'center', padding: '0.8rem' }}
                    >
                        🔍 Ver detalles completos
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prop-card-btn"
                        style={{ margin: 0 }}
                    >
                        💬 Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </article>
    );
};

export default PropertyCard;
