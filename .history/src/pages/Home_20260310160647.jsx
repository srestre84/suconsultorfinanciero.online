import React from 'react';
import Services from '../components/Services';
import InstagramSection from '../components/InstagramSection';
import Dictionary from '../components/Dictionary';
import Newsletter from '../components/Newsletter';
import Consulting from '../components/Consulting';
import Testimonials from '../components/Testimonials';

function Home() {
    return (
        <main>
            {/* Sección de Experiencia/Confianza (Simplificada del index.html original) */}
            <section className="section-padding container">
                <div className="glass" style={{ padding: '3rem 2rem', borderRadius: '20px', textAlign: 'center' }}>
                    <h2 className="animate-fade-in delay-1">Experiencia y Eficacia</h2>
                    <p className="animate-fade-in delay-2" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Como asesor especializado en crédito hipotecario y de consumo, he ayudado a decenas de clientes a mejorar su flujo de caja. Trabajo con entidades reconocidas para ofrecer las mejores tasas y condiciones para compra de cartera, libre inversión y financiación de vivienda.
                    </p>
                </div>
            </section>

            <Services />
            <InstagramSection />
            <Dictionary />

            {/* Sección de Chatbot Avanzado */}
            <section className="section-padding container">
                <div className="glass animate-fade-in delay-2" style={{ padding: '3rem 2rem', borderRadius: '20px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,248,220,0.9) 100%)', boxShadow: '0 10px 30px rgba(225, 173, 1, 0.1)' }}>
                    <h2 style={{ color: 'var(--azul-oscuro)' }}>Asistente Financiero Inteligente 🤖</h2>
                    <p style={{ maxWidth: '800px', margin: '1rem auto', fontSize: '1.1rem' }}>
                        Nuestro chatbot interactivo ubicado en la esquina inferior derecha <strong>ahora puede convertir cualquier tipo de tasa de interés</strong>.
                    </p>
                    <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1.5rem auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
                        <li>✅ <strong>Versatilidad:</strong> Ingresa la tasa que te ofrece tu banco (Ej: <em>15% EA</em>, <em>2% MV</em>, o <em>5% TV</em>).</li>
                        <li>✅ <strong>Detección Automática:</strong> Reconoce el tipo de tasa (Efectiva Anual, Mes Vencido, Trimestre Vencido o Semestre Vencido).</li>
                        <li>✅ <strong>Conversión Total:</strong> Te entrega al instante las equivalencias exactas en el resto de los formatos del mercado colombiano.</li>
                    </ul>
                    <p style={{ fontWeight: '600', color: 'var(--mostaza)', fontSize: '1.1rem' }}>¡Abre el chat y pruébalo ahora mismo!</p>
                </div>
            </section>

            {/* Nueva Sección de Testimonios (Social Proof) */}
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

            {/* Newsletter Subscription */}
            <section className="section-padding container">
                <Newsletter />
            </section>
        </main>
    );
}

export default Home;
