import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "María Pérez",
            role: "Emprendedora",
            text: "\"Sebastián me ayudó a liberar $500 USD mensuales de liquidez reorganizando mi cartera. Su análisis fue claro y directo al grano, sin términos confusos.\"",
            rating: 5
        },
        {
            name: "Andrés Gómez",
            role: "Empleado Sector Privado",
            text: "\"Estaba asfixiado con las cuotas de 3 tarjetas de crédito. Gracias a la sesión de trabajo, estructuramos un plan de pagos matemáticamente perfecto y hoy respiro tranquilo.\"",
            rating: 5
        },
        {
            name: "Laura Martínez",
            role: "Independiente",
            text: "\"Nunca supe si era mejor abonar a capital o invertir mis excedentes. El modelo que me mostró SuConsultorFinanciero resolvió esa duda en 20 minutos con números reales.\"",
            rating: 5
        }
    ];

    const renderStars = (num) => {
        return "⭐".repeat(num);
    };

    return (
        <section className="testimonials-section section-padding container">
            <h2 className="animate-fade-in delay-1" style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Lo que dicen nuestros clientes
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`glass shadow-hover animate-fade-in delay-${(index % 3) + 1}`} style={{ padding: '2.5rem 2rem', borderRadius: '15px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '20px', fontSize: '3rem', color: 'var(--mostaza)', opacity: '0.5' }}>
                            "
                        </div>
                        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-main)', zIndex: 1, position: 'relative' }}>
                            {testimonial.text}
                        </p>
                        <div style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                            {renderStars(testimonial.rating)}
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--azul-oscuro)', margin: '0 0 0.2rem 0', fontSize: '1.1rem' }}>{testimonial.name}</h4>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{testimonial.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
