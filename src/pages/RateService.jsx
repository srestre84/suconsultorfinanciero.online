import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import './RateService.css';

const RateService = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [productType, setProductType] = useState('Vivienda');
    const [isFreeService, setIsFreeService] = useState(true);
    const [criteria, setCriteria] = useState({
        satisfaction: 5,
        kindness: 5,
        time: 5
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert('Por favor selecciona una calificación de estrellas.');
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, 'testimonials'), {
                name,
                rating,
                content,
                productType,
                isFreeService,
                criteria,
                status: 'pending',
                createdAt: serverTimestamp()
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Error enviando calificación:", error);
            if (error.code === 'permission-denied') {
                alert("⚠ Error de Permisos: Tu calificación no pudo guardarse en la base de datos (Habeas Data). Por favor, contacta a Sebastián para informarle sobre este fallo de configuración.");
            } else {
                alert("No se pudo enviar la calificación debido a un error técnico. Por favor, inténtalo más tarde.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main className="rate-service-page">
                <div className="container section-padding">
                    <div className="glass success-card animate-fade-in">
                        <div className="success-icon">✅</div>
                        <h2>¡Gracias por tu reseña, {name}!</h2>
                        <p>Tu opinión es fundamental para nosotros. Sebastián revisará tu comentario y lo publicará pronto en nuestra web.</p>
                        <button onClick={() => window.location.href = '/'} className="btn-primary">Volver al inicio</button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="rate-service-page">
            <Helmet>
                <title>Valorar Servicio | Su Consultor Financiero</title>
                <meta name="description" content="Califica tu experiencia con Su Consultor Financiero y ayúdanos a mejorar." />
            </Helmet>

            <section className="section-padding container">
                <div className="rate-header animate-fade-in">
                    <span className="section-subtitle">Tu opinión cuenta</span>
                    <h1 className="section-title">Valora tu Experiencia 🏠</h1>
                    <p>Queremos saber cómo fue tu proceso con Sebastián. Tu reseña nos ayuda a seguir democratizando el acceso a la banca.</p>
                </div>

                <div className="glass rate-form-container animate-fade-in delay-1">
                    <form onSubmit={handleSubmit} className="rate-form">
                        <div className="form-section">
                            <h3>1. Calificación General</h3>
                            <div className="star-rating">
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className={index <= (hover || rating) ? "star-btn on" : "star-btn off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                        >
                                            <span className="star">&#9733;</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>2. Detalles del Servicio</h3>
                            <div className="criteria-grid">
                                <div className="criteria-item">
                                    <label>Satisfacción General</label>
                                    <select 
                                        value={criteria.satisfaction} 
                                        onChange={(e) => setCriteria({...criteria, satisfaction: parseInt(e.target.value)})}
                                    >
                                        <option value="5">Excelente (5)</option>
                                        <option value="4">Muy Bueno (4)</option>
                                        <option value="3">Bueno (3)</option>
                                        <option value="2">Regular (2)</option>
                                        <option value="1">Malo (1)</option>
                                    </select>
                                </div>
                                <div className="criteria-item">
                                    <label>Amabilidad del Consultor</label>
                                    <select 
                                        value={criteria.kindness} 
                                        onChange={(e) => setCriteria({...criteria, kindness: parseInt(e.target.value)})}
                                    >
                                        <option value="5">Excelente (5)</option>
                                        <option value="4">Muy Bueno (4)</option>
                                        <option value="3">Bueno (3)</option>
                                        <option value="2">Regular (2)</option>
                                        <option value="1">Malo (1)</option>
                                    </select>
                                </div>
                                <div className="criteria-item">
                                    <label>Tiempo de Respuesta</label>
                                    <select 
                                        value={criteria.time} 
                                        onChange={(e) => setCriteria({...criteria, time: parseInt(e.target.value)})}
                                    >
                                        <option value="5">Excelente (5)</option>
                                        <option value="4">Muy Bueno (4)</option>
                                        <option value="3">Bueno (3)</option>
                                        <option value="2">Regular (2)</option>
                                        <option value="1">Malo (1)</option>
                                    </select>
                                </div>
                                <div className="criteria-item">
                                    <label>Tipo de Producto</label>
                                    <select 
                                        value={productType} 
                                        onChange={(e) => setProductType(e.target.value)}
                                    >
                                        <option value="Vivienda">Vivienda 🏠</option>
                                        <option value="Vehículo">Vehículo 🚗</option>
                                        <option value="Libre Inversión">Libre Inversión 💰</option>
                                        <option value="Compra de Cartera">Compra de Cartera 📉</option>
                                        <option value="Otros">Otros ⚙️</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="checkbox-section">
                                <label className="checkbox-label">
                                    <input 
                                        type="checkbox" 
                                        checked={isFreeService} 
                                        onChange={(e) => setIsFreeService(e.target.checked)} 
                                    />
                                    <span>Certifico que no se me cobró nada por esta asesoría.</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>3. Comparte tu Opinión</h3>
                            <div className="input-group">
                                <label>Tu Nombre</label>
                                <input 
                                    type="text" 
                                    placeholder="Ej. Juan Pérez" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <label>Tu Comentario (Testimonio)</label>
                                <textarea 
                                    placeholder="Cuéntanos cómo te ayudó Sebastián..." 
                                    value={content} 
                                    onChange={(e) => setContent(e.target.value)} 
                                    required
                                    rows="4"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn-primary submit-btn" 
                            disabled={loading}
                        >
                            {loading ? "Enviando..." : "Enviar mi Calificación"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default RateService;
