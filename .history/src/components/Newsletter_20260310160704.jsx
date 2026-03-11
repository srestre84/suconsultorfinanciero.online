import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Al cargar, verificar si ya está suscrito previamente
        const subscriptionStatus = localStorage.getItem('isSubscribed');
        if (subscriptionStatus === 'true') {
            setIsSubscribed(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Por favor, ingresa un correo electrónico.');
            return;
        }

        setIsLoading(true);
        setMessage('Procesando suscripción y enviando correo...');

        try {
            // =========================================================================
            // INSTRUCCIONES PARA SEBASTIÁN:
            // 1. Crea una cuenta gratuita en https://www.emailjs.com/
            // 2. Crea un "Servicio" (Ej: Gmail) y obtén tu SERVICE ID
            // 3. Crea un "Template" con el diseño del correo y obtén tu TEMPLATE ID
            // 4. Ve a tu cuenta de EmailJS -> Account -> Obtén tu PUBLIC KEY
            // 5. Reemplaza los siguientes 3 valores entre comillas por los tuyos:
            // =========================================================================
            const SERVICE_ID = 'TU_SERVICE_ID_AQUI';
            const TEMPLATE_ID = 'TU_TEMPLATE_ID_AQUI';
            const PUBLIC_KEY = 'TU_PUBLIC_KEY_AQUI';

            // Si las credenciales aún son de prueba, simulamos el éxito al instante para no bloquear al usuario
            if (SERVICE_ID.includes('TU_SERVICE_ID')) {
                setTimeout(() => {
                    localStorage.setItem('isSubscribed', 'true');
                    setIsSubscribed(true);
                    setMessage('⚠️ Nota: Simulación activada. Debes colocar tus credenciales reales de EmailJS en el código.');
                    setIsLoading(false);
                }, 1000);
                return;
            }

            // Los parámetros que enviamos a tu plantilla. 
            // En tu plantilla de EmailJS debes poner la variable {{user_email}}
            const templateParams = {
                user_email: email,
            };

            // Enviamos el correo realmente
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            // Si llegamos hasta aquí, el correo se envió con éxito
            localStorage.setItem('isSubscribed', 'true');
            setIsSubscribed(true);
            setMessage('¡Gracias! En breve recibirás la plantilla en tu correo electrónico. Además, ya tienes acceso para comentar en el blog.');
        } catch (error) {
            console.error("Error al enviar con EmailJS: ", error);
            setMessage('Ocurrió un error al procesar tu suscripción. Intenta nuevamente más tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubscribed) {
        return (
            <div className="glass" style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', marginTop: '2rem', borderLeft: '4px solid var(--mostaza)' }}>
                <h3 style={{ color: 'var(--azul-oscuro)' }}>¡Material Desbloqueado! 🎁</h3>
                <p>Revisa tu bandeja de entrada (y la carpeta de Spam por si acaso). Ya te hemos enviado la **Plantilla de Control de Gastos**. ¡Disfruta tu nuevo superpoder financiero y participa en los comentarios de nuestro blog!</p>
                {message && message.includes('Nota') && (
                    <p style={{ marginTop: '1rem', color: '#856404', fontSize: '0.9rem' }}>{message}</p>
                )}
            </div>
        );
    }

    return (
        <div className="glass shadow-hover" style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', marginTop: '2rem', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--mostaza)', color: 'var(--azul-oscuro)', padding: '2rem 3rem 0.5rem 3rem', transform: 'rotate(45deg)', fontWeight: 'bold' }}>
                GRATIS
            </div>
            <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1rem', fontSize: '1.8rem' }}>Descarga la Plantilla Definitiva de Flujo de Caja</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                Organiza tus finanzas en 10 minutos. Ingresa tu mejor correo y te enviaremos nuestra herramienta en Excel para mapear tus deudas e ingresos al instante.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
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
                    disabled={isLoading}
                    style={{
                        width: '100%',
                        opacity: isLoading ? 0.7 : 1,
                        cursor: isLoading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isLoading ? 'Enviando...' : 'Descargar Plantilla Ahora 👉'}
                </button>
            </form>

            {message && <p style={{ marginTop: '1rem', color: message.includes('error') ? 'red' : 'var(--azul-oscuro)' }}>{message}</p>}
        </div>
    );
}

export default Newsletter;
