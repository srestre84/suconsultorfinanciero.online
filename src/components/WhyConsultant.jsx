import React from 'react';
import './WhyConsultant.css';

const WhyConsultant = () => {
    return (
        <section className="why-consultant-section section-padding" id="por-que-consultor">
            <div className="container">
                <div className="why-consultant-header">
                    <span className="why-badge">Estrategia Multibanca</span>
                    <h2>¿Tienes un <span className="text-highlight">Buen Perfil Financiero</span>?</h2>
                    <p className="why-subtitle">
                        Tener ingresos sólidos y excelente puntaje crediticio es tu mayor fortaleza. 
                        No la desperdicies aceptando la tasa estándar de un solo banco.
                    </p>
                </div>

                <div className="why-cards-grid">
                    <div className="why-card glass">
                        <div className="why-card-icon">🏛️</div>
                        <h3>Subasta entre +8 Bancos</h3>
                        <p>
                            Al ir directo a tu banco de siempre, solo ves <strong>su</strong> tasa. 
                            Como consultor multibanca, radico tu perfil en simultáneo en varias entidades para que **compitan por ti** y logremos la tasa más baja.
                        </p>
                    </div>

                    <div className="why-card glass">
                        <div className="why-card-icon">⏱️</div>
                        <h3>Cero Filas y Cero Burocracia</h3>
                        <p>
                            Tu tiempo vale oro. Olvídate de visitar 4 sucursales, llenar carpetas repetitivas y hacer filas. 
                            Gestionamos todo 100% digital y directo con directores bancarios.
                        </p>
                    </div>

                    <div className="why-card glass">
                        <div className="why-card-icon">🔒</div>
                        <h3>Desembolso Directo del Banco</h3>
                        <p>
                            Seguridad total para ti. Nosotros gestionamos la aprobación, pero el banco desembolsa 
                            el 100% de los recursos directamente a tu cuenta o a la constructora/vendedor.
                        </p>
                    </div>

                    <div className="why-card glass highlighted-card">
                        <div className="why-card-icon">✨</div>
                        <h3>Asesoría Sin Costo</h3>
                        <p>
                            Recibes acompañamiento experto y personalizado de principio a fin con 
                            <strong> asesoría sin costo</strong> para ti.
                        </p>
                    </div>
                </div>

                {/* Tabla comparativa */}
                <div className="comparison-table-wrapper glass">
                    <h3 className="table-title">Comparación Directa: Tu Banco vs. Consultor Multibanca</h3>
                    <div className="table-responsive">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Concepto</th>
                                    <th>Ir directo a 1 Banco 🏛️</th>
                                    <th className="highlight-col">Con Tu Consultor Multibanca 🤝</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Opciones de tasa</strong></td>
                                    <td>1 sola opción (la de ese banco)</td>
                                    <td className="highlight-col">Compara entre +8 entidades financieras</td>
                                </tr>
                                <tr>
                                    <td><strong>Poder de negociación</strong></td>
                                    <td>Aceptas la oferta de ventanilla</td>
                                    <td className="highlight-col">Bancos compiten para darte su mejor tasa VIP</td>
                                </tr>
                                <tr>
                                    <td><strong>Tiempo y Papelería</strong></td>
                                    <td>Citas, filas y trámites repetitivos</td>
                                    <td className="highlight-col">100% gestionado por expertos, 0h en filas</td>
                                </tr>
                                <tr>
                                    <td><strong>Acompañamiento</strong></td>
                                    <td>Ejecutivo rotativo de sucursal</td>
                                    <td className="highlight-col">Asesor personal dedicado de principio a fin</td>
                                </tr>
                                <tr>
                                    <td><strong>Costo del servicio</strong></td>
                                    <td>Depende de la entidad</td>
                                    <td className="highlight-col"><strong>Asesoría Sin Costo</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="why-cta-wrapper">
                        <a 
                            href="https://wa.me/573167443613?text=Hola%2C%20tengo%20un%20buen%20perfil%20y%20quiero%20comparar%20tasas%20bancarias" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary btn-large"
                        >
                            💬 Comparar Mi Tasa Ahora (Asesoría Sin Costo)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyConsultant;
