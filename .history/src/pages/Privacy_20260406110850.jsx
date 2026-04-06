import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    return (
        <main className="container" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', color: '#444' }}>
            <Helmet>
                <title>Política de Privacidad | Su Consultor Financiero</title>
                <meta name="description" content="Conoce cómo protegemos tus datos y garantizamos tu privacidad y habeas data." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://suconsultorfinanciero.online/privacidad" />
                <meta property="og:title" content="Política de Privacidad | Su Consultor Financiero" />
                <meta property="og:description" content="Conoce cómo protegemos tus datos y garantizamos tu privacidad y habeas data." />
                <meta property="og:image" content="https://suconsultorfinanciero.online/logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://suconsultorfinanciero.online/privacidad" />
                <meta property="twitter:title" content="Política de Privacidad | Su Consultor Financiero" />
                <meta property="twitter:description" content="Conoce cómo protegemos tus datos y garantizamos tu privacidad y habeas data." />
                <meta property="twitter:image" content="https://suconsultorfinanciero.online/logo.png" />
            </Helmet>
            <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                <h1 style={{ color: 'var(--azul-oscuro)', marginBottom: '2rem', fontSize: '2.2rem' }}>Política de Privacidad y Tratamiento de Datos</h1>

                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>1. Filosofía de "Zero-Trust" y No Acumulación de Datos</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Nuestra plataforma opera bajo una arquitectura de <strong>"Zero-Trust" (Confianza Cero)</strong>. Esto significa que <strong>no almacenamos, acumulamos ni conservamos datos sensibles de identificación personal</strong> en nuestros servidores tras el procesamiento de simulaciones o el uso de nuestras calculadoras.
                </p>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Cualquier información que usted ingrese en nuestros formularios se procesa de manera efímera para el fin solicitado y se elimina automáticamente o permanece bajo su control local en su navegador. No mantenemos bases de datos con su información privada.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>2. Tratamiento Exclusivo y Uso de la Información</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    La información que recopilamos de usted tiene como único y exclusivo fin:
                </p>
                <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li><strong>Procesamiento local:</strong> La información se utiliza únicamente para generar la simulación que usted requiere en tiempo real.</li>
                    <li><strong>Personalizar su experiencia:</strong> Ajustar las herramientas a sus necesidades individuales de asesoría sin guardar los datos.</li>
                    <li><strong>Mejorar nuestro sitio web:</strong> Análisis de uso anónimo para optimizar la calidad del servicio.</li>
                    <li><strong>Canales Voluntarios:</strong> Solo si usted decide contactarnos vía WhatsApp o correo, de forma manual, conservaremos dicha comunicación para atender su solicitud.</li>
                </ul>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>3. Protección, Confidencialidad y Habeas Data</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Al no recolectar bases de datos masivas, garantizamos el máximo estándar de <strong>Habeas Data</strong>. Sus datos son tratados con estricta confidencialidad durante el tiempo de la sesión y <strong>no son vendidos, intercambiados ni transferidos</strong> a terceros.
                </p>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    En caso de ser perfilado de manera exitosa para un producto de crédito, <strong>la autorización de centrales de riesgo (Habeas Data) y demás documentos de formalización se firmarán o aceptarán de forma directa con la entidad bancaria o financiera correspondiente</strong> en los canales oficiales de la misma. Nosotros no fungimos como central ni emitimos créditos de forma directa.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>4. Uso de Cookies y Almacenamiento Local</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Nuestro sitio web puede utilizar tecnologías locales de su navegador (como "LocalStorage" y variables de sesión) de forma inofensiva para proporcionar funcionalidades como el sistema de comentarios simulados, recordar su estado de suscripción de manera local en su máquina y mejorar su experiencia general de usuario evitando reinyectar los mismos datos una y otra vez.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>5. Consentimiento</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Al utilizar nuestro sitio web, usted acepta nuestra política de privacidad. Todo el tratamiento se rige bajo la buena fe, las políticas y leyes del marco aplicable en la recolección internacional de los datos. Para más inquietudes contáctenos a nuestro modelo oficial de gestión de correo o canal empresarial de mensajería (WhatsApp).
                </p>
            </div>
        </main>
    );
};

export default Privacy;
