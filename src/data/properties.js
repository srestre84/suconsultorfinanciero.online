// ============================================================
// DATOS DE INMUEBLES EN VENTA
// Agregar nuevas propiedades al array 'properties'
// ============================================================

export const properties = [
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
    {
        id: 'apto-pacifica-itagui',
        tipo: 'Apartamento',
        titulo: 'Apartamento en venta — Unidad PACÍFICA, Ditaires',
        estado: 'Disponible',
        precio: 570000000,
        precioFormateado: '$570.000.000',
        ubicacion: {
            barrio: 'Ditaires',
            ciudad: 'Itagüí',
            departamento: 'Antioquia',
            referencia: 'Frente al colegio Alemán, detrás del Tecnológico de Antioquia (Zona Sur)',
        },
        caracteristicas: {
            area: 88,
            habitaciones: 3,
            banos: 2,
            piso: 5,
            parqueadero: true,
            cuartoUtil: true,
            terraza: 18,
            pergola: true,
            zonaRopas: true,
            cocina: true,
            salaComedor: true,
            domotica: 'Swicheria dimerizable y compatible con Alexa',
            administracion: 370000,
        },
        amenidadesUnidad: [
            'Portería 24 horas',
            'Piscina Adultos',
            'Piscina Niños',
            'Turco',
            'Gimnasio',
            'Gimnasio mascotas',
            'Cancha squash',
            'Zona BBQ',
            'Cancha Baloncesto/Microfútbol',
            'Cancha fútbol sintético',
            '2 salones sociales',
            '3 ascensores por torre',
            'Mini mercado (Auto servicio)',
            'Circuito cerrado de TV',
        ],
        descripcion:
            'Espectacular apartamento de 70 m² más 18 m² de terraza privada con pérgola, para un total de 88 m². ' +
            'Ubicado en el piso 5 de la Unidad PACÍFICA en Ditaires, Itagüí. Cuenta con 3 habitaciones, 2 baños, ' +
            'parqueadero privado y cuarto útil. Equipado con swicheria dimerizable compatible con Alexa. ' +
            'La unidad ofrece completas zonas comunes: piscinas, gimnasio (personas y mascotas), canchas de squash, ' +
            'fútbol y baloncesto, zona BBQ, mini mercado y portería 24h. Ubicación privilegiada frente al Colegio ' +
            'Alemán y detrás del Tecnológico de Antioquia.',
        etiquetas: ['Terraza 18m²', 'Piso 5', 'Domótica', '3 Habitaciones', 'Zonas comunes completas'],
        fotos: [
            '/inmuebles/pacifica/4.jpeg',
            '/inmuebles/pacifica/12.jpeg',
            '/inmuebles/pacifica/13.jpeg',
            '/inmuebles/pacifica/2.jpeg',
            '/inmuebles/pacifica/11.jpeg',
            '/inmuebles/pacifica/14.jpeg',
            '/inmuebles/pacifica/3.jpeg',
            '/inmuebles/pacifica/20.jpeg',
            '/inmuebles/pacifica/19.jpeg',
            '/inmuebles/pacifica/17.jpeg',
            '/inmuebles/pacifica/16.jpeg',
            '/inmuebles/pacifica/18.jpeg',
            '/inmuebles/pacifica/15.jpeg',
            '/inmuebles/pacifica/10.jpeg',
            '/inmuebles/pacifica/9.jpeg',
            '/inmuebles/pacifica/8.jpeg',
            '/inmuebles/pacifica/7.jpeg',
            '/inmuebles/pacifica/6.jpeg',
            '/inmuebles/pacifica/5.jpeg',
            '/inmuebles/pacifica/WhatsApp Image 2026-03-18 at 5.23.02 PM.jpeg',
        ],
        contacto: {
            whatsapp: '573167443613',
            texto: '¡Hola! Me interesa el apartamento en la Unidad PACÍFICA, Ditaires. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-03-19',
    },
];

export default properties;
