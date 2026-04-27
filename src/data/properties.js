// ============================================================
// DATOS DE INMUEBLES EN VENTA
// Agregar nuevas propiedades al array 'properties'
// ============================================================

export const properties = [
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
    {
        id: 'apto-pilsen-itagui-piso1',
        tipo: 'Apartamento',
        titulo: 'Apartamento en venta — Barrio Pilsen, Itagüí',
        estado: 'Disponible',
        precio: 340000000,
        precioFormateado: '$340.000.000',
        ubicacion: {
            barrio: 'Pilsen',
            ciudad: 'Itagüí',
            departamento: 'Antioquia',
            referencia: 'A una cuadra del Complex de Ditaires',
        },
        caracteristicas: {
            area: 62,
            habitaciones: 3,
            banos: 2,
            piso: 1,
            parqueadero: 'Cubierto (exterior)',
            parqueaderoBool: true,
            administracion: 50000,
        },
        descripcion:
            'Hermoso apartamento en primer piso ubicado en el barrio Pilsen de Itagüí, a solo una cuadra del Complex de Ditaires. ' +
            'Con un área de 62 m², cuenta con 3 habitaciones con closet, 2 baños y parqueadero cubierto situado en la parte exterior del apartamento. ' +
            'Administración económica de solo $50.000. Una excelente oportunidad en una zona de alta valorización y comodidad.',
        etiquetas: ['Primer Piso', 'Parqueadero Cubierto', '3 Habitaciones', 'Cerca a Ditaires'],
        fotos: [
            '/inmuebles/pilsen/1.jpeg',
            '/inmuebles/pilsen/2.jpeg',
            '/inmuebles/pilsen/3.jpeg',
            '/inmuebles/pilsen/4.jpeg',
            '/inmuebles/pilsen/5.jpeg',
            '/inmuebles/pilsen/6.jpeg',
            '/inmuebles/pilsen/7.jpeg',
            '/inmuebles/pilsen/8.jpeg',
            '/inmuebles/pilsen/9.jpeg',
            '/inmuebles/pilsen/10.jpeg',
            '/inmuebles/pilsen/11.jpeg',
            '/inmuebles/pilsen/WhatsApp Image 2026-04-14 at 2.58.06 PM.jpeg',
            '/inmuebles/pilsen/WhatsApp Image 2026-04-14 at 2.58.07 PM.jpeg',
        ],
        contacto: {
            whatsapp: '573167443613',
            texto: '¡Hola! Me interesa el apartamento en el barrio Pilsen, Itagüí. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-04-17',
    },
    {
        id: 'apartacasa-calazans-medellin',
        tipo: 'Casa',
        titulo: 'Apartacasa en venta — Calazans, Medellín',
        estado: 'Disponible',
        precio: 810000000,
        precioFormateado: '$810.000.000',
        ubicacion: {
            direccion: 'Carrera 84 # 50 a 84 apto 401',
            barrio: 'Calazans',
            ciudad: 'Medellín',
            departamento: 'Antioquia',
        },
        caracteristicas: {
            area: 215,
            habitaciones: 4,
            banos: 4,
            parqueadero: 1,
            administracion: 50000,
            anoConstruccion: 1995,
            estrato: 5,
            patioAbierto: true,
            zonaRopas: true,
            cuartoUtil: true,
            turco: true,
            pisoMarmol: true,
        },
        descripcion:
            'Excelente apartacasa de 215 m² con patio abierto y zona de ropas. Cuenta con 4 amplias habitaciones con sus respectivos closets, la principal con vestier y baño privado. Dispone de un total de 4 baños, estudio, 2 salas independientes, comedor y balcón. Cocina de generosas dimensiones, pisos en retal de mármol de alta calidad y tina de agua caliente eléctrica. Incluye cuarto útil y garaje con posibilidad de adaptar lockers o bodega, además de turco privado. Es una propiedad muy iluminada y aireada, ubicada en una zona tranquila de Calazans cerca de servicios comerciales, religiosos y educativos.',
        etiquetas: ['215 m²', '4 Habitaciones', 'Piso Mármol', 'Turco', 'Patio Abierto'],
        fotos: [
            '/inmuebles/calazans/1.jpeg',
            '/inmuebles/calazans/2.jpeg',
            '/inmuebles/calazans/3.jpeg',
            '/inmuebles/calazans/4.jpeg',
            '/inmuebles/calazans/5.jpeg',
            '/inmuebles/calazans/6.jpeg',
            '/inmuebles/calazans/7.jpeg',
            '/inmuebles/calazans/8.jpeg',
            '/inmuebles/calazans/10.jpeg',
            '/inmuebles/calazans/11.jpeg',
            '/inmuebles/calazans/12.jpeg',
            '/inmuebles/calazans/13.jpeg',
            '/inmuebles/calazans/14.jpeg',
        ],
        contacto: {
            whatsapp: '573167443613',
            texto: '¡Hola! Me interesa la apartacasa en Calazans, Medellín. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-04-17',
    },
    {
        id: 'casa-prado-centro-medellin',
        tipo: 'Casa',
        titulo: 'Casa en venta — Prado Centro, Medellín',
        estado: 'Disponible',
        precio: 360000000,
        precioFormateado: '$360.000.000',
        precioArrendamiento: 2200000,
        ubicacion: {
            barrio: 'Prado Centro',
            ciudad: 'Medellín',
            departamento: 'Antioquia',
            referencia: 'Cerca a la Clínica del Prado, sobre vía principal',
        },
        caracteristicas: {
            area: 85.96,
            areaTerraza: 28.65,
            habitaciones: 2,
            banos: 2,
            estrato: 4,
            cocinaIntegral: true,
            zonaRopas: true,
            patioAbierto: true,
            terraza: true,
        },
        descripcion:
            'Hermosa e iluminada casa ubicada en el histórico barrio Prado Centro, Medellín, muy cerca de la Clínica del Prado. ' +
            'La propiedad se encuentra en excelente estado con acabados de alta calidad. Cuenta con 2 habitaciones con closet, ' +
            'sala, comedor, 2 baños y cocina integral. Además, dispone de zona de ropas, patio abierto y una amplia terraza de ' +
            '28.65 m² (adicionales a los 85.96 m² de escritura) que puede ser utilizada para una tercera habitación, gimnasio o estudio. ' +
            'Ubicación privilegiada sobre vía principal, cerca de colegios, universidades, parques y centros comerciales. Libre de gravámenes.',
        etiquetas: ['Terraza 28m²', 'Cerca Clínica Prado', 'Excelente Estado', 'Libre de Gravámenes'],
        fotos: [
            '/inmuebles/prado-centro/1.jpeg',
            '/inmuebles/prado-centro/2.jpeg',
            '/inmuebles/prado-centro/3.jpeg',
            '/inmuebles/prado-centro/4.jpeg',
            '/inmuebles/prado-centro/5.jpeg',
            '/inmuebles/prado-centro/6.jpeg',
            '/inmuebles/prado-centro/7.jpeg',
            '/inmuebles/prado-centro/8.jpeg',
            '/inmuebles/prado-centro/9.jpeg',
            '/inmuebles/prado-centro/10.jpeg',
            '/inmuebles/prado-centro/11.jpeg',
        ],
        contacto: {
            whatsapp: '573167443613',
            texto: '¡Hola! Me interesa la casa en Prado Centro, Medellín. ¿Podría darme más información?',
        },
        fechaPublicacion: '2026-04-17',
    },
];

export default properties;
