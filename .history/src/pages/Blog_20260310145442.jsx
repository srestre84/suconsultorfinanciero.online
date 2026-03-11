import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import Newsletter from '../components/Newsletter';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <section className="section-padding container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="animate-fade-in delay-1" style={{ color: 'var(--azul-oscuro)', fontSize: '2.5rem' }}>
                        Educación Financiera
                    </h2>
                    <p className="animate-fade-in delay-2" style={{ maxWidth: '800px', margin: '1rem auto', fontSize: '1.2rem' }}>
                        Artículos, guías y consejos para tomar mejores decisiones con tu dinero.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
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
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="btn btn-outline"
                                    style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}
                                >
                                    Leer artículo completo
                                </Link>
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
