import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import InstagramSection from './components/InstagramSection';
import Dictionary from './components/Dictionary';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
    return (
        <div className="app-container">
            <Header />

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
            </main>

            <Footer />
            <Chatbot />
        </div>
    );
}

export default App;
