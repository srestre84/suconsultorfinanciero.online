import React from 'react';
import './Mission.css';

const pillars = [
    {
        icon: '🔍',
        title: 'Diagnóstico Personalizado',
        description: 'Analizamos tu situación financiera actual para entender tus necesidades reales y tus metas a corto y largo plazo.',
    },
    {
        icon: '🏦',
        title: 'Mejor Producto Financiero',
        description: 'Comparamos las opciones del mercado y seleccionamos el producto con las mejores condiciones: tasa, plazo y cuota ajustada a tu capacidad.',
    },
    {
        icon: '📈',
        title: 'Mejora del Flujo de Caja',
        description: 'Estructuramos la solución para que tu dinero rinda más mes a mes, reduciendo carga financiera y liberando recursos para lo que importa.',
    },
];

const Mission = () => {
    return (
        <section className="mission-section section-padding" id="nuestra-mision">
            <div className="container">
                <div className="mission-header animate-fade-in">
                    <span className="mission-badge">Nuestro Propósito</span>
                    <h2 className="mission-title">
                        Identificamos la mejor solución <span className="mission-highlight">para ti</span>
                    </h2>
                    <p className="mission-subtitle">
                        Nuestro trabajo es encontrar el producto financiero que se ajuste a tus condiciones, 
                        mejore tu flujo de caja y te permita avanzar con tranquilidad hacia tus metas.
                    </p>
                </div>

                <div className="mission-pillars">
                    {pillars.map((pillar, index) => (
                        <div
                            className={`mission-card glass animate-fade-in delay-${index + 1}`}
                            key={index}
                        >
                            <div className="mission-icon">{pillar.icon}</div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                            <div className="mission-card-accent" />
                        </div>
                    ))}
                </div>

                <div className="mission-cta animate-fade-in delay-3">
                    <p className="mission-cta-text">
                        💡 <strong>¿Cómo lo hacemos?</strong> Evaluamos tu perfil, comparamos condiciones en el mercado 
                        y te presentamos la opción que más te conviene — siempre con total transparencia y sin compromiso.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
