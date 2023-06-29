export default {
  global: {
    componenteFormativo: 'Gestión del mantenimiento de productos electrónicos',
    descripcionCurso:
      'En este componente formativo, se tratan conceptos relacionados con el mantenimiento y posterior documentación de productos electrónicos. Se tratan temas como los tipos de mantenimiento y los costos asociados, así como la gestión de la hoja de vida del equipo. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La función de mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de mantenimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Costos y presupuesto de mantenimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Listado de repuestos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de los recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Calidad del mantenimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión de la información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión del cambio',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentación del mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Manual de usuario y del fabricante',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Hoja de vida del equipo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Órdenes de servicio',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión de los recursos',
      referencia:
        'ICONTEC Internacional. (2015). Sistemas de gestión de la calidad. Requisitos (NTC-ISO 9001). ',
      tipo: 'Documento técnico',
      link: 'https://www.agencomex.com/pdf/ISO-9001-2015.pdf',
    },
    {
      tema: 'Documentación del mantenimiento',
      referencia:
        'ICONTEC. (2002). Directrices para la documentación de sistemas de gestión de la calidad (GTC-ISO/TR 10013). ',
      tipo: 'Documento técnico',
      link:
        'https://www.academia.edu/25172134/GTC_ISO_10013_DOCUMENTACION_DE_PROCESOS_Y_PROCEDIMIENTOS',
    },
    {
      tema: 'Manual de usuario y del fabricante',
      referencia:
        'Panasonic. (2011). Manual de Servicio Televisor de LED/LCD. ',
      tipo: 'Documento técnico',
      link:
        'http://www.csportal.panasonic-la.com/descargaspla/PANAMEX/TELEVISION//LCD%20TV//LED-TV/TC-L32X35X/DOCUMENTO/MANUAL%20DE%20SERVICIO//TC-L32X35X-L-M.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Diagnosticar',
      significado:
        'recoger y analizar datos para evaluar problemas de diversa naturaleza. (Real Academia Española, 2020)',
    },
    {
      termino: 'Fiable',
      significado:
        'que ofrece seguridad o buenos resultados. (Real Academia Española, 2020)',
    },
    {
      termino: 'Láser',
      significado:
        'dispositivo electrónico que, basado en una emisión inducida, amplifica de manera extraordinaria un haz de luz monocromático y coherente. (Real Academia Española, 2020)',
    },
    {
      termino: 'Proactivo',
      significado:
        'que toma activamente el control y decide qué hacer en cada momento, anticipándose a los acontecimientos. (Real Academia Española, 2020)',
    },
    {
      termino: 'Redundancia',
      significado:
        'cierta repetición de la información contenida en un mensaje, que permite, a pesar de la pérdida de una parte de este, reconstruir su contenido. (Real Academia Española, 2020)',
    },
  ],
  referencias: [
    {
      referencia: 'Epson. (s. f.). Manual de servicio SEIJ07-004.',
      link:
        'https://www.manualslib.com/manual/979165/Epson-Stylus-Photo-R280.html?page=4#manual',
    },
    {
      referencia:
        'ICONTEC. (2002). Directrices para la documentación de sistemas de gestión de la calidad (GTC-ISO/TR 10013).',
      link:
        'https://www.academia.edu/25172134/GTC_ISO_10013_DOCUMENTACION_DE_PROCESOS_Y_PROCEDIMIENTOS',
    },
    {
      referencia:
        'IHMC. (2011). Recursos para tipos de investigación. IHMC Public Camp.',
      link:
        'https://cursa.ihmc.us/rid=1RKYS236P-15PFG45-2ZZ5/Recursos%20para%20TIPOS%20DE%20INVESTIGACI%C3%93N',
    },
    {
      referencia:
        'KMPG. (s. f.) Gestión del cambio. Resultados sostenibles. Resultados medibles.',
      link:
        'https://home.kpmg/co/es/home/services/advisory/management-consulting/corporate-services/capital-humano-y-cambio-organizacional/gestion-del-cambio.html',
    },
    {
      referencia:
        'Real Academia Española. (s. f.). Redundancia. Diccionario de la lengua española.',
      link: 'https://dle.rae.es/redundancia',
    },
    {
      referencia:
        'Vishay. (2017). Power Modules, Passivated Assembled Circuit Elements, 40 A. Datasheet Q.',
      link:
        'https://www.datasheetq.com/datasheet-download/546974/1/Vishay/VS-P400',
    },
    {
      referencia:
        'Welch, J. (1995). When the rate of change outside exceeds the rate of change inside, the end is in sight. Words and Quotes.',
      link:
        'https://www.wordsandquotes.com/quote/when-the-rate-of-change-outside-exceeds-the-rate-jack-welch-8440',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gewin Alfonso Fernández Cáceres',
          cargo: 'Experto Temático',
          centro: '"Regional Atlántico Centro Nacional Colombo Alemán."',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial.',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Viviana Esperanza Herrera Qiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
