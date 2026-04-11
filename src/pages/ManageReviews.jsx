import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Helmet } from 'react-helmet-async';
import './ManageReviews.css';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);

    const ADMIN_PASS = 'SebasAdmin2024'; // Password simple sugerido basado en contexto

    useEffect(() => {
        if (!isAuthenticated) return;

        const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reviewsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReviews(reviewsData);
            setLoading(false);
        }, (error) => {
            console.error("Error obteniendo reseñas:", error);
            setLoading(false);
            if (error.code === 'permission-denied') {
                alert("🔒 Error de Acceso: No tienes permisos suficientes para leer las reseñas. Por favor, revisa tus reglas de seguridad en Firebase Database.");
            }
        });

        return () => unsubscribe();
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'goku1714*') {
            setIsAuthenticated(true);
        } else {
            alert('Palabra clave incorrecta');
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const reviewRef = doc(db, 'testimonials', id);
            await updateDoc(reviewRef, { status: newStatus });
        } catch (error) {
            console.error("Error actualizando estado:", error);
        }
    };

    const deleteReview = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta reseña permanentemente?')) {
            try {
                const reviewRef = doc(db, 'testimonials', id);
                await deleteDoc(reviewRef);
            } catch (error) {
                console.error("Error eliminando reseña:", error);
            }
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="admin-reviews-page">
                <div className="container section-padding">
                    <div className="glass login-card animate-fade-in">
                        <h2>Panel de Moderación</h2>
                        <form onSubmit={handleLogin} className="login-form">
                            <input
                                type="password"
                                placeholder="Ingresa la palabra clave..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn-primary">Entrar</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="admin-reviews-page">
            <Helmet>
                <title>Gestionar Reseñas | Admin</title>
            </Helmet>

            <section className="section-padding container">
                <div className="admin-header">
                    <h1>Gestión de Testimonios</h1>
                    <p>Aprueba o rechaza las valoraciones de los clientes antes de que aparezcan en la web.</p>
                </div>

                <div className="reviews-list">
                    {loading ? <p>Cargando reseñas...</p> : reviews.length === 0 ? <p>No hay reseñas para mostrar.</p> : (
                        reviews.map(review => (
                            <div key={review.id} className={`glass review-admin-card status-${review.status}`}>
                                <div className="card-header">
                                    <div className="user-info">
                                        <strong>{review.name}</strong>
                                        <span className="review-date">
                                            {review.createdAt?.toDate().toLocaleDateString('es-ES')}
                                        </span>
                                    </div>
                                    <div className="status-badge">{review.status}</div>
                                </div>

                                <div className="rating-stars">
                                    {"⭐".repeat(review.rating)}
                                </div>

                                <p className="review-text">"{review.content}"</p>

                                <div className="review-details">
                                    <div className="detail-item product-type-badge">
                                        📦 {review.productType || 'No especificado'}
                                    </div>
                                    <div className="detail-item">
                                        <span>Sat: {review.criteria.satisfaction}/5</span>
                                    </div>
                                    <div className="detail-item">
                                        <span>Amab: {review.criteria.kindness}/5</span>
                                    </div>
                                    <div className="detail-item">
                                        <span>Tiem: {review.criteria.time}/5</span>
                                    </div>
                                    {review.isFreeService && (
                                        <div className="detail-item free-badge">
                                            Asesoría Gratuita
                                        </div>
                                    )}
                                </div>

                                <div className="card-actions">
                                    {review.status !== 'approved' && (
                                        <button
                                            onClick={() => updateStatus(review.id, 'approved')}
                                            className="btn-approve"
                                        >
                                            Aprobar
                                        </button>
                                    )}
                                    {review.status !== 'rejected' && (
                                        <button
                                            onClick={() => updateStatus(review.id, 'rejected')}
                                            className="btn-reject"
                                        >
                                            Rechazar
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteReview(review.id)}
                                        className="btn-delete"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </main>
    );
};

export default ManageReviews;
