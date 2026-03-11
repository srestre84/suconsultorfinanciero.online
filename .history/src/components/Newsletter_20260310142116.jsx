import React, { useState, useEffect } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Al cargar, verificar si ya está suscrito
        const subscriptionStatus = localStorage.getItem('isSubscribed');
        if (subscriptionStatus === 'true') {
            setIsSubscribed(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Por favor, ingresa un correo electrónico.');
            return;
        }

        // Simulamos una petición de red con un pequeño timeout
        setMessage('Procesando suscripción...');

        setTimeout(() => {
            // Guardamos el estado simulado en localStorage
            localStorage.setItem('isSubscribed', 'true');
            // También podríamos guardar el email para personalizar: localStorage.setItem('userEmail', email);
            setIsSubscribed(true);
            setMessage('¡Gracias por suscribirte! Ahora puedes participar en los comentarios del blog.');
        }, 1000);
    };

    if (isSubscribed) {
        return (
            <div className="glass" style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', marginTop: '2rem', borderLeft: '4px solid var(--mostaza)' }}>
                <h3 style={{ color: 'var(--azul-oscuro)' }}>¡Ya eres parte de nuestra comunidad! 🎉</h3>
                <p>Gracias por suscribirte. Disfruta de todo nuestro contenido y participa en los comentarios de los artículos.</p>
            </div>
        );
    }

    return (
        <div className="glass shadow-hover" style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', marginTop: '2rem', transition: 'all 0.3s ease' }}>
            <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1rem' }}>Suscríbete a nuestro boletín</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>Únete para recibir las últimas novedades financieras y obtener la capacidad de comentar en nuestros artículos.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        fontSize: '1rem'
                    }}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                >
                    Suscribirme
                </button>
            </form>

            {message && <p style={{ marginTop: '1rem', color: message.includes('Gracias') ? 'green' : 'var(--azul-oscuro)' }}>{message}</p>}
        </div>
    );
}

export default Newsletter;
