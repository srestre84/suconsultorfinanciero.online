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
            whatsapp: '573209999999', // Actualizar con número real
            texto: '¡Hola! Me interesa el apartamento en el Edificio La Inmaculada, Itagüí. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-14',
    },
];

export default properties;
