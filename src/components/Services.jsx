import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesData = [
    {
        id: "libre-inversion",
        title: "Crédito de libre inversión o compra de cartera",
        description: "Con nuestra asesoría integral se puede enfocar en lo que quiera y el trámite lo realizamos nosotros. Puede utilizar los recursos del crédito para libre destinación o para mejorar su flujo de caja a través del producto compra de cartera. Tasas competitivas y plazos desde 36 meses hasta 72 meses sin codeudor.",
        icon: "💼",
        whatsappMessage: "Hola, me interesa el servicio de Crédito de libre inversión o compra de cartera."
    },
    {
        id: "inmuebles",
        title: "Crédito para inmuebles",
        description: "Le brindamos una asesoría integral, si nos informa sobre su proyecto le damos a conocer como quedaría su plan de pagos y lo que necesita para hacerlo realidad. Lo asesoramos para una financiación de su futuro hogar o vivienda de inversión con plazos desde 5 años hasta 20 años. También ofrecemos la asesoría para financiar locales, bodegas, oficinas o créditos de libre inversión con garantía hipotecaria.",
        icon: "🏠",
        whatsappMessage: "Hola, me interesa el servicio de Crédito para inmuebles."
    },
    {
        id: "vehiculo",
        title: "Crédito de vehículo, libranza y asesoría general",
        description: "Le brindamos una asesoría integral para que pueda hacer realidad el proyecto de adquirir el vehículo de sus sueños. Si nos cuenta cuánto necesita, le ayudamos a construir un plan de pagos personalizado, ajustado a su perfil. También ofrecemos compra de cartera en créditos de vehículo y la posibilidad de recibir su vehículo en prenda para obtener un crédito de libre inversión. Además, contamos con créditos atados a la colilla de pago de pensión.",
        icon: "🚗",
        whatsappMessage: "Hola, me interesa el servicio de Crédito de vehículo o libranza."
    },
    {
        id: "constructor",
        title: "Crédito constructor individual en condominios",
        description: "Recibe el acompañamiento experto para financiar la construcción de tu vivienda a medida. Te ayudamos a estructurar la mejor opción de crédito que te permita ir obteniendo desembolsos conforme al avance de obra de tu nuevo hogar dentro del condominio soñado.",
        icon: "🏗️",
        whatsappMessage: "Hola, me interesa el servicio de Crédito constructor individual."
    },
];

const Services = () => {
    const handleWhatsAppClick = (message) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/573167443613?text=${encodedMessage}`, '_blank');
    };

    const handleShare = (e, service) => {
        e.stopPropagation();
        const shareUrl = `${window.location.origin}/servicios/${service.id}`;
        const shareText = `¡Mira este servicio financiero! ${service.title}`;

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
