import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id || index} className={`glass shadow-hover animate-fade-in delay-${(index % 3) + 1}`} style={{ padding: '2.5rem 2rem', borderRadius: '15px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '20px', fontSize: '3rem', color: 'var(--mostaza)', opacity: '0.5' }}>
                            "
                        </div>
                        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-main)', zIndex: 1, position: 'relative' }}>
                            {testimonial.content}
                        </p>
                        <div style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                            {renderStars(testimonial.rating)}
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
        </section>
    );
};

export default Testimonials;
