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
          <div className="glass trust-container animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ 
                display: 'inline-block',
                padding: '0.35rem 0.9rem',
                background: 'rgba(37, 211, 102, 0.15)',
                color: '#15803d',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '1rem'
            }}>🛡️ Garantía de Transparencia</span>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--azul-oscuro)' }}>
              ¿Quieres validar con qué bancos trabajo?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#475569', marginBottom: '1.5rem' }}>
              Mi labor se basa en la confianza y la total legalidad. Si quieres comprobar mis convenios, 
              <strong> escríbeme y te entrego mis datos personales para que tú mismo hagas la validación directa</strong> con las entidades financieras antes de iniciar cualquier trámite. Tu tranquilidad es mi prioridad número uno.
            </p>
            <a 
              href="https://wa.me/573167443613?text=Hola%2C%20quiero%20validar%20con%20qu%C3%A9%20bancos%20trabajas%2C%20%C2%BFme%20compartes%20tus%20datos%20para%20hacer%20la%20validaci%C3%B3n%3F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ background: '#25d366', borderColor: '#25d366', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.6rem', borderRadius: '50px', fontWeight: 'bold' }}
            >
              <span>💬</span> Escríbeme y Valídalo por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
