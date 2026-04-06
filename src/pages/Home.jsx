import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import InstagramSection from '../components/InstagramSection';
import Dictionary from '../components/Dictionary';
import Newsletter from '../components/Newsletter';
import Consulting from '../components/Consulting';
import Testimonials from '../components/Testimonials';
import RateCalculator from '../components/RateCalculator';

import Mission from '../components/Mission';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import './PropertyPreview.css';


import { useParams } from 'react-router-dom';

function Home() {
    const { id: routeId } = useParams();

    React.useEffect(() => {
        if (routeId) {
            const element = document.getElementById(routeId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        }
    }, [routeId]);

    return (
        <main>
            <Helmet>
                <title>Su Consultor Financiero | Inicio</title>
                <meta name="description" content="Toma el control absoluto de tus finanzas. Evaluación de perfil, optimización de flujo de caja y reducción de deudas." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://suconsultorfinanciero.online/" />
                <meta property="og:title" content="Su Consultor Financiero | Estrategia y Control" />
                <meta property="og:description" content="Descubre cómo optimizar tu flujo de caja, estructurar tus deudas y tomar el control matemático de tus finanzas con nuestras consultorías." />
                <meta property="og:image" content="https://suconsultorfinanciero.online/share-preview.png" />
                <meta property="og:image:secure_url" content="https://suconsultorfinanciero.online/share-preview.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Su Consultor Financiero Logo" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://suconsultorfinanciero.online/" />
                <meta property="twitter:title" content="Su Consultor Financiero | Estrategia y Control" />
                <meta property="twitter:description" content="Descubre cómo optimizar tu flujo de caja, estructurar tus deudas y tomar el control matemático de tus finanzas con nuestras consultorías." />
                <meta property="twitter:image" content="https://suconsultorfinanciero.online/share-preview.png" />
            </Helmet>

            <Hero />

            <Mission />
            <Services />
            <InstagramSection />

            {/* Nueva Sección de Vista Previa de Inmuebles */}
            <section className="section-padding container prop-preview-section" id="inmuebles">
                <div className="prop-preview-header">
                    <span className="prop-preview-badge">Oportunidades</span>
                    <h2 style={{ color: 'var(--azul-oscuro)' }}>Inmuebles Destacados 🏠</h2>
                    <p style={{ maxWidth: '700px', margin: '1rem auto', fontSize: '1.1rem' }}>
                        Propiedades seleccionadas para tu próxima inversión con acompañamiento financiero garantizado.
                    </p>
                </div>

                <div className="prop-preview-grid">
                    {properties
                        .filter(p => p.estado === 'Disponible')
                        .slice(0, 3)
                        .map(prop => (
                            <PropertyCard key={prop.id} property={prop} />
                        ))}
                </div>

                <div className="prop-preview-footer">
                    <Link to="/inmuebles" className="btn-view-all">
                        Ver todos los inmuebles
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                </div>
            </section>

            <Dictionary />

            {/* Sección de Calculadora de Tasas en línea */}
            <section className="section-padding container" id="calculadora">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ color: 'var(--azul-oscuro)' }}>Convierte tus Tasas Fácilmente 🧮</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Ya no dependas del chatbot. Usa directamente nuestra calculadora interactiva para convertir cualquier tasa de crédito del mercado.
                    </p>
                </div>
                <RateCalculator />
            </section>

            {/* Sección de Testimonios (Social Proof) */}
            <Testimonials />

            {/* Nueva Sección de Consultorías */}
            <Consulting />

            {/* Sección de Simulaciones Original */}
            <section className="section-padding container">
                <div className="glass animate-fade-in delay-2" style={{ padding: '3rem 2rem', borderRadius: '20px' }}>
                    <h2>Simulaciones y Asesoría</h2>
                    <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
                        <p>💡 Podemos realizar una simulación sin compromiso, para evaluar si alguna de las opciones disponibles te puede beneficiar.</p>
                        <p>🧾 Si lo deseas, puedo enviarte mis datos y números de contacto para que verifiques mi vínculo con las entidades con las que trabajo.</p>
                        <p>🔒 No utilizo bases de datos externas ni contactos no autorizados. Mi ofrecimiento se basa en referencias construidas a lo largo de mi labor comercial. Solo brindo información si hay interés, y la simulación del producto es totalmente sin compromiso.</p>
                        <p>📈 Las tasas que se presentan en la simulación pueden variar según la entidad financiera y el plazo elegido. Siempre serán comunicadas con total transparencia, ya que están sujetas a cambios del mercado.</p>
                    </div>
                </div>
            </section>

            <section className="section-padding container">
                <Newsletter />
            </section>
        </main>
    );
}

export default Home;
