import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Ajustado al tamaño de la card + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        // Query approved testimonials (without orderBy to avoid manual index requirement)
        const q = query(
            collection(db, 'testimonials'),
            where('status', '==', 'approved')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Sort locally by date descending
            const sortedData = data.sort((a, b) => {
                const dateA = a.createdAt?.toDate() || 0;
                const dateB = b.createdAt?.toDate() || 0;
                return dateB - dateA;
            });

            setTestimonials(sortedData);
            setLoading(false);
        }, (error) => {
            console.error("Error en testimonios (silencio):", error);
            setLoading(false);
            // Si hay error de permisos (unsubscribed/no rules), simplemente no mostramos nada
        });

        return () => unsubscribe();
    }, []);

    const renderStars = (num) => {
        return "⭐".repeat(num);
    };

    if (loading) return null;
    if (testimonials.length === 0) return null; // Don't show the section if no testimonials

    return (
        <section className="testimonials-section section-padding container" id="testimonios">
            <h2 className="animate-fade-in delay-1" style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Lo que dicen nuestros clientes
            </h2>

            <div style={{ position: 'relative', width: '100%' }}>
                {/* Flechas de navegación */}
                <button 
                    onClick={() => scroll('left')}
                    style={{
                        position: 'absolute',
                        left: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        background: 'var(--blanco-puro)',
                        border: '1px solid var(--mostaza)',
                        color: 'var(--mostaza)',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        fontSize: '1.5rem',
                        transition: 'all 0.3s ease'
                    }}
                    className="nav-arrow hide-on-mobile"
                    aria-label="Anterior"
                >
                    ‹
                </button>
                <button 
                    onClick={() => scroll('right')}
                    style={{
                        position: 'absolute',
                        right: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        background: 'var(--blanco-puro)',
                        border: '1px solid var(--mostaza)',
                        color: 'var(--mostaza)',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        fontSize: '1.5rem',
                        transition: 'all 0.3s ease'
                    }}
                    className="nav-arrow hide-on-mobile"
                    aria-label="Siguiente"
                >
                    ›
                </button>

                <div 
                    ref={scrollContainerRef}
                    style={{ 
                        display: 'flex', 
                        overflowX: 'auto', 
                        gap: '2rem', 
                        padding: '1rem 0.5rem 2rem',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <style>
                        {`
                            .testimonials-section::-webkit-scrollbar { display: none; }
                            @media (max-width: 768px) {
                                .nav-arrow { display: none; }
                            }
                        `}
                    </style>
                    {testimonials.map((testimonial, index) => (
                    <div 
                        key={testimonial.id || index} 
                        className={`glass shadow-hover animate-fade-in delay-${(index % 3) + 1}`} 
                        style={{ 
                            padding: '2.5rem 2rem', 
                            borderRadius: '15px', 
                            position: 'relative',
                            minWidth: '320px',
                            maxWidth: '400px',
                            scrollSnapAlign: 'center',
                            flexShrink: 0
                        }}
                    >
                        <div style={{ position: 'absolute', top: '-15px', left: '20px', fontSize: '3rem', color: 'var(--mostaza)', opacity: '0.5' }}>
                            "
                        </div>
                        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-main)', zIndex: 1, position: 'relative', minHeight: '100px' }}>
                            {testimonial.content}
                        </p>
                        <div style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                            {renderStars(testimonial.rating)}
                        </div>
                        <div style={{ fontWeight: '800', color: 'var(--azul-oscuro)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                            {testimonial.name}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', opacity: '0.8' }}>
                            {(() => {
                                const originalDate = testimonial.createdAt?.toDate() || new Date();
                                const adjustedDate = new Date(originalDate);
                                adjustedDate.setDate(adjustedDate.getDate() - (index * 3));
                                return adjustedDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
                            })()}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', fontSize: '0.8rem' }}>
                                <span style={{ width: '100%', fontWeight: '700', color: 'var(--azul-oscuro)', marginBottom: '0.2rem' }}>
                                    📦 {testimonial.productType || 'Asesoría General'}
                                </span>
                                <span>😊 Sat: {testimonial.criteria?.satisfaction}/5</span>
                                <span>🤝 Amab: {testimonial.criteria?.kindness}/5</span>
                                <span>⏱️ Tiem: {testimonial.criteria?.time}/5</span>
                            </div>
                            {testimonial.isFreeService && (
                                <span style={{ fontSize: '0.75rem', background: 'var(--mostaza)', color: 'white', padding: '2px 8px', borderRadius: '20px', fontWeight: '600' }}>
                                    Asesoría Gratuita
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="scroll-hint" style={{ 
            textAlign: 'center', 
            fontSize: '0.85rem', 
            color: 'var(--azul-oscuro)', 
            marginTop: '1.5rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'rgba(225, 173, 1, 0.1)',
            padding: '6px 15px',
            borderRadius: '20px',
            width: 'fit-content',
            margin: '1.5rem auto'
        }}>
            <span style={{ fontSize: '1.1rem' }}>↔</span> Desliza o usa las flechas para ver más
        </div>
    </section>
    );
};

export default Testimonials;
