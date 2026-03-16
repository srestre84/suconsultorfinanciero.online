import React from 'react';

const Consulting = () => {
    // Definimos los tres pilares principales de la consultoría
    const consultingAreas = [
        {
            icon: "💵",
            title: "Optimización de Flujo de Caja",
            description: "Análisis exhaustivo de ingresos y egresos para liberar liquidez mensual. Reestructuramos tus deudas actuales para evitar asfixia financiera.",
            whatsappMessage: "Hola, me interesa la Optimización de Flujo de Caja."
        },
        {
            icon: "📈",
            title: "Manejo de Capital",
            description: "Estrategias personalizadas para destinar excedentes o abonos a capital. ¿Pagar la cuota, reducir el plazo o invertir el dinero? Te damos la respuesta matemática.",
            whatsappMessage: "Hola, me interesa el Manejo de Capital y reducción de deuda."
        },
        {
            icon: "📊",
            title: "Análisis del Mercado",
            description: "Interpretamos por ti los movimientos de tasas (EA, MV, etc.) y la macroeconomía actual para decidir en qué banco o entidad te conviene estar hoy.",
            whatsappMessage: "Hola, me interesa un Análisis del Mercado para mi crédito."
        }
    ];

    const handleWhatsAppClick = (message) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/573167443613?text=${encodedMessage}`, '_blank');
    };

    return (
        <section className="consulting-section section-padding container">
            <div className="glass" style={{ padding: '3rem 2rem', borderRadius: '20px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.95) 100%)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)' }}>
                <h2 className="animate-fade-in delay-1" style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Consultoría Financiera Especializada
                </h2>
                <p className="animate-fade-in delay-2" style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.2rem', color: '#555' }}>
                    Toma el control absoluto de tus finanzas. Evaluamos tu perfil para encontrar la estrategia matemáticamente más eficiente.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {consultingAreas.map((area, index) => (
                        <div 
                            key={index} 
                            className="glass shadow-hover" 
                            onClick={() => handleWhatsAppClick(area.whatsappMessage)}
                            style={{ 
                                padding: '2rem', 
                                borderRadius: '15px', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{area.icon}</div>
                            <h3 style={{ color: 'var(--azul-oscuro)', fontSize: '1.3rem', marginBottom: '1rem' }}>{area.title}</h3>
                            <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6' }}>{area.description}</p>
                            <span style={{ marginTop: '1rem', color: 'var(--azul-oscuro)', fontWeight: '700', fontSize: '0.9rem' }}>Consultar ahora →</span>
                        </div>
                    ))}
                </div>

                <div className="animate-fade-in delay-3" style={{ background: 'var(--mostaza)', padding: '2rem', borderRadius: '15px', color: 'var(--azul-oscuro)', maxWidth: '650px', margin: '0 auto', boxShadow: '0 8px 30px rgba(255, 215, 0, 0.3)' }}>
                    <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: '800' }}>¿Necesitas una Sesión de Trabajo?</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', fontWeight: '500' }}>Agenda una consultoría 1 a 1 para estructurar un plan de acción real, basado en números, no en intuición.</p>

                    {/* Botón CTA (Llamado a la Acción). Redirige al WhatsApp para mejor conversión */}
                    <a
                        href="https://wa.me/573167443613?text=Hola,%20Sebastián.%20Me%20gustaría%20agendar%20una%20consultoría%20financiera%20para%20evaluar%20mi%20caso."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-block', fontSize: '1.2rem', padding: '1rem 2.5rem', backgroundColor: 'var(--azul-oscuro)', color: '#ffffff', fontWeight: 'bold', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0, 43, 91, 0.4)', transition: 'transform 0.2s ease' }}
                    >
                        Solicitar Consultoría por WhatsApp 📱
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Consulting;
