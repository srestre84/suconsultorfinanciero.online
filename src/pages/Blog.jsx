import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogData } from '../data/blogData';
import Newsletter from '../components/Newsletter';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Helmet>
                <title>Blog Financiero | Su Consultor Financiero</title>
                <meta name="description" content="Aprende sobre crédito hipotecario, finanzas personales y estrategias de inversión con nuestro blog especializado." />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://suconsultorfinanciero.online/blog" />
                <meta property="og:title" content="Blog Financiero | Educación y Estrategia" />
                <meta property="og:description" content="Artículos y guías para tomar mejores decisiones con tu dinero y entender el sistema financiero colombiano." />
                <meta property="og:image" content="https://suconsultorfinanciero.online/logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://suconsultorfinanciero.online/blog" />
                <meta property="twitter:title" content="Blog Financiero | Educación y Estrategia" />
                <meta property="twitter:description" content="Artículos y guías para tomar mejores decisiones con tu dinero." />
                <meta property="twitter:image" content="https://suconsultorfinanciero.online/logo.png" />
            </Helmet>

            <section className="section-padding container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="animate-fade-in delay-1" style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem' }}>
                        Educación Financiera
                    </h1>
                    <p className="animate-fade-in delay-2" style={{ maxWidth: '800px', margin: '1rem auto', fontSize: '1.2rem' }}>
                        Artículos, guías y consejos para tomar mejores decisiones con tu dinero.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {blogData.map((post) => (
                        <div key={post.id} className="glass shadow-hover" style={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                                    {post.date} • Por {post.author}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--azul-oscuro)' }}>
                                    {post.title}
                                </h3>
                                <p style={{ fontSize: '1rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                                    {post.excerpt}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="btn btn-outline"
                                        style={{ padding: '0.5rem 1rem' }}
                                    >
                                        Leer artículo completo
                                    </Link>
                                    
                                    {/* Compartir */}
                                    <div className="prop-share" style={{ borderTop: 'none', padding: 0, margin: 0 }}>
                                        <div className="prop-share-btns">
                                            <button 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    const shareUrl = `${window.location.origin}/blog/${post.id}`;
                                                    const shareText = `¡Mira este artículo! ${post.title}`;
                                                    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
                                                }} 
                                                title="Compartir en WhatsApp" 
                                                className="prop-share-btn prop-share-btn--ws"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z"/></svg>
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    const shareUrl = `${window.location.origin}/blog/${post.id}`;
                                                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
                                                }} 
                                                title="Compartir en Facebook" 
                                                className="prop-share-btn prop-share-btn--fb"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    const shareUrl = `${window.location.origin}/blog/${post.id}`;
                                                    const shareText = `¡Mira este artículo! "${post.title}" - Su Consultor Financiero:`;
                                                    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                                                    alert('¡Enlace y descripción copiados al portapapeles!');
                                                }} 
                                                title="Copiar enlace" 
                                                className="prop-share-btn prop-share-btn--copy"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-padding container">
                <Newsletter />
            </section>
        </main>
    );
}

export default Blog;
