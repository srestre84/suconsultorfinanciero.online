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

    const currentUrl = `https://suconsultorfinanciero.online/#/blog/${post.id}`;

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
                        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontWeight: 'bold' }}>✍️ {post.author}</span>
                            <span>📅 {post.date}</span>
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
