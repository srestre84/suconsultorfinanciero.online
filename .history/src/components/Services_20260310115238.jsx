import React from 'react';
import './Services.css';

const servicesData = [
    {
        title: "Crédito de libre inversión o compra de cartera",
        description: "Con nuestra asesoría integral se puede enfocar en lo que quiera y el trámite lo realizamos nosotros. Puede utilizar los recursos del crédito para libre destinación o para mejorar su flujo de caja a través del producto compra de cartera. Tasas competitivas y plazos desde 36 meses hasta 72 meses sin codeudor.",
        icon: "💼"
    },
    {
        title: "Crédito para inmuebles",
        description: "Le brindamos una asesoría integral, si nos informa sobre su proyecto le damos a conocer como quedaría su plan de pagos y lo que necesita para hacerlo realidad. Lo asesoramos para una financiación de su futuro hogar o vivienda de inversión con plazos desde 5 años hasta 20 años. También ofrecemos la asesoría para financiar locales, bodegas, oficinas o créditos de libre inversión con garantía hipotecaria.",
        icon: "🏠"
    },
    {
        title: "Crédito de vehículo, libranza y asesoría general",
        description: "Le brindamos una asesoría integral para que pueda hacer realidad el proyecto de adquirir el vehículo de sus sueños. Si nos cuenta cuánto necesita, le ayudamos a construir un plan de pagos personalizado, ajustado a su perfil. También ofrecemos compra de cartera en créditos de vehículo y la posibilidad de recibir su vehículo en prenda para obtener un crédito de libre inversión. Además, contamos con créditos atados a la colilla de pago de pensión.",
        icon: "🚗"
    }
];

const Services = () => {
    return (
        <section className="section-padding" id="servicios">
            <div className="container">
                <h2 className="animate-fade-in">Nuestros Servicios</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            className={`service-card glass animate-fade-in delay-${index + 1}`}
                            key={index}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
