import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = ({ showReadMore = false }) => {
  return (
    <section className="about-me-section section-padding" id="sobre-mi">
      <div className="container">
        <div className="about-me-grid">
          <div className="about-me-image-container animate-fade-in">
            <div className="image-frame">
              <img 
                src="/sebastian-restrepo.jpg" 
                alt="Sebastián Restrepo - Ingeniero Administrador" 
                className="about-me-img"
              />
              <div className="experience-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">Años de<br/>Experiencia</span>
              </div>
            </div>
          </div>
          
          <div className="about-me-content animate-fade-in delay-1">
            <span className="section-subtitle">¿Quién es Sebastián Restrepo?</span>
            <h2 className="section-title">La transparencia es la base de cada decisión financiera.</h2>
            
            <p className="about-intro">
              Como <strong>Ingeniero Administrador</strong> y consultor con más de una década en el sector, entiendo que cada número cuenta una historia. Te ayudo a escribir la tuya con claridad, sin letras pequeñas y con resultados reales en tu flujo de caja.
            </p>
            
            <p className="about-description">
              Mi trayectoria no es la de un asesor tradicional. Al combinar mi formación en ingeniería con una sólida carrera 
              en el sector bancario, no solo te presento opciones de crédito; analizo datos, proyecto escenarios y utilizo 
              herramientas de vanguardia para encontrar la estrategia que realmente te favorezca.
            </p>

            <div className="pillars-grid">
              <div className="pillar-card glass">
                <div className="pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18"/><path d="M7 15h1v4"/><path d="M11 15h1v4"/><path d="M15 15h1v4"/><path d="M19 10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5"/><path d="M21 10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10"/></svg>
                </div>
                <h3>Multibanca Real</h3>
                <p>No trabajo para un solo banco, trabajo para ti. Comparo tasas y condiciones de múltiples entidades.</p>
              </div>

              <div className="pillar-card glass">
                <div className="pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3>Transparencia Total</h3>
                <p>Servicio abierto y verificable. Convenios directos con las principales entidades financieras.</p>
              </div>
            </div>

            <div className="about-goal glass">
              <h3>Mi Meta: Tu Tranquilidad Financiera</h3>
              <p>
                Busco democratizar el acceso a la información financiera clara. Toma el control total de tu dinero 
                con herramientas de cálculo y contenido educativo.
              </p>
            </div>

            <div className="about-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#consultoria" className="btn-primary">
                ¡Quiero mi asesoría gratuita ahora!
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              {showReadMore && (
                <Link to="/sobre-mi" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--azul-oscuro)', fontWeight: '600' }}>
                  Conocer trayectoria completa
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              )}
            </div>
            <span className="cta-note" style={{ marginTop: '1rem', display: 'block' }}>Simulación 100% gratuita y sin compromisos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
