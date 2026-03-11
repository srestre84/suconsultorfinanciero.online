import React from 'react';

const Privacy = () => {
    return (
        <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#444' }}>
            <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
                <h1 style={{ color: 'var(--azul-oscuro)', marginBottom: '2rem', fontSize: '2.5rem' }}>Política de Privacidad y Tratamiento de Datos</h1>

                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>1. Información que Recopilamos</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Al suscribirse a nuestro boletín o contactarnos para una sesión de consultoría, podemos solicitar que nos proporcione información de identificación personal que podemos utilizar para contactarlo y brindarle el servicio solicitado. Esta información puede incluir, pero no se limita a: su nombre, dirección de correo electrónico y número de teléfono.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>2. Tratamiento Exclusivo y Uso de la Información</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    La información que recopilamos de usted tiene como único y exclusivo fin:
                </p>
                <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li><strong>Medir su perfil y viabilidad financiera</strong> para determinar la factibilidad de los diferentes productos de crédito.</li>
                    <li>Personalizar su experiencia y responder a sus necesidades individuales de asesoría.</li>
                    <li>Mejorar nuestro sitio web y la calidad del servicio al cliente.</li>
                    <li>Enviar correos electrónicos periódicos sobre publicaciones del blog, siempre con opción de darse de baja.</li>
                </ul>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>3. Protección, Confidencialidad y Habeas Data</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Sus datos son estrictamente confidenciales y <strong>no serán vendidos, intercambiados, compartidos ni transferidos</strong> a bases de datos de terceros bajo ninguna circunstancia. La información recolectada se utiliza meramente a nivel de análisis interno.
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
        </div>
    );
};

export default Privacy;
