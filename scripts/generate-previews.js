import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html no encontrado. Ejecuta "npm run build" primero.');
    process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

function escapeAttr(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\r?\n|\r/g, ' ')
        .trim();
}

function escapeTitle(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\r?\n|\r/g, ' ')
        .trim();
}

// Función para detectar dimensiones de imágenes locales (JPEG y PNG)
function getImageDimensions(imageRelPath) {
    try {
        const cleanPath = imageRelPath.replace(/^https?:\/\/[^\/]+/, '').replace(/^\//, '');
        const localPath = path.join(rootDir, 'public', cleanPath);
        if (fs.existsSync(localPath)) {
            const buffer = fs.readFileSync(localPath);
            // PNG
            if (buffer.length > 24 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
                return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
            }
            // JPEG
            if (buffer.length > 4 && buffer[0] === 0xFF && buffer[1] === 0xD8) {
                let offset = 2;
                while (offset < buffer.length) {
                    if (buffer[offset] !== 0xFF) break;
                    const marker = buffer[offset + 1];
                    if (marker === 0xC0 || marker === 0xC2) {
                        return { width: buffer.readUInt16BE(offset + 7), height: buffer.readUInt16BE(offset + 5) };
                    }
                    offset += 2 + buffer.readUInt16BE(offset + 2);
                }
            }
        }
    } catch (e) {}
    return { width: 1200, height: 630 };
}

// Función para generar una página estática para una ruta
function generatePage(routePath, title, description, image, url) {
    const targetDir = path.join(distDir, ...routePath.split('/'));
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const encodedImage = encodeURI(image);
    const safeTitle = escapeAttr(title);
    const safeDescription = escapeAttr(description);
    const safeUrl = escapeAttr(url);

    let imageType = 'image/jpeg';
    const lowerImg = encodedImage.toLowerCase();
    if (lowerImg.endsWith('.png')) {
        imageType = 'image/png';
    } else if (lowerImg.endsWith('.webp')) {
        imageType = 'image/webp';
    } else if (lowerImg.endsWith('.gif')) {
        imageType = 'image/gif';
    }

    // Obtener dimensiones reales para optimizar la tarjeta en WhatsApp / Facebook
    const dims = getImageDimensions(image);
    const imgWidth = dims.width || 1200;
    const imgHeight = dims.height || 630;

    let customHtml = indexHtml;
    
    // Reemplazar Meta Tags de Open Graph
    customHtml = customHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${safeTitle}" />`);
    customHtml = customHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${safeDescription}" />`);
    customHtml = customHtml.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${encodedImage}" />`);
    customHtml = customHtml.replace(/<meta property="og:image:secure_url" content=".*?" \/>/, `<meta property="og:image:secure_url" content="${encodedImage}" />`);
    customHtml = customHtml.replace(/<meta property="og:image:type" content=".*?" \/>/, `<meta property="og:image:type" content="${imageType}" />`);
    customHtml = customHtml.replace(/<meta property="og:image:width" content=".*?" \/>/, `<meta property="og:image:width" content="${imgWidth}" />`);
    customHtml = customHtml.replace(/<meta property="og:image:height" content=".*?" \/>/, `<meta property="og:image:height" content="${imgHeight}" />`);
    customHtml = customHtml.replace(/<meta property="og:image:alt" content=".*?" \/>/, `<meta property="og:image:alt" content="${safeTitle}" />`);
    customHtml = customHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${safeUrl}" />`);

    // Asegurar og:site_name
    if (!customHtml.includes('<meta property="og:site_name"')) {
        customHtml = customHtml.replace(/<meta property="og:type"/, `<meta property="og:site_name" content="Su Consultor Financiero" />\n    <meta property="og:type"`);
    }

    // Reemplazar Meta Tags de Twitter
    customHtml = customHtml.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${safeTitle}" />`);
    customHtml = customHtml.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${safeDescription}" />`);
    customHtml = customHtml.replace(/<meta property="twitter:image" content=".*?" \/>/, `<meta property="twitter:image" content="${encodedImage}" />`);
    customHtml = customHtml.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${safeUrl}" />`);

    // Reemplazar Title Tag
    customHtml = customHtml.replace(/<title>.*?<\/title>/, `<title>${escapeTitle(title)}</title>`);
    
    // Reemplazar Meta Description General
    customHtml = customHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${safeDescription}" />`);

    // Agregar o actualizar enlace canónico
    if (customHtml.includes('<link rel="canonical"')) {
        customHtml = customHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${safeUrl}" />`);
    } else {
        customHtml = customHtml.replace('</head>', `    <link rel="canonical" href="${safeUrl}" />\n</head>`);
    }

    // 1. Escribir versión directorio con index.html (para peticiones /ruta/)
    fs.writeFileSync(path.join(targetDir, 'index.html'), customHtml);

    // 2. Escribir versión plana .html (para peticiones /ruta sin barra en GitHub Pages, evitando 301)
    const flatHtmlPath = path.join(distDir, `${routePath}.html`);
    const flatDir = path.dirname(flatHtmlPath);
    if (!fs.existsSync(flatDir)) {
        fs.mkdirSync(flatDir, { recursive: true });
    }
    fs.writeFileSync(flatHtmlPath, customHtml);

    console.log(`Página generada: ${routePath} (${imgWidth}x${imgHeight})`);
}

async function start() {
    console.log('--- Iniciando generación de previews para redes sociales ---');

    // 0. Generar páginas principales de categoría
    generatePage(
        'blog',
        'Blog de Finanzas Personales, Créditos e Inmuebles | Su Consultor Financiero',
        'Artículos, guías y consejos expertos sobre compra de cartera, crédito hipotecario, libranzas y finanzas en Colombia.',
        'https://suconsultorfinanciero.online/share-preview.png',
        'https://suconsultorfinanciero.online/blog'
    );
    generatePage(
        'inmuebles',
        'Inmuebles en Venta y Oportunidades | Su Consultor Financiero',
        'Explora nuestro catálogo de inmuebles destacados en Medellín y Antioquia. Asesoría completa en financiación.',
        'https://suconsultorfinanciero.online/services-preview.png',
        'https://suconsultorfinanciero.online/inmuebles'
    );
    generatePage(
        'servicios',
        'Servicios de Asesoría Financiera | Su Consultor Financiero',
        'Soluciones profesionales en Crédito Hipotecario, Libre Inversión, Compra de Cartera, Libranzas y Construcción.',
        'https://suconsultorfinanciero.online/share-preview.png',
        'https://suconsultorfinanciero.online/servicios'
    );
    generatePage(
        'diccionario',
        'Diccionario Financiero | Su Consultor Financiero',
        'Glosario financiero claro y sencillo para entender todos los términos de créditos, tasas e inversiones en Colombia.',
        'https://suconsultorfinanciero.online/dictionary-preview.png',
        'https://suconsultorfinanciero.online/diccionario'
    );
    generatePage(
        'sobre-mi',
        'Sobre Mí - Sebastián Restrepo | Su Consultor Financiero',
        'Conoce a Sebastián Restrepo, tu consultor financiero experto en Medellín y Antioquia. Más de 10 años acompañando tus metas.',
        'https://suconsultorfinanciero.online/sebastian-restrepo.jpg',
        'https://suconsultorfinanciero.online/sobre-mi'
    );
    generatePage(
        'privacidad',
        'Política de Privacidad | Su Consultor Financiero',
        'Conoce cómo protegemos y gestionamos tus datos personales bajo la legislación colombiana (Ley 1581 de 2012).',
        'https://suconsultorfinanciero.online/share-preview.png',
        'https://suconsultorfinanciero.online/privacidad'
    );
    generatePage(
        'terminos',
        'Términos y Condiciones | Su Consultor Financiero',
        'Términos y condiciones de uso de la plataforma web de Su Consultor Financiero en Colombia.',
        'https://suconsultorfinanciero.online/share-preview.png',
        'https://suconsultorfinanciero.online/terminos'
    );
    generatePage(
        'valorar',
        'Califica Nuestro Servicio | Su Consultor Financiero',
        'Déjanos tu opinión y valoración sobre la asesoría financiera recibida.',
        'https://suconsultorfinanciero.online/share-preview.png',
        'https://suconsultorfinanciero.online/valorar'
    );

    // 1. Cargar datos de Blog
    const blogFileContent = fs.readFileSync(path.join(rootDir, 'src/data/blogData.js'), 'utf-8');
    const { blogData } = await import('../src/data/blogData.js');

    for (const post of blogData) {
        const title = `${post.title} | Su Consultor Financiero`;
        const description = post.excerpt;
        const image = post.imageUrl.startsWith('http') ? post.imageUrl : `https://suconsultorfinanciero.online${post.imageUrl}`;
        
        // Generar versión con ID numérico (compatibilidad)
        const urlId = `https://suconsultorfinanciero.online/blog/${post.id}`;
        generatePage(`blog/${post.id}`, title, description, image, urlId);

        // Generar versión con Slug amigable (SEO)
        if (post.slug) {
            const urlSlug = `https://suconsultorfinanciero.online/blog/${post.slug}`;
            generatePage(`blog/${post.slug}`, title, description, image, urlSlug);
        }
    }

    // 2. Cargar datos de Inmuebles
    const { properties } = await import('../src/data/properties.js');

    for (const prop of properties) {
        const title = `${prop.titulo} | Inmuebles`;
        const description = prop.descripcion.substring(0, 160) + '...';
        const image = prop.fotos[0].startsWith('http') ? prop.fotos[0] : `https://suconsultorfinanciero.online${prop.fotos[0]}`;
        const url = `https://suconsultorfinanciero.online/inmuebles/${prop.id}`;
        
        generatePage(`inmuebles/${prop.id}`, title, description, image, url);
    }

    // 3. Cargar datos de Servicios directamente desde servicesData.js
    const { servicesData } = await import('../src/data/servicesData.js');

    for (const service of servicesData) {
        const title = `${service.title} | Servicios | Su Consultor Financiero`;
        const description = service.description.length > 160 ? service.description.substring(0, 157) + '...' : service.description;
        const image = service.image?.startsWith('http') ? service.image : `https://suconsultorfinanciero.online/${service.image || 'share-preview.png'}`;
        const url = `https://suconsultorfinanciero.online/servicios/${service.id}`;
        
        generatePage(`servicios/${service.id}`, title, description, image, url);
    }

    // 4. Cargar datos de Diccionario
    const { dictionaryData } = await import('../src/data/dictionaryData.js');

    for (const item of dictionaryData) {
        const title = `${item.term} | Diccionario Financiero`;
        const description = item.definition.substring(0, 160);
        const image = "https://suconsultorfinanciero.online/logo.png";
        const url = `https://suconsultorfinanciero.online/diccionario/${item.id}`;
        
        generatePage(`diccionario/${item.id}`, title, description, image, url);
    }

    // 5. Página de Calculadora
    generatePage(
        'calculadora',
        'Calculadora de Tasas de Interés | Su Consultor Financiero',
        'Convierte fácilmente entre tasas Efectiva Anual (EA), Mes Vencido (MV), Trimestre Vencido y más. La herramienta esencial para tus finanzas.',
        'https://suconsultorfinanciero.online/logo.png',
        'https://suconsultorfinanciero.online/calculadora'
    );


    // 6. Cargar datos de Notas Financieras
    const { notesData } = await import('../src/data/notesData.js');

    // Generar página principal de galería de notas
    generatePage('notas', 'Notas Motivacionales & Consejos Financieros | Su Consultor Financiero', 'Colección de notas motivacionales y consejos financieros para compartir en redes sociales.', 'https://suconsultorfinanciero.online/logo.png', 'https://suconsultorfinanciero.online/notas');

    for (const note of notesData) {
        const title = `${note.title} | Su Consultor Financiero`;
        const description = `"${note.quote}" - Asesoría financiera profesional en Colombia.`;
        const image = note.imageUrl?.startsWith('http') ? note.imageUrl : `https://suconsultorfinanciero.online${note.imageUrl?.startsWith('/') ? note.imageUrl : `/${note.imageUrl}`}`;
        const url = `https://suconsultorfinanciero.online/notas/${note.slug}`;

        generatePage(`notas/${note.slug}`, title, description, image, url);
    }

    // --- Generación de sitemap.xml y robots.txt ---
    const domain = 'https://suconsultorfinanciero.online';
    const sitemapUrls = [
        '/',
        '/blog',
        '/calculadora',
        '/inmuebles',
        '/sobre-mi',
        '/privacidad',
        '/terminos',
        '/valorar',
        '/notas'
    ];

    // Agregar artículos de blog (usando slugs)
    for (const post of blogData) {
        sitemapUrls.push(`/blog/${post.slug || post.id}`);
    }

    // Agregar inmuebles
    for (const prop of properties) {
        sitemapUrls.push(`/inmuebles/${prop.id}`);
    }

    // Agregar servicios
    for (const service of servicesData) {
        sitemapUrls.push(`/servicios/${service.id}`);
    }

    // Agregar términos del diccionario
    for (const item of dictionaryData) {
        sitemapUrls.push(`/diccionario/${item.id}`);
    }

    // Agregar notas financieras
    for (const note of notesData) {
        sitemapUrls.push(`/notas/${note.slug}`);
    }

    // Generar XML del Sitemap
    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    const today = new Date().toISOString().split('T')[0];
    
    for (const urlPath of sitemapUrls) {
        const fullUrl = `${domain}${urlPath === '/' ? '' : urlPath}`;
        let priority = '0.5';
        let changefreq = 'monthly';
        
        if (urlPath === '/') {
            priority = '1.0';
            changefreq = 'daily';
        } else if (urlPath === '/blog' || urlPath === '/inmuebles' || urlPath.startsWith('/servicios/')) {
            priority = '0.8';
            changefreq = 'weekly';
        } else if (urlPath.startsWith('/blog/') || urlPath.startsWith('/inmuebles/')) {
            priority = '0.7';
            changefreq = 'weekly';
        }
        
        xmlContent += '  <url>\n';
        xmlContent += `    <loc>${fullUrl}</loc>\n`;
        xmlContent += `    <lastmod>${today}</lastmod>\n`;
        xmlContent += `    <changefreq>${changefreq}</changefreq>\n`;
        xmlContent += `    <priority>${priority}</priority>\n`;
        xmlContent += '  </url>\n';
    }
    xmlContent += '</urlset>\n';
    
    // Escribir a dist y a public
    const publicDir = path.join(rootDir, 'public');
    
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xmlContent);
    if (fs.existsSync(publicDir)) {
        fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xmlContent);
    }
    console.log('sitemap.xml generado con éxito en dist y public.');

    // Generar robots.txt
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent);
    if (fs.existsSync(publicDir)) {
        fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
    }
    console.log('robots.txt generado con éxito en dist y public.');

    // Generar CNAME
    fs.writeFileSync(path.join(distDir, 'CNAME'), 'suconsultorfinanciero.online\n');
    console.log('CNAME generado con éxito en dist.');

    console.log('--- Generación completada con éxito ---');
}

start().catch(err => {
    console.error('Error en el script de generación:', err);
    process.exit(1);
});
