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
                text: service.description,
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
                            onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                            style={{ cursor: 'pointer', position: 'relative' }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link 
                                        to={`/servicios/${service.id}`}
                                        className="service-card-cta"
                                        style={{ color: 'var(--mostaza)', fontWeight: 'bold', textDecoration: 'none' }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        🔍 Ver más info
                                    </Link>
                                    <button 
                                        onClick={(e) => handleShare(e, service)}
                                        title="Compartir servicio"
                                        style={{ 
                                            background: 'none', 
                                            border: '1px solid var(--mostaza)', 
                                            color: 'var(--azul-oscuro)', 
                                            borderRadius: '50%', 
                                            width: '35px', 
                                            height: '35px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                                    </button>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--azul-claro)', fontStyle: 'italic', textAlign: 'center' }}>
                                    Clic en la tarjeta para WhatsApp
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Card especial: enlace a inmuebles en venta */}
                    <Link
                        to="/inmuebles"
                        className="service-card service-card--link glass animate-fade-in delay-5"
                    >
                        <div className="service-icon">🏢</div>
                        <h3>Apartamentos y lotes en venta</h3>
                        <p>Encuentra propiedades seleccionadas con asesoría financiera incluida. ¡Tenemos inmuebles disponibles ahora!</p>
                        <span className="service-card-cta">Ver inmuebles →</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
