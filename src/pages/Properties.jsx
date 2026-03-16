import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import './Properties.css';

function Properties() {
    const disponibles = properties.filter(p => p.estado === 'Disponible');
    const vendidos = properties.filter(p => p.estado !== 'Disponible');

    return (
        <main className="properties-page">
            <Helmet>
                <title>Inmuebles en Venta | Su Consultor Financiero</title>
                <meta
                    name="description"
                    content="Encuentra apartamentos y lotes en venta con asesoría financiera incluida. Itagüí, Medellín y Antioquia."
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://suconsultorfinanciero.online/#/inmuebles" />
                <meta property="og:title" content="Inmuebles en Venta | Su Consultor Financiero" />
                <meta property="og:description" content="Encuentra apartamentos y lotes en venta con asesoría financiera incluida. Itagüí, Medellín y Antioquia." />
                <meta property="og:image" content="https://suconsultorfinanciero.online/apt-la-inmaculada.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://suconsultorfinanciero.online/#/inmuebles" />
                <meta property="twitter:title" content="Inmuebles en Venta | Su Consultor Financiero" />
                <meta property="twitter:description" content="Encuentra apartamentos y lotes en venta con asesoría financiera incluida. Itagüí, Medellín y Antioquia." />
                <meta property="twitter:image" content="https://suconsultorfinanciero.online/apt-la-inmaculada.png" />
            </Helmet>

            {/* Hero */}
            <section className="prop-hero section-padding">
                <div className="container prop-hero-inner">
                    <span className="mission-badge">Inmuebles en Venta</span>
                    <h2 className="prop-hero-title">
                        Encuentra tu próxima <span className="mission-highlight">inversión</span>
                    </h2>
                    <p className="prop-hero-subtitle">
                        Propiedades seleccionadas directamente — sin intermediarios innecesarios.
                        Te acompañamos con asesoría financiera para que encuentres el crédito ideal.
                    </p>
                </div>
            </section>

            {/* Listado disponibles */}
            <section className="section-padding container">
                {disponibles.length > 0 ? (
                    <>
                        <h3 className="prop-section-label">🟢 Disponibles ({disponibles.length})</h3>
                        <div className="prop-grid">
                            {disponibles.map(prop => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="prop-empty glass">
                        <span>🔔</span>
                        <p>Pronto tendremos nuevas propiedades disponibles. ¡Vuelve pronto!</p>
                    </div>
                )}

                {/* Vendidos */}
                {vendidos.length > 0 && (
                    <div style={{ marginTop: '4rem' }}>
                        <h3 className="prop-section-label" style={{ opacity: 0.6 }}>
                            ✅ Vendidos / No disponibles
                        </h3>
                        <div className="prop-grid prop-grid--sold">
                            {vendidos.map(prop => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* Banner asesoría */}
            <section className="section-padding container">
                <div className="prop-advisory-banner glass animate-fade-in">
                    <div className="prop-advisory-icon">🏦</div>
                    <div>
                        <h3>¿Necesitas financiación?</h3>
                        <p>
                            Te ayudamos a estructurar el crédito hipotecario con las mejores condiciones del mercado —
                            tasa, plazo y cuota ajustada a tu perfil.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/573209999999?text=Hola%2C%20me%20interesa%20saber%20sobre%20financiaci%C3%B3n%20para%20inmuebles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prop-advisory-btn"
                    >
                        Hablar con asesor
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Properties;
