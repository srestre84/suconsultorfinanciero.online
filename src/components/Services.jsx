import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
    const handleWhatsAppClick = (message) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/573167443613?text=${encodedMessage}`, '_blank');
    };

    const handleShare = (e, service) => {
        e.stopPropagation();
        const shareUrl = `${window.location.origin}/servicios/${service.id}`;
        const shareText = service.shareMessage;

        if (navigator.share) {
            navigator.share({
                title: service.title,
                text: shareText,
                url: shareUrl,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
            alert('¡Enlace copiado al portapapeles!');
        }
    };

    return (
        <section className="section-padding" id="servicios">
            <div className="container">
                <h2 className="animate-fade-in">Nuestros Servicios</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            className={`service-card glass animate-fade-in delay-${index + 1}`}
                            key={index}
                            id={service.id}
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            {/* Parte superior clicable para WhatsApp */}
                            <div 
                                onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                                style={{ 
                                    cursor: 'pointer', 
                                    width: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center',
                                    zIndex: 2,
                                    position: 'relative'
                                }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                            
                            <div style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '1rem', 
                                marginTop: 'auto',
                                position: 'relative',
                                zIndex: 10,
                                paddingTop: '1.5rem',
                                borderTop: '1px solid rgba(0, 0, 0, 0.05)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link 
                                        to={`/servicios/${service.id}`}
                                        className="service-card-cta"
                                        style={{ 
                                            color: 'var(--mostaza)', 
                                            fontWeight: '700', 
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.1rem' }}>🔍</span> Ver más detalles
                                    </Link>
                                    <button 
                                        onClick={(e) => handleShare(e, service)}
                                        title="Compartir servicio"
                                        className="share-button"
                                        style={{ 
                                            background: 'rgba(225, 173, 1, 0.1)', 
                                            border: '1px solid rgba(225, 173, 1, 0.3)', 
                                            color: 'var(--mostaza)', 
                                            borderRadius: '12px', 
                                            padding: '8px',
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                                    </button>
                                </div>
                                <span style={{ 
                                    fontSize: '0.75rem', 
                                    color: 'var(--azul-oscuro)', 
                                    opacity: 0.8,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    backgroundColor: '#25D36620',
                                    color: '#128C7E',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    alignSelf: 'center'
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginBottom: '-1px' }}>
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Toca la tarjeta para WhatsApp
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Card especial: enlace a inmuebles en venta */}
                    <Link
                        to="/inmuebles"
                        className="service-card service-card--link glass animate-fade-in delay-5"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="service-icon">🏢</div>
                        <h3>Apartamentos y lotes en venta</h3>
                        <p>Encuentra propiedades seleccionadas con asesoría financiera incluida. ¡Tenemos inmuebles disponibles ahora!</p>
                        
                        <div style={{ 
                            marginTop: 'auto', 
                            paddingTop: '1.5rem', 
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <span className="service-card-cta" style={{ 
                                margin: 0, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                gap: '0.5rem',
                                color: 'var(--mostaza)',
                                fontWeight: '800'
                            }}>
                                Ver inmuebles disponibles <span style={{ fontSize: '1.2rem' }}>→</span>
                            </span>
                            
                            <span style={{ 
                                fontSize: '0.75rem', 
                                color: '#128C7E',
                                fontWeight: '600',
                                backgroundColor: '#25D36615',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                alignSelf: 'center'
                            }}>
                                ✨ Oportunidades exclusivas
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
