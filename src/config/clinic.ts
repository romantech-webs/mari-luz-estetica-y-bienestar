export const clinic = {
  name: "Mari Luz estética y bienestar",
  logo: "/images/logo.png",
  tagline: "Tu centro de estética y bienestar en Albacete",
  description: "Mari Luz estética y bienestar es tu centro de confianza en Albacete con 4.5 estrellas y más de 52 reseñas. Especialistas en manicura, tratamientos faciales, depilación láser, cejas y mucho más. Un equipo cercano y profesional que te hace sentir como en casa desde el primer momento. Flexibilidad horaria y atención personalizada para cuidarte como te mereces.",
  colors: {
    primary: "#c9b595",
    secondary: "#3c362d",
    accent: "#e8e7cd",
    neutral: "#fbf9f7"
  },
  phone: "663 94 38 57",
  whatsapp: "+34663943857",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "C. Prta de Murcia, 15, 02002 Albacete, España",
    city: "Albacete",
    province: "",
    postalCode: "02002",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=896645541841365764&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Mari%20Luz%20est%C3%A9tica%20y%20bienestar%20%4038.989%2C-1.85002&z=16&output=embed",
  coordinates: {
    lat: 38.989,
    lng: -1.85002
  },
  schedule: [
    {
      days: "lunes",
      hours: "15:30–19:00"
    },
    {
      days: "martes - viernes",
      hours: "9:30–13:30, 15:30–19:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.5,
    count: 52,
    url: "https://maps.google.com/?cid=896645541841365764&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Elisabeth Fernandez Montes",
        rating: 5,
        text: "Soy clienta desde hace años. Me encantan. Si no tienen cita hacen lo posible p poder atenderte en cuanto tienen hueco disponible. Por poner un pero, es que me gustaría que hubiese más distancia física entre cliente y cliente a la hora de hacer la manicura. El local esta limpio y las chicas muy profesionales.",
        date: "Hace 3 años"
      },
      {
        author: "Carla Carla",
        rating: 5,
        text: "Esta mañana he ido a que me hicieran las cejas y el labio, no tenia cita, me han hecho un hueco, me han dejado las cejas perfectas, rápido, bien y aun encima buen precio. Mención a parte lo maja que era la chica que me ha atendido. Volveré.",
        date: "Hace 5 años"
      },
      {
        author: "izanproasito 2008",
        rating: 5,
        text: "Llevo como dos meses haciéndome las uñas y estoy encantada,son un amor de chicas y muy cercanas,desde el primer momento te hacen sentir confianza.Ademas hacen tratamientos faciales,laser...bueno lo tienes todo aquí.Para mi,muy buenas!",
        date: "Hace un año"
      },
      {
        author: "Rosa Martínez",
        rating: 5,
        text: "Me la recomendo una amiga, y la verdad que estoy encantada.. Las recomiendo 100%..Son muy agradables y da gusto hacerte cosas con ellas te miman mucho.. Gracias chicas",
        date: "Hace un año"
      },
      {
        author: "Ermen Argueta",
        rating: 5,
        text: "Una experiencia inolvidable . Sitio muy hermoso",
        date: "Hace 8 meses"
      }
    ]
  },
  services: [
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con productos de alta calidad y acabados impecables. Nuestras clientas destacan la profesionalidad y el ambiente acogedor de nuestro servicio. Disfruta de uñas perfectas con esmaltes duraderos y técnicas que realzan tu belleza natural.",
      benefits: [
        "Equipo especializado con años de experiencia",
        "Ambiente limpio y profesional",
        "Resultados duraderos y naturales"
      ],
      icon: "Hand"
    },
    {
      id: "cejas-labio",
      name: "Diseño de Cejas y Depilación Facial",
      description: "Perfilado y diseño de cejas personalizado para realzar tu mirada. Depilación de labio y otras zonas faciales con técnicas rápidas y precisas. Nuestras clientas valoran especialmente la perfección en el resultado y la rapidez del servicio, todo a precios muy competitivos.",
      benefits: [
        "Cejas perfectamente perfiladas",
        "Servicio rápido sin perder calidad",
        "Excelente relación calidad-precio"
      ],
      icon: "Eye"
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para cada tipo de piel con productos premium. Tratamientos de hidratación profunda, antiedad y luminosidad que transforman tu rostro. Te mimamos con protocolos adaptados a tus necesidades específicas para resultados visibles desde la primera sesión.",
      benefits: [
        "Diagnóstico personalizado de tu piel",
        "Productos de alta gama",
        "Resultados visibles y duraderos"
      ],
      icon: "Sparkles"
    },
    {
      id: "depilacion-laser",
      name: "Depilación Láser",
      description: "Eliminación definitiva del vello con tecnología láser de última generación. Tratamientos seguros y efectivos para todas las zonas del cuerpo. Olvídate del vello no deseado de forma permanente con sesiones cómodas y resultados progresivos.",
      benefits: [
        "Tecnología láser avanzada",
        "Eliminación progresiva y definitiva",
        "Tratamiento adaptado a tu fototipo"
      ],
      icon: "Zap"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales",
      description: "Programas reductores, reafirmantes y anticelulíticos diseñados para modelar tu silueta. Combinamos técnicas manuales con tecnología avanzada para resultados efectivos. Recupera la firmeza y tonifica tu cuerpo con tratamientos que realmente funcionan.",
      benefits: [
        "Tratamientos personalizados",
        "Tecnología de última generación",
        "Seguimiento de resultados"
      ],
      icon: "Heart"
    },
    {
      id: "micropigmentacion",
      name: "Micropigmentación",
      description: "Maquillaje semipermanente para cejas, labios y ojos con acabados naturales y favorecedores. Despierta perfecta cada mañana sin necesidad de maquillarte. Técnicas de última tendencia que respetan la armonía de tu rostro.",
      benefits: [
        "Resultados naturales y armoniosos",
        "Ahorra tiempo en tu rutina diaria",
        "Pigmentos de máxima calidad"
      ],
      icon: "Flower2"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Mirada impactante con extensiones pelo a pelo aplicadas con precisión. Luce pestañas largas y voluminosas de forma natural y duradera. Técnica segura que respeta la salud de tus pestañas naturales.",
      benefits: [
        "Aplicación pelo a pelo profesional",
        "Mirada intensa y natural",
        "Larga duración con mantenimiento"
      ],
      icon: "Eye"
    },
    {
      id: "asesoramiento-belleza",
      name: "Asesoramiento Integral",
      description: "Te ayudamos a diseñar tu plan de belleza personalizado combinando los tratamientos que mejor se adaptan a ti. En Mari Luz tienes todo lo que necesitas en un solo lugar, con un equipo que te hace sentir confianza desde el primer momento.",
      benefits: [
        "Plan de tratamientos a tu medida",
        "Todos los servicios en un centro",
        "Trato cercano y profesional"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotras",
      description: "Llámanos al 663 94 38 57 o escríbenos por WhatsApp. Hacemos todo lo posible por encontrarte hueco incluso sin cita previa, porque sabemos que tu tiempo es valioso."
    },
    {
      step: 2,
      title: "Primera Consulta Personalizada",
      description: "Te recibimos en nuestro centro limpio y acogedor de Albacete. Analizamos tus necesidades y te asesoramos sobre los tratamientos más adecuados para conseguir los resultados que buscas."
    },
    {
      step: 3,
      title: "Tu Tratamiento de Belleza",
      description: "Realizamos tu tratamiento con profesionalidad, productos premium y la última tecnología. Nuestro equipo cercano te hace sentir cómoda y confiada en todo momento, mimándote como te mereces."
    },
    {
      step: 4,
      title: "Disfruta de los Resultados",
      description: "Sal de Mari Luz radiante y satisfecha. Te damos recomendaciones para mantener los resultados y te esperamos en tu próxima visita. La confianza que generamos hace que nuestras clientas vuelvan durante años."
    }
  ],
  whyUs: [
    {
      title: "Avaladas por Nuestras Clientas",
      description: "Más de 52 reseñas con 4.5 estrellas en Google nos avalan. Nuestras clientas destacan la profesionalidad, el trato cercano y los resultados visibles. Muchas llevan años confiando en nosotras porque generamos confianza desde el primer momento y nos preocupamos por mimar a cada persona.",
      icon: "Sparkles"
    },
    {
      title: "Flexibilidad y Atención Personalizada",
      description: "Hacemos todo lo posible por atenderte incluso sin cita previa, porque entendemos que tu tiempo es valioso. En Mari Luz te adaptamos los horarios y te buscamos hueco para que puedas cuidarte cuando lo necesites. Esta flexibilidad es una de las razones por las que nuestras clientas nos recomiendan.",
      icon: "Heart"
    },
    {
      title: "Equipo Profesional y Cercano",
      description: "Nuestro equipo combina profesionalidad con un trato humano excepcional. Te hacemos sentir cómoda y confiada desde la primera visita. Las chicas de Mari Luz son cercanas, majas y expertas en lo que hacen, creando un ambiente donde te sientes cuidada y mimada en cada tratamiento.",
      icon: "Flower2"
    },
    {
      title: "Centro Completo en Albacete",
      description: "Lo tienes todo en un solo lugar: manicura, pedicura, cejas, tratamientos faciales, láser, corporales y más. Un centro limpio y acogedor en Albacete donde realizar todos tus tratamientos de belleza sin necesidad de ir a varios sitios. Comodidad, calidad y buenos precios en un único espacio.",
      icon: "Zap"
    }
  ],
  team: [
    {
      name: "Equipo de Mari Luz estética y bienestar",
      role: "Especialistas en Estética",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Mari Luz estética y bienestar nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Mari Luz estética y bienestar - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Mari Luz estética y bienestar - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Mari Luz estética y bienestar - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Mari Luz estética y bienestar - Imagen 4"
    },
    {
      src: "/images/hero.webp",
      alt: "Mari Luz estética y bienestar - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Mari Luz estética y bienestar - Imagen 6"
    }
  ],
  faq: [
    {
      question: "¿Necesito cita previa para los tratamientos?",
      answer: "Aunque es recomendable pedir cita previa, en Mari Luz estética y bienestar hacemos todo lo posible por atenderte aunque vengas sin cita. Nuestras clientas valoran especialmente nuestra flexibilidad para encontrar huecos disponibles. Llámanos al 663 94 38 57 o escríbenos por WhatsApp y te daremos la mejor solución."
    },
    {
      question: "¿Qué servicios de manicura y pedicura ofrecéis?",
      answer: "Ofrecemos cuidado completo de manos y pies con productos de alta calidad y acabados profesionales. Nuestras clientas llevan años confiando en nosotras para lucir uñas perfectas. Trabajamos con esmaltes duraderos y técnicas que garantizan resultados impecables en un ambiente limpio y profesional."
    },
    {
      question: "¿Hacéis diseño y depilación de cejas?",
      answer: "Sí, somos especialistas en diseño de cejas y depilación facial. Nuestras clientas destacan la perfección en el resultado, la rapidez del servicio y los precios competitivos. Te dejamos las cejas perfectamente perfiladas para realzar tu mirada de forma natural y favorecedora."
    },
    {
      question: "¿Qué tratamientos faciales realizáis en Mari Luz?",
      answer: "En Mari Luz estética y bienestar ofrecemos tratamientos faciales personalizados para cada tipo de piel: hidratación profunda, antiedad, luminosidad y más. Utilizamos productos premium y técnicas avanzadas para resultados visibles. Nuestro equipo analiza tu piel y diseña el protocolo perfecto para ti."
    },
    {
      question: "¿Tenéis servicio de depilación láser?",
      answer: "Sí, contamos con tecnología láser de última generación para eliminación definitiva del vello. Es uno de nuestros tratamientos estrella junto con los faciales y la manicura. Los tratamientos son seguros, efectivos y adaptados a tu tipo de piel para resultados progresivos y permanentes."
    },
    {
      question: "¿Por qué vuestras clientas os recomiendan tanto?",
      answer: "Nuestras más de 52 reseñas con 4.5 estrellas en Google reflejan lo que nos hace especiales: un trato cercano que genera confianza desde el primer momento, profesionalidad en todos los servicios, y la flexibilidad para adaptarnos a tus necesidades. Muchas clientas llevan años con nosotras porque se sienten mimadas y cuidadas en cada visita."
    },
    {
      question: "¿Dónde está ubicado vuestro centro en Albacete?",
      answer: "Estamos ubicados en Albacete en un local limpio, acogedor y profesional donde encontrarás todos los servicios de estética y bienestar que necesitas. Para conocer nuestra dirección exacta y cómo llegar, llámanos al 663 94 38 57 y te indicamos cómo encontrarnos fácilmente."
    },
    {
      question: "¿Qué otros servicios ofrecéis además de manicura y cejas?",
      answer: "En Mari Luz lo tienes todo: tratamientos faciales, depilación láser, tratamientos corporales, micropigmentación, extensiones de pestañas, manicura, pedicura y mucho más. Somos tu centro integral de belleza en Albacete donde puedes realizar todos tus tratamientos con un equipo de confianza que te conoce y te cuida."
    }
  ],
  seo: {
    titleTemplate: "%s | Mari Luz estética y bienestar",
    defaultTitle: "Mari Luz estética y bienestar | Centro de Estética Albacete",
    defaultDescription: "Centro de estética en Albacete ⭐ 4.5 estrellas. Manicura, cejas, tratamientos faciales, depilación láser y más. Equipo profesional y cercano. ☎️ 663 94 38 57 ¡Pide cita!",
    keywords: [
      "centro estética Albacete",
      "Mari Luz estética y bienestar",
      "manicura Albacete",
      "tratamientos faciales Albacete",
      "depilación láser Albacete",
      "diseño cejas Albacete",
      "pedicura Albacete",
      "tratamientos corporales Albacete",
      "micropigmentación Albacete",
      "extensiones pestañas Albacete",
      "centro belleza Albacete",
      "estética y bienestar Albacete"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Mari Luz estética y bienestar",
    cif: "",
    registeredAddress: "C. Prta de Murcia, 15, 02002 Albacete, España, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Albacete"
  ],
  heroDescription: "En Mari Luz estética y bienestar encontrarás un espacio acogedor en Albacete donde cuidar tu imagen y bienestar. Nuestro equipo de profesionales te ofrece tratamientos personalizados con la última tecnología y un trato cercano que nos hace únicos. Más de 52 clientes nos avalan con 4.5 estrellas.",
  specialty: "Manicura y Tratamientos Faciales",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para sentirte radiante y cuidada?",
  ctaDescription: "Reserva tu cita en Mari Luz estética y bienestar. Te atendemos con flexibilidad horaria y hacemos todo lo posible por encontrarte hueco. Llámanos o escríbenos por WhatsApp.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
