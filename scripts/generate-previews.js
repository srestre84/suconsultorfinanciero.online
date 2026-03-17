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
        const url = `https://suconsultorfinanciero.online/blog/${post.id}`;
        
        generatePage(`blog/${post.id}`, title, description, image, url);
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

    console.log('--- Generación completada con éxito ---');
}

start().catch(err => {
    console.error('Error en el script de generación:', err);
    process.exit(1);
});
