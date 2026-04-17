import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutMeSection from '../components/AboutMe';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <main className="about-page">
      <Helmet>
        <title>Sobre Mí | Sebastián Restrepo - Asesor Bancario en Medellín</title>
        <meta name="description" content="Conoce a Sebastián Restrepo, ingeniero y asesor bancario en Medellín con más de 15 años de experiencia en consultoría financiera y gestión de créditos." />
      </Helmet>

      {/* Hero Section for About Page */}
      <section className="about-hero section-padding">
        <div className="container">
          <div className="about-hero-content animate-fade-in">
            <span className="section-subtitle">Trayectoria y Confianza</span>
            <h1 className="hero-title">Estrategia, Control y <span className="text-highlight">Resultados Financieros</span></h1>
            <p className="hero-description">
              Más de 15 años transformando la relación de las personas con su dinero a través de la ingeniería y la banca.
            </p>
          </div>
        </div>
      </section>

      {/* Reuse the core content component */}
      <AboutMeSection />

      {/* Additional Page Specific Content: Values & Methodology */}
      <section className="methodology-section section-padding">
        <div className="container">
          <div className="methodology-grid">
            <div className="methodology-text animate-fade-in">
              <h2 className="section-title">Mi Metodología</h2>
              <p>
                No creo en fórmulas mágicas. Mi enfoque se basa en el <strong>análisis matemático riguroso</strong> y el conocimiento profundo de las políticas bancarias colombianas.
              </p>
              <div className="steps-container">
                <div className="step-item">
                  <div className="step-num">01</div>
                  <div className="step-content">
                    <h3>Diagnóstico Inicial</h3>
                    <p>Evaluamos tu situación actual: ingresos, egresos y deudas vigentes.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">02</div>
                  <div className="step-content">
                    <h3>Proyección de Escenarios</h3>
                    <p>Utilizamos herramientas de ingeniería para simular el impacto de diferentes estrategias.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">03</div>
                  <div className="step-content">
                    <h3>Ejecución y Seguimiento</h3>
                    <p>Te acompañamos en la gestión directa con las entidades financieras hasta lograr tu objetivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification/Trust Section */}
      <section className="trust-badges section-padding">
        <div className="container">
          <div className="glass trust-container animate-fade-in">
            <h3>Seguridad y Respaldo</h3>
            <p>
              Mi labor se basa en la confianza y la legalidad. Si te presento una propuesta de una entidad financiera específica, 
              <strong> con gusto te facilitaré todos los datos necesarios para que puedas validar mi vinculación directa</strong> con dicha institución. 
              Tu tranquilidad es mi prioridad en todo el proceso.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
