import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Servicio no encontrado</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Volver al inicio</Link>
            </div>
        );
    }

    const currentUrl = `https://suconsultorfinanciero.online/servicios/${service.id}`;
    const whatsappUrl = `https://wa.me/573167443613?text=${encodeURIComponent(service.whatsappMessage)}`;

    return (
        <main className="service-detail-page">
            <Helmet>
                <title>{service.title} | Su Consultor Financiero</title>
                <meta name="description" content={service.description} />
                <meta property="og:title" content={service.title} />
                <meta property="og:description" content={service.description} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="https://suconsultorfinanciero.online/services-preview.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={service.title} />
                <meta property="twitter:description" content={service.description} />
                <meta property="twitter:image" content="https://suconsultorfinanciero.online/services-preview.png" />
            </Helmet>

            <section className="section-padding container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <Link to="/#servicios" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--azul-oscuro)', textDecoration: 'none', fontWeight: 'bold' }}>
                        &larr; Volver a servicios
                    </Link>

                    <div className="service-detail-icon" style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
                        {service.icon}
                    </div>

                    <h1 style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '2rem' }}>
                        {service.title}
                    </h1>

                    <div className="glass" style={{ padding: '3rem', borderRadius: '30px', textAlign: 'left', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#444' }}>
                            {service.description}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                            💬 Consultar por WhatsApp
                        </a>

                        <div className="share-section" style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '2rem', width: '100%' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Compartir este servicio:</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(service.title + ' ' + currentUrl)}`, '_blank')} className="prop-share-btn prop-share-btn--ws">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                                </button>
                                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')} className="prop-share-btn prop-share-btn--fb">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </button>
                                <button onClick={() => { navigator.clipboard.writeText(currentUrl); alert('¡Copiado!'); }} className="prop-share-btn prop-share-btn--copy">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ServiceDetail;
