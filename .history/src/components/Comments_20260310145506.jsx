import React, { useState, useEffect } from 'react';
import Newsletter from './Newsletter';

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        // Verificar si está suscrito
        const subscriptionStatus = localStorage.getItem('isSubscribed');
        setIsSubscribed(subscriptionStatus === 'true');

        // Cargar comentarios
        const savedComments = JSON.parse(localStorage.getItem(`comments_post_${postId}`)) || [];
        setComments(savedComments);
    }, [postId]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (!newComment.trim() || !name.trim()) return;

        const commentObj = {
            id: Date.now(),
            text: newComment,
            author: name,
            date: new Date().toLocaleDateString('es-ES', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit'
            })
        };

        const updatedComments = [...comments, commentObj];
        setComments(updatedComments);

        // Guardar simulando base de datos
        localStorage.setItem(`comments_post_${postId}`, JSON.stringify(updatedComments));

        setNewComment('');
    };

    return (
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
            <h3 style={{ color: 'var(--azul-oscuro)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Comentarios ({comments.length})
            </h3>

            {/* Listado de Comentarios */}
            <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {comments.length === 0 ? (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>Sé el primero en comentar este artículo.</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--mostaza)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                                <strong style={{ color: 'var(--azul-oscuro)', fontSize: '1.1rem' }}>{comment.author}</strong>
                                <span style={{ fontSize: '0.85rem', color: '#888' }}>{comment.date}</span>
                            </div>
                            <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{comment.text}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Formulario o Bloqueo */}
            {isSubscribed ? (
                <div className="glass" style={{ padding: '2rem', borderRadius: '15px' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--azul-oscuro)' }}>Deja tu comentario</h4>
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
