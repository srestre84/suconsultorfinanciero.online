import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogData } from '../data/blogData';
import { servicesData } from '../data/servicesData';
import Comments from '../components/Comments';

function BlogPost() {
    const { slug } = useParams();
    const post = blogData.find(p => p.slug === slug || p.id === parseInt(slug));
    const service = post ? servicesData.find(s => s.id === post.relatedService) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Artículo no encontrado</h2>
                <p style={{ margin: '1rem 0 2rem' }}>Parece que el artículo que buscas no existe.</p>
                <Link to="/blog" className="btn btn-primary">Volver al Blog</Link>
            </div>
        );
    }

    const currentUrl = `${window.location.origin}/blog/${post.slug || post.id}`;

    return (
        <main>
            <Helmet>
                <title>{post.title} | Su Consultor Financiero</title>
                <meta name="description" content={post.excerpt} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.imageUrl?.startsWith('http') ? post.imageUrl : `https://suconsultorfinanciero.online${post.imageUrl?.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.excerpt} />
                <meta property="twitter:image" content={post.imageUrl?.startsWith('http') ? post.imageUrl : `https://suconsultorfinanciero.online${post.imageUrl?.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}`} />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": currentUrl
                        },
                        "headline": post.title,
                        "description": post.excerpt,
                        "image": post.imageUrl?.startsWith('http') ? post.imageUrl : `https://suconsultorfinanciero.online${post.imageUrl?.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}`,
                        "author": {
                            "@type": "Person",
                            "name": post.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Su Consultor Financiero",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://suconsultorfinanciero.online/logo.png"
                            }
                        },
                        "datePublished": post.date
                    })}
                </script>
            </Helmet>

            <article className="section-padding container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Link to="/blog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--azul-oscuro)', textDecoration: 'none', fontWeight: 'bold' }}>
                        &larr; Volver al blog
                    </Link>

                    <header style={{ marginBottom: '2rem' }}>
                        <h1 style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                            {post.title}
                        </h1>
                        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: 'bold' }}>✍️ {post.author}</span>
                            <span>📅 {post.date}</span>
                            
                            {/* Compartir */}
                            <div className="prop-share" style={{ borderTop: 'none', padding: 0, margin: 0 }}>
                                <div className="prop-share-btns">
                                    <button 
                                        onClick={() => {
                                            const shareText = `¡Mira este artículo! ${post.title}`;
                                            window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`, '_blank');
                                        }} 
                                        title="Compartir en WhatsApp" 
                                        className="prop-share-btn prop-share-btn--ws"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                                    </button>
                                    <button 
                                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')} 
                                        title="Compartir en Facebook" 
                                        className="prop-share-btn prop-share-btn--fb"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                    </button>
                                    <button 
                                        onClick={() => {
                                            const shareText = `¡Mira este artículo! "${post.title}" - Su Consultor Financiero:`;
                                            navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
                                            alert('¡Enlace y descripción copiados al portapapeles!');
                                        }} 
                                        title="Copiar enlace con descripción" 
                                        className="prop-share-btn prop-share-btn--copy"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />

                    {/* El contenido HTML inyectado simulando un CMS */}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.8',
                            color: '#333'
                        }}
                    />

                    {/* Tarjeta de Venta Cruzada (Asesoría Relacionada) */}
                    {service ? (
                        <div 
                            className="glass shadow-hover animate-fade-in delay-2"
                            style={{
                                marginTop: '3rem',
                                padding: '2.5rem',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                textAlign: 'left'
                            }}
                        >
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    fontSize: '8rem',
                                    opacity: '0.06',
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                }}
                            >
                                {service.icon}
                            </div>
                            
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>{service.icon}</span>
                                <h3 style={{ color: 'var(--azul-oscuro)', margin: 0, fontSize: '1.6rem', fontWeight: '800' }}>
                                    ¿Necesitas ayuda con esto? Asesoría Especializada
                                </h3>
                            </div>
                            
                            <h4 style={{ color: 'var(--mostaza)', margin: 0, fontSize: '1.25rem', fontWeight: '700' }}>
                                {service.title}
                            </h4>
                            
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                                {service.description}
                            </p>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                                <a 
                                    href={`https://wa.me/573167443613?text=${encodeURIComponent(`Hola, leí tu artículo sobre "${post.title}" y me interesa el servicio de "${service.title}".`)}`}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: '#25D366',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        padding: '0.8rem 1.8rem',
                                        borderRadius: '30px',
                                        textDecoration: 'none',
                                        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: '#fff' }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                                    Asesoría por WhatsApp gratis
                                </a>
                                <Link 
                                    to={`/servicios/${service.id}`}
                                    className="btn"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontWeight: 'bold',
                                        padding: '0.8rem 1.8rem',
                                        borderRadius: '30px',
                                        textDecoration: 'none',
                                        border: '1px solid var(--azul-oscuro)',
                                        color: 'var(--azul-oscuro)',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    Ver detalles del servicio
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className="glass shadow-hover animate-fade-in delay-2"
                            style={{
                                marginTop: '3rem',
                                padding: '2.5rem',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.2rem',
                                textAlign: 'center',
                                alignItems: 'center',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <h3 style={{ color: 'var(--azul-oscuro)', margin: 0, fontSize: '1.6rem', fontWeight: '800' }}>
                                ¿Tienes dudas sobre tu caso financiero?
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: 0, maxWidth: '600px' }}>
                                Agenda un diagnóstico gratuito con nosotros. Analizaremos tu situación financiera bajo una lupa experta para encontrar la estrategia ideal.
                            </p>
                            <a 
                                href={`https://wa.me/573167443613?text=${encodeURIComponent(`Hola, leí tu artículo "${post.title}" y me gustaría agendar una consultoría financiera para evaluar mi caso.`)}`}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: 'var(--azul-oscuro)',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 15px rgba(0, 43, 91, 0.3)',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                📱 Diagnóstico Financiero Gratis
                            </a>
                        </div>
                    )}
                </div>
            </article>

            {/* Componente de Comentarios Integrado Aquí */}
            <section className="container" style={{ paddingBottom: '4rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Comments postId={post.id} />
                </div>
            </section>
        </main>
    );
}

export default BlogPost;
