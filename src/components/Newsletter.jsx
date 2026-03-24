import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import './Newsletter.css';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
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

        if (!consent) {
            setMessage('Debes aceptar el tratamiento de datos para suscribirte.');
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
                source: "Website Lead Magnet",
                consent: true,
                consent_date: new Date().toISOString()
            }).then(() => console.log('2.5. Guardado exitoso en Firestore'))
                .catch(err => console.error('Error silencioso en Firestore:', err));

            // 3. EmailJS para la respuesta automática al cliente
            console.log('3. Configurando EmailJS...');
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_63my3xq';
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dx8wg88';
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qko6zRF0TXzmgmBlU';

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
            <div className="newsletter-container">
                <div className="newsletter-blob-1"></div>
                <div className="newsletter-blob-2"></div>
                <div className="newsletter-content-wrapper">
                    <h3 className="newsletter-title" style={{color: 'var(--blanco-puro) !important'}}>¡Material Desbloqueado! 🎁</h3>
                    <p className="newsletter-desc">
                        Revisa tu bandeja de entrada (y la carpeta de Spam por si acaso). Ya te hemos enviado la <strong>Plantilla de Gastos Inteligente</strong>. ¡Disfruta tu nuevo superpoder financiero y participa en los comentarios de nuestro blog! 🚀
                    </p>
                    {message && message.includes('Nota') && (
                        <p className="newsletter-message" style={{ color: '#ffd700' }}>{message}</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="newsletter-container animate-fade-in delay-3">
            <div className="newsletter-blob-1"></div>
            <div className="newsletter-blob-2"></div>
            
            <div className="newsletter-badge">GRATIS</div>
            
            <div className="newsletter-content-wrapper">
                <h3 className="newsletter-title">Descarga la Plantilla de Gastos Inteligente</h3>
                <p className="newsletter-desc">
                    Descubre cómo optimizar tus finanzas en minutos. Ingresa tu mejor correo y te enviaremos nuestra herramienta en Excel para que tomes el control de tu dinero al instante.
                </p>

                <form onSubmit={handleSubmit} className="newsletter-form-container">
                    <div className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Tu mejor correo electrónico..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            className="newsletter-input"
                            required
                        />
                        <button
                            type="submit"
                            className="newsletter-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Enviando...' : 'Descargar Plantilla Ahora 👉'}
                        </button>
                    </div>
                    
                    <div className="newsletter-consent">
                        <input 
                            type="checkbox" 
                            id="newsletter-consent" 
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            required
                        />
                        <label htmlFor="newsletter-consent">
                            Acepto el tratamiento de mis datos y recibir promociones e información de productos según la <a href="/privacidad" target="_blank">Política de Privacidad</a>.
                        </label>
                    </div>
                </form>

                {message && (
                    <div className="newsletter-message" style={{ color: message.includes('error') ? '#ff6b6b' : '#a7f3d0' }}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Newsletter;
