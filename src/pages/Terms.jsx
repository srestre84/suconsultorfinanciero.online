import { Helmet } from 'react-helmet-async';

const Terms = () => {
    return (
        <main className="container" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', color: '#444' }}>
            <Helmet>
                <title>Términos y Condiciones | Su Consultor Financiero</title>
                <meta name="description" content="Lee nuestros términos y condiciones de uso para entender el marco legal de nuestras asesorías financieras." />
            </Helmet>
            <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                <h1 style={{ color: 'var(--azul-oscuro)', marginBottom: '2rem', fontSize: '2.2rem' }}>Términos y Condiciones</h1>

                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>1. Aceptación de los Términos</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Al acceder y utilizar el sitio web SuConsultorFinanciero.online, usted acepta estar sujeto a estos Términos y Condiciones de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable de cumplir con las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>2. Uso de la Licencia</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de SuConsultorFinanciero.online solo para uso transitorio personal y no comercial.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>3. Exención de Responsabilidad Financiera</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    La información proporcionada en este sitio web tiene propósitos meramente educativos e informativos y no constituye asesoría financiera, legal o contable formal. La toma de decisiones basada en la información del sitio es bajo su propio riesgo. Si requiere un plan de acción, debe solicitar explícitamente una sesión de consultoría personalizada.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>4. Limitaciones</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    En ningún caso SuConsultorFinanciero.online o sus proveedores serán responsables de los daños (incluidos, entre otros, daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales en el sitio web.
                </p>

                <h3 style={{ color: 'var(--azul-oscuro)', marginTop: '2rem', marginBottom: '1rem' }}>5. Modificaciones</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Podemos revisar estos términos de servicio para nuestro sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.
                </p>
            </div>
        </main>
    );
};

export default Terms;
