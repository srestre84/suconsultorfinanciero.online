import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebase';
import Newsletter from './Newsletter';

// Palabras clave secretas para identificar al administrador. (Puedes personalizarlas)
const ADMIN_KEYWORDS = ['Sebastián', 'SuConsultor', 'Su Consultor'];

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Estado para saber a qué comentario le estamos respondiendo (guarda el ID)
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [replyName, setReplyName] = useState('');

    useEffect(() => {
        // Verificar si está suscrito localmente (Opcionalmente se podría verificar en DB)
        const subscriptionStatus = localStorage.getItem('isSubscribed');
        setIsSubscribed(subscriptionStatus === 'true');

        // Escuchar comentarios en tiempo real desde Firestore para este PostId específico
        const q = query(collection(db, `posts/${postId}/comments`), orderBy('createdAt', 'asc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(commentsData);
        }, (error) => {
            console.error("Error obteniendo comentarios:", error);
        });

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, [postId]);

    // Función auxiliar para detectar si un autor es administrador
    const isAdmin = (authorName) => {
        if (!authorName) return false;
        const lowerName = authorName.toLowerCase();
        return ADMIN_KEYWORDS.some(keyword => lowerName.includes(keyword.toLowerCase()));
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim() || !name.trim()) return;

        try {
            await addDoc(collection(db, `posts/${postId}/comments`), {
                text: newComment,
                author: name,
                date: new Date().toLocaleDateString('es-ES', {
                    year: 'numeric', month: 'long', day: 'numeric',
                    hour: '2-digit', minute: '2-digit'
                }),
                createdAt: serverTimestamp(),
                replies: [] // Inicializamos el hilo vacío
            });
            setNewComment('');
        } catch (error) {
            console.error("Error añadiendo comentario:", error);
            alert("No se pudo publicar el comentario. Verifica tu conexión.");
        }
    };

    const handleReplySubmit = async (e, parentId) => {
        e.preventDefault();
        if (!replyText.trim() || !replyName.trim()) return;

        try {
            const replyObj = {
                id: Date.now().toString(), // Generamos ID local temporal para el mapeo
                text: replyText,
                author: replyName,
                date: new Date().toLocaleDateString('es-ES', {
                    year: 'numeric', month: 'long', day: 'numeric',
                    hour: '2-digit', minute: '2-digit'
                }),
                createdAt: new Date().toISOString()
            };

            const commentRef = doc(db, `posts/${postId}/comments`, parentId);

            await updateDoc(commentRef, {
                replies: arrayUnion(replyObj)
            });

            // Limpiar el estado de respuesta
            setReplyingTo(null);
            setReplyText('');
        } catch (error) {
            console.error("Error añadiendo respuesta:", error);
            alert("No se pudo publicar la respuesta.");
        }
    };

    // Función para renderizar un comentario individual (reutilizable para respuestas)
    const renderCommentCard = (comment, isReply = false, parentId = null) => {
        const isAuthorAdmin = isAdmin(comment.author);

        return (
            <div
                key={comment.id}
                style={{
                    background: isAuthorAdmin ? '#fffbf0' : '#f9f9f9',
                    padding: isReply ? '1rem' : '1.5rem',
                    borderRadius: '12px',
                    borderLeft: isAuthorAdmin ? '4px solid gold' : '4px solid var(--mostaza)',
                    marginLeft: isReply ? '2rem' : '0',
                    marginTop: isReply ? '1rem' : '0',
                    boxShadow: isAuthorAdmin ? '0 2px 10px rgba(255, 215, 0, 0.1)' : 'none'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <div>
                        <strong style={{ color: isAuthorAdmin ? '#b8860b' : 'var(--azul-oscuro)', fontSize: '1.1rem' }}>
                            {comment.author}
                        </strong>
                        {isAuthorAdmin && (
                            <span style={{ marginLeft: '0.5rem', background: 'gold', color: '#856404', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                                Autor Oficial
                            </span>
                        )}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#888' }}>{comment.date}</span>
                </div>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{comment.text}</p>

                {/* Botón Responder (Solo para el comentario principal si estamos suscritos) */}
                {!isReply && isSubscribed && (
                    <button
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        style={{
                            background: 'none', border: 'none', color: 'var(--azul-claro)', cursor: 'pointer',
                            padding: '0', marginTop: '0.8rem', fontSize: '0.9rem', textDecoration: 'underline'
                        }}
                    >
                        {replyingTo === comment.id ? 'Cancelar' : 'Responder'}
                    </button>
                )}

                {/* Área de Respuestas */}
                {comment.replies && comment.replies.length > 0 && (
                    <div style={{ marginTop: '0.5rem' }}>
                        {comment.replies.map(reply => renderCommentCard(reply, true, comment.id))}
                    </div>
                )}

                {/* Mini Formulario de Respuesta si este es el comentario activo */}
                {replyingTo === comment.id && !isReply && (
                    <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
                        <form onSubmit={(e) => handleReplySubmit(e, comment.id)} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <input
                                type="text"
                                placeholder="Tu nombre..."
                                value={replyName}
                                onChange={(e) => setReplyName(e.target.value)}
                                required
                                style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #ddd' }}
                            />
                            <textarea
                                placeholder="Escribe tu respuesta..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                required
                                rows="2"
                                style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #ddd', resize: 'vertical' }}
                            />
                            <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem', fontSize: '0.9rem', alignSelf: 'flex-start' }}>
                                Enviar Respuesta
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
            <h3 style={{ color: 'var(--azul-oscuro)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Comentarios ({comments.length + comments.reduce((acc, c) => acc + (c.replies ? c.replies.length : 0), 0)})
            </h3>

            {/* Listado de Comentarios e Hilos */}
            <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {comments.length === 0 ? (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>Sé el primero en comentar este artículo.</p>
                ) : (
                    comments.map(comment => renderCommentCard(comment, false))
                )}
            </div>

            {/* Formulario Principal o Bloqueo */}
            {isSubscribed ? (
                <div className="glass" style={{ padding: '2rem', borderRadius: '15px' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--azul-oscuro)' }}>Deja tu comentario principal</h4>
                    <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Tu nombre (Cómo quieres aparecer)"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontFamily: 'inherit' }}
                        />
                        <textarea
                            placeholder="Escribe aquí tu opinión, duda o aporte sobre el artículo..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            required
                            rows="4"
                            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontFamily: 'inherit', resize: 'vertical' }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Publicar comentario
                        </button>
                    </form>
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '2rem', background: '#fff3cd', borderRadius: '15px', color: '#856404', border: '1px solid #ffeeba' }}>
                    <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>🔒 Contenido Exclusivo para Comunidad</h4>
                    <p style={{ marginBottom: '1.5rem' }}>Para poder participar en la sección de comentarios, debes suscribirte a nuestro boletín gratuito.</p>
                    {/* Al inyectar el componente Newsletter aquí, le damos al usuario la vía rápida para desbloquearlo */}
                    <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', borderRadius: '10px' }}>
                        <Newsletter />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Comments;
