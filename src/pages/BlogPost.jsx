import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogData } from '../data/blogData';
import Comments from '../components/Comments';

function BlogPost() {
    const { id } = useParams();
    const post = blogData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Artículo no encontrado</h2>
                <p style={{ margin: '1rem 0 2rem' }}>Parece que el artículo que buscas no existe.</p>
                <Link to="/blog" className="btn btn-primary">Volver al Blog</Link>
            </div>
        );
    }

    const currentUrl = `${window.location.origin}/blog/${post.id}`;

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
                {/* Asumimos que la imagen es una ruta base. En prod real sería una URL absoluta */}
                <meta property="og:image" content={`https://suconsultorfinanciero.online${post.imageUrl?.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={currentUrl} />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.excerpt} />
                <meta property="twitter:image" content={`https://suconsultorfinanciero.online${post.imageUrl?.startsWith('/') ? post.imageUrl : `/${post.imageUrl}`}`} />
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
