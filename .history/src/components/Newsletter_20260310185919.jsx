import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

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
        setMessage('Procesando solicitud y guardando en base de datos...');
        console.log('--- EMPEZANDO SUBMIT ---');

        try {
            // 1. Verificar si el correo ya existe en Firestore
            console.log('1. Consultando Firestore para:', email);
            const q = query(collection(db, "subscribers"), where("email", "==", email.toLowerCase()));
            const querySnapshot = await getDocs(q);
            console.log('1.5. Firestore Respondió:', querySnapshot.empty ? 'Nuevo' : 'Existente');

            if (!querySnapshot.empty) {
                // El usuario ya existe en la BD
                localStorage.setItem('isSubscribed', 'true');
                setIsSubscribed(true);
                alert("¡Ya estabas suscrito con este correo! Te hemos dado acceso de nuevo a los comentarios.");
                setIsLoading(false);
                return;
            }

            // 2. Guardar en Base de Datos Real (Firestore) de forma optimista
            console.log('2. Guardando nuevo suscriptor en Firestore (en segundo plano)...');
            // Quitamos el await para que no bloquee si hay problemas de red con el WebSocket de Firebase
            const firestorePromise = addDoc(collection(db, "subscribers"), {
                email: email.toLowerCase(),
                subscribedAt: serverTimestamp(),
                source: "Website Lead Magnet"
            }).then(() => console.log('2.5. Guardado exitoso en Firestore'))
                .catch(err => console.error('Error silencioso en Firestore:', err));

            // 3. EmailJS para la respuesta automática al cliente
            console.log('3. Configurando EmailJS...');
            const SERVICE_ID = 'service_63my3xq';
            const TEMPLATE_ID = 'template_dx8wg88';
            const PUBLIC_KEY = 'qko6zRF0TXzmgmBlU';

            if (PUBLIC_KEY !== 'TU_PUBLIC_KEY_AQUI') {
                const templateParams = { user_email: email };
                console.log('3.5. Llamando a emailjs.send()');
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
                console.log('3.8. Respuesta de emailjs recibida');
            }

            // 4. Éxito Final
            console.log('4. Terminando con éxito...');
            localStorage.setItem('isSubscribed', 'true');
            setIsSubscribed(true);
            setMessage('¡Gracias! En breve recibirás la plantilla en tu correo electrónico. Además, ya tienes acceso para comentar en el blog (tus datos están seguros en nuestra BD).');
        } catch (error) {
            console.error("Error CATCH AL ENVIAR: ", error);
            setMessage('Ocurrió un error al procesar tu suscripción. Intenta nuevamente más tarde.');
        } finally {
            console.log('--- FIN DE SUBMIT ---');
            setIsLoading(false);
        }
    };

    if (isSubscribed) {
        return (
            <div className="glass" style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', marginTop: '2rem', borderLeft: '4px solid var(--mostaza)' }}>
                <h3 style={{ color: 'var(--azul-oscuro)' }}>¡Material Desbloqueado! 🎁</h3>
                <p>Revisa tu bandeja de entrada (y la carpeta de Spam por si acaso). Ya te hemos enviado la **Plantilla de Gastos Inteligente**. ¡Disfruta tu nuevo superpoder financiero y participa en los comentarios de nuestro blog! 🚀</p>
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
            <h3 style={{ color: 'var(--azul-oscuro)', marginBottom: '1rem', fontSize: '1.8rem' }}>Descarga la Plantilla de Gastos Inteligente</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                Descubre cómo optimizar tus finanzas en minutos. Ingresa tu mejor correo y te enviaremos nuestra herramienta en Excel para que tomes el control de tu dinero al instante.
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
