// ============================================================
// DATOS DE INMUEBLES EN VENTA
// Agregar nuevas propiedades al array 'properties'
// ============================================================

export const properties = [
    {
        id: 'apto-la-inmaculada-itagui',
        tipo: 'Apartamento',
        titulo: 'Apartamento en venta — Ed. La Inmaculada',
        estado: 'Disponible',
        precio: 290000000,
        precioFormateado: '$290.000.000',
        ubicacion: {
            direccion: 'Cll 51 # 48-40, Apto 402',
            edificio: 'Edificio La Inmaculada',
            barrio: 'Parque Principal',
            ciudad: 'Itagüí',
            departamento: 'Antioquia',
            referencia: 'Diagonal a la Gran Manzana, a una cuadra del parque principal',
        },
        caracteristicas: {
            area: 60,
            habitaciones: 2,
            banos: 2,
            piso: 4,
            estrato: 3,
            parqueadero: false,
            balcon: true,
            acabados: 'Full acabados',
            administracion: null,
            predialAnual: 665000,
            anoPredial: 2025,
        },
        descripcion:
            'Hermoso apartamento en pleno corazón de Itagüí, ubicado a una cuadra del parque principal. ' +
            'Cuenta con excelente iluminación natural, full acabados, balcón con vista abierta y una distribución ' +
            'funcional ideal para parejas o familias pequeñas. Zona de alta valorización con fácil acceso a comercio, ' +
            'transporte y servicios.',
        etiquetas: ['Full acabados', 'Balcón', 'Zona central', 'Estrato 3'],
        fotos: [
            '/inmuebles/la-inmaculada/sala-comedor.png',
            '/inmuebles/la-inmaculada/cocina.png',
            '/inmuebles/la-inmaculada/habitacion.png',
            '/inmuebles/la-inmaculada/bano.png',
            '/inmuebles/la-inmaculada/balcon.png',
        ],
        contacto: {
            whatsapp: '573167443613', // Actualizar con número real
            texto: '¡Hola! Me interesa el apartamento en el Edificio La Inmaculada, Itagüí. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-14',
    },
    {
        id: 'casa-abedules-itagui',
        tipo: 'Casa',
        titulo: 'Casa en venta — Unidad Abedules, Suramérica',
        estado: 'Disponible',
        precio: 980000000,
        precioFormateado: '$980.000.000',
        ubicacion: {
            direccion: 'Unidad Abedules',
            barrio: 'Suramérica',
            ciudad: 'Itagüí',
            departamento: 'Antioquia',
            referencia: 'Unidad cerrada en el sector de Suramérica, Itagüí',
        },
        caracteristicas: {
            area: 163,
            niveles: 2,
            habitaciones: 4,
            banos: 5,
            parqueadero: 'Doble lineal',
            jardin: true,
            salaComedor: true,
            cocinaIntegral: true,
            estrato: null,
            administracion: null,
        },
        amenidadesUnidad: [
            'Piscina',
            'Portería 24 horas',
            'Salón social',
            'Turco',
            'Sauna',
        ],
        descripcion:
            'Espectacular casa de 163 m² distribuidos en dos niveles, ubicada en la exclusiva Unidad Abedules en el ' +
            'sector de Suramérica, Itagüí. Cuenta con 4 habitaciones, 5 baños, jardín privado, sala comedor, cocina ' +
            'integral y parqueadero doble lineal. La unidad ofrece piscina, portería 24 horas, salón social, turco y sauna, ' +
            'garantizando confort y seguridad para toda la familia en un entorno residencial de alto nivel.',
        etiquetas: ['Casa', '163 m²', '4 habitaciones', 'Jardín', 'Piscina', 'Seguridad 24h'],
        fotos: [],
        contacto: {
            whatsapp: '573209999999', // Actualizar con número real
            texto: '¡Hola! Me interesa la casa en Unidad Abedules, Suramérica, Itagüí. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-14',
    },
];

export default properties;
