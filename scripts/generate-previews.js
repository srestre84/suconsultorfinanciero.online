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

// Función para generar una página estática para una ruta
function generatePage(routePath, title, description, image, url) {
    const targetDir = path.join(distDir, ...routePath.split('/'));
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    let customHtml = indexHtml;
    
    // Reemplazar Meta Tags de Open Graph
    customHtml = customHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`);
    customHtml = customHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);
    customHtml = customHtml.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${image}" />`);
    customHtml = customHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);

    // Reemplazar Meta Tags de Twitter
    customHtml = customHtml.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${title}" />`);
    customHtml = customHtml.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${description}" />`);
    customHtml = customHtml.replace(/<meta property="twitter:image" content=".*?" \/>/, `<meta property="twitter:image" content="${image}" />`);
    customHtml = customHtml.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${url}" />`);

    // Reemplazar Title Tag
    customHtml = customHtml.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    
    // Reemplazar Meta Description General
    customHtml = customHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`);

    fs.writeFileSync(path.join(targetDir, 'index.html'), customHtml);
    console.log(`Página generada: ${routePath}`);
}

async function start() {
    console.log('--- Iniciando generación de previews para redes sociales ---');

    // 1. Cargar datos de Blog
    // Usamos una forma rústica de importar para evitar problemas de dependencias en el script
    const blogFileContent = fs.readFileSync(path.join(rootDir, 'src/data/blogData.js'), 'utf-8');
    // Extraer el array usando una evaluación simple (solo funciona si el archivo es data pura)
    // Pero mejor usamos import dinámico ya que estamos en un entorno que lo soporta
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

    // 3. Cargar datos de Servicios (Simulando export de Services.jsx)
    // Como servicesData está en el componente, lo definimos aquí o lo extraemos si estuviera en un archivo aparte.
    // Por simplicidad y consistencia, lo definiremos aquí basándonos en Services.jsx
    const services = [
        { id: "libre-inversion", title: "Crédito de libre inversión o compra de cartera", description: "Tasas competitivas y plazos desde 36 meses hasta 72 meses sin codeudor." },
        { id: "inmuebles", title: "Crédito para inmuebles", description: "Asesoría integral para financiación de tu futuro hogar o vivienda de inversión." },
        { id: "vehiculo", title: "Crédito de vehículo y libranza", description: "Adquiere el vehículo de tus sueños con planes de pago personalizados." },
        { id: "constructor", title: "Crédito constructor individual", description: "Financia la construcción de tu vivienda a medida en condominios." }
    ];

    for (const service of services) {
        const title = `${service.title} | Servicios`;
        const description = service.description;
        const image = "https://suconsultorfinanciero.online/logo.png";
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


    // 6. Generación de sitemap.xml y robots.txt
    console.log('--- Generando sitemap.xml y robots.txt ---');
    const domain = 'https://suconsultorfinanciero.online';
    const sitemapUrls = [
        '/',
        '/blog',
        '/calculadora',
        '/inmuebles',
        '/sobre-mi',
        '/privacidad',
        '/terminos',
        '/valorar'
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
    for (const service of services) {
        sitemapUrls.push(`/servicios/${service.id}`);
    }

    // Agregar términos del diccionario
    for (const item of dictionaryData) {
        sitemapUrls.push(`/diccionario/${item.id}`);
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

    console.log('--- Generación completada con éxito ---');
}

start().catch(err => {
    console.error('Error en el script de generación:', err);
    process.exit(1);
});
