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
            estrato: 4, // Asumiendo estrato 4 para Suramérica, ajustar si es diferente
            parqueaderoBool: true,
            administracion: 450000,
            predialAnual: 1200000,
            anoPredial: 2025,
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
        fotos: [
            '/inmuebles/abedules/foto1.png',
            '/inmuebles/abedules/foto2.png',
            '/inmuebles/abedules/foto3.png',
            '/inmuebles/abedules/foto4.png',
            '/inmuebles/abedules/foto5.png',
        ],
        contacto: {
            whatsapp: '573167443613', // Actualizar con número real
            texto: '¡Hola! Me interesa la casa en Unidad Abedules, Suramérica, Itagüí. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-14',
    },
    {
        id: 'apto-vivare-plaza-sabaneta',
        tipo: 'Apartamento',
        titulo: 'Apartamento en venta — Vivare Plaza Residencial, Sabaneta',
        estado: 'Disponible',
        precio: 600000000,
        precioFormateado: '$600.000.000',
        ubicacion: {
            direccion: 'Cl 78 c Sur # 47g -10, Apto 1017',
            edificio: 'Vivare Plaza Residencial',
            barrio: 'Sabaneta',
            ciudad: 'Sabaneta',
            departamento: 'Antioquia',
            referencia: 'Ubicado a una cuadra del metro de la Estrella',
        },
        caracteristicas: {
            area: 79,
            habitaciones: 3,
            banos: 3,
            estrato: 4,
            parqueadero: true,
            cuartoUtil: true,
            balcon: true,
            acabados: 'Full acabados',
            administracion: 390000,
            predialAnual: 3000000,
            anoPredial: 2025,
        },
        descripcion:
            'Gran apartamento en Sabaneta, ubicado estratégicamente a solo una cuadra del metro de la Estrella. ' +
            'Situado en Vivare Plaza Residencial, este inmueble de 79 m² cuenta con 3 habitaciones, 3 baños (1 social y 2 completos), ' +
            'balcón y acabados de lujo. Incluye parqueadero y cuarto útil en una zona de alta demanda y comodidad.',
        etiquetas: ['Full acabados', 'Balcón', 'Cerca al Metro', 'Estrato 4'],
        fotos: [
            '/inmuebles/vivare-plaza/sala_comedor_1.jpeg',
            '/inmuebles/vivare-plaza/sala_comedor_2.jpeg',
            '/inmuebles/vivare-plaza/sala_comedor_3.jpeg',
            '/inmuebles/vivare-plaza/balcon.jpeg',
            '/inmuebles/vivare-plaza/habitacion.jpeg',
        ],
        contacto: {
            whatsapp: '573167443613',
            texto: '¡Hola! Me interesa el apartamento en Vivare Plaza Residencial, Sabaneta. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-14',
    },
    {
        id: 'lote-gualanday-llanogrande',
        tipo: 'Lote',
        titulo: 'Lote en venta — Gualanday / Llanogrande',
        estado: 'Disponible',
        precio: 580000000,
        precioFormateado: '$580.000.000',
        ubicacion: {
            barrio: 'Gualanday',
            ciudad: 'Rionegro', // Llanogrande is typically in Rionegro
            departamento: 'Antioquia',
            referencia: 'Ubicación privilegiada en zona exclusiva de Gualanday / Llanogrande',
        },
        caracteristicas: {
            area: 115.52,
            tipo: 'Lote urbanizado',
            estrato: 5, // Asumido para Llanogrande, puede variar
            parqueadero: true, // Generalmente incluido en estas parcelaciones
            administracion: null, // No especificado
        },
        amenidadesUnidad: [
            'Turco',
            'Gym',
            'Spa',
            'Juegos infantiles',
            'Cancha sintética',
            'Unidad cerrada',
        ],
        descripcion:
            'Espectacular lote de 115.52 m² ubicado en la exclusiva zona de Gualanday, Llanogrande. ' +
            'Ideal para construir una casa de 2 niveles en una parcelación completa con excelentes zonas comunes. ' +
            'La unidad se destaca por su uniformidad y armonía arquitectónica, respetando materiales de fachada ' +
            'como ladrillo, madera, jardines y concreto. El precio es negociable.',
        etiquetas: ['Lote', 'Llanogrande', 'Exclusivo', 'Negociable'],
        fotos: [
            '/inmuebles/lote-llanogrande/fachada.jpg',
            '/inmuebles/lote-llanogrande/master_plan.png',
            '/inmuebles/lote-llanogrande/entrada.png',
            '/inmuebles/lote-llanogrande/zonas_comunes.png',
            '/inmuebles/lote-llanogrande/mapa.png',
        ],
        contacto: {
            whatsapp: '573167443613',
            texto: '¡Hola! Me interesa el lote en Gualanday / Llanogrande. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-14',
    },
];

export default properties;
