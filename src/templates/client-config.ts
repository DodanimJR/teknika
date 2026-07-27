// ============================================
// CONFIGURACION DEL CLIENTE
// ============================================
// Este archivo es lo UNICO que necesitas modificar para personalizar
// la landing page completa de un cliente.
//
// INSTRUCCIONES:
// 1. Copia este archivo para cada cliente nuevo
// 2. Cambia los valores segun la marca del cliente
// 3. Coloca el logo del cliente en public/img/clientes/
// 4. Listo - la landing se adapta automaticamente
// ============================================

export const clientConfig = {

  // ---- IDENTIDAD DEL NEGOCIO ----
  businessName: "Tu Negocio",
  tagline: "Soluciones profesionales para ti",
  description: "Somos un negocio dedicado a ofrecer productos y servicios de la mejor calidad. Nos apasiona lo que hacemos y se nota en cada detalle.",
  domain: "www.tunegocio.com",
  year: new Date().getFullYear(),

  // ---- COLORES ----
  // Cambia estos valores para adaptar toda la paleta del sitio.
  // Usa hex (#RRGGBB). Los colores semanticos se derivan automaticamente.
  colors: {
    primary: "#725AC1",     // Slate Blue - Color principal (botones, enlaces, header)
    primaryHover: "#5A45A0", // Slate Blue oscuro - Hover del color principal
    accent: "#8D86C9",      // Soft Periwinkle - Color de acento (CTAs, destacados)
    accentHover: "#725AC1",  // Slate Blue - Hover del acento
    dark: "#242038",        // Midnight Violet - Fondo oscuro (footer, secciones dark)
    darkSecondary: "#362F54", // Midnight Violet claro - Secundario oscuro
    text: "#242038",        // Midnight Violet - Color del texto principal
    textMuted: "#7A7489",   // Texto secundario/muted (derivado de la paleta)
    background: "#F7ECE1",  // Linen - Fondo principal
    backgroundAlt: "#F0E4D6", // Linen oscuro - Fondo alternativo (secciones alternas)
    border: "#CAC4CE",      // Pale Slate - Bordes
    white: "#FFFFFF",
  },

  // ---- TIPOGRAFIA ----
  // Fuente de Google Fonts. Cambia el nombre y el URL.
  fonts: {
    // Nombre de la fuente para CSS font-family
    heading: "'Inter', system-ui, -apple-system, sans-serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    // URL de Google Fonts (cambia por la fuente deseada)
    // Ejemplos populares:
    //   Montserrat: https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap
    //   Poppins:    https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap
    //   Raleway:    https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap
    //   Roboto:     https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap
    //   Nunito:     https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
  },

  // ---- LOGOS ----
  // Coloca los archivos en public/img/clientes/ y referencia desde aca.
  // Si no hay logo, se usa el nombre del negocio como texto.
  logos: {
    main: "",        // ej: "/img/clientes/mi-logo.png"
    favicon: "",     // ej: "/img/clientes/mi-favicon.png"
    // Tamano del logo en el header (px)
    width: 44,
    height: 44,
  },

  // ---- NAVEGACION ----
  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Servicios", href: "#servicios" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Galeria", href: "#galeria" },
      { label: "Contacto", href: "#contacto" },
    ],
    // Boton CTA del header (ej: WhatsApp)
    ctaButton: {
      label: "Contacta con nosotros",
      href: "#contacto",
      // Para WhatsApp usa: https://wa.me/50600000000?text=Hola%20...
      isExternal: false,
    },
  },

  // ---- SECCION HERO ----
  hero: {
    badge: "Bienvenidos",
    title: "Tu Negocio, Tu Exito",
    subtitle: "Ofrecemos soluciones profesionales que se adaptan a tus necesidades. Calidad, confianza y resultados garantizados.",
    ctaPrimary: {
      label: "Ver Servicios",
      href: "#servicios",
    },
    ctaSecondary: {
      label: "Escríbenos",
      href: "#contacto",
    },
    // Imagen de fondo del hero (colocar en public/img/clientes/)
    // Si esta vacio, usa un gradiente con los colores primarios
    backgroundImage: "",
  },

  // ---- SECCION SERVICIOS ----
  services: {
    badge: "Lo que hacemos",
    title: "Nuestros Servicios",
    subtitle: "Conoce todo lo que podemos hacer por ti y tu negocio.",
    items: [
      {
        icon: "briefcase",  // briefcase | wrench | star | shield | heart | clock | truck | camera | coffee | scissors
        title: "Servicio Uno",
        description: "Descripcion breve del primer servicio que ofreces a tus clientes.",
      },
      {
        icon: "star",
        title: "Servicio Dos",
        description: "Descripcion breve del segundo servicio que ofreces a tus clientes.",
      },
      {
        icon: "shield",
        title: "Servicio Tres",
        description: "Descripcion breve del tercer servicio que ofreces a tus clientes.",
      },
      {
        icon: "heart",
        title: "Servicio Cuatro",
        description: "Descripcion breve del cuarto servicio que ofreces a tus clientes.",
      },
      {
        icon: "clock",
        title: "Servicio Cinco",
        description: "Descripcion breve del quinto servicio que ofreces a tus clientes.",
      },
      {
        icon: "wrench",
        title: "Servicio Seis",
        description: "Descripcion breve del sexto servicio que ofreces a tus clientes.",
      },
    ],
  },

  // ---- SECCION SOBRE NOSOTROS ----
  about: {
    badge: "Nuestra historia",
    title: "Sobre Nosotros",
    paragraphs: [
      "Somos un negocio con pasion por lo que hacemos. Desde nuestros inicios, nos hemos dedicado a ofrecer el mejor servicio posible a cada uno de nuestros clientes.",
      "Nuestro equipo esta comprometido con la excelencia y la atencion personalizada. Creemos que cada cliente merece un trato unico y profesional.",
    ],
    // Imagen del equipo/local (colocar en public/img/clientes/)
    image: "",
    // Valores o diferenciadores del negocio
    values: [
      { title: "Calidad", description: "Cada detalle importa. Nos aseguramos de que todo sea de primera." },
      { title: "Confianza", description: "Relaciones duraderas basadas en transparencia y honestidad." },
      { title: "Experiencia", description: "Anos de trayectoria nos respaldan en cada proyecto." },
    ],
  },

  // ---- SECCION GALERIA ----
  gallery: {
    badge: "Nuestro trabajo",
    title: "Galeria",
    subtitle: "Mira algunos de nuestros trabajos y proyectos realizados.",
    // Imagenes de la galeria (colocar en public/img/clientes/)
    // Usa URLs de placeholder mientras no haya fotos reales
    images: [
      { src: "", alt: "Trabajo 1" },
      { src: "", alt: "Trabajo 2" },
      { src: "", alt: "Trabajo 3" },
      { src: "", alt: "Trabajo 4" },
      { src: "", alt: "Trabajo 5" },
      { src: "", alt: "Trabajo 6" },
    ],
  },

  // ---- SECCION CONTACTO ----
  contact: {
    badge: "Hablemos",
    title: "Contacto",
    subtitle: "Estamos listos para ayudarte. Escríbenos o visítanos.",
    // Informacion de contacto
    phone: "+506 0000-0000",
    // Para WhatsApp: https://wa.me/50600000000
    whatsapp: "",
    email: "info@tunegocio.com",
    address: "San Jose, Costa Rica",
    // Horario de atencion
    hours: "Lunes a Viernes: 9:00 AM - 5:00 PM",
    // Formulario (Formspree u otro servicio)
    formAction: "https://formspree.io/f/XXXXXXXX",
    // Redes sociales (dejar vacio si no aplica)
    social: {
      instagram: "",
      facebook: "",
      tiktok: "",
      whatsapp: "",
    },
  },

  // ---- FOOTER ----
  footer: {
    tagline: "Tu negocio de confianza.",
    // Links adicionales del footer
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Servicios", href: "#servicios" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
    // Creditos (aparece al final)
    credit: {
      show: true,
      text: "Sitio web creado por",
      linkText: "Teknika CR",
      linkUrl: "https://teknika.co.cr",
    },
  },

  // ---- SEO ----
  seo: {
    title: "Tu Negocio - Soluciones Profesionales",
    description: "Somos un negocio dedicado a ofrecer productos y servicios de la mejor calidad en Costa Rica.",
    locale: "es_CR",
    themeColor: "#242038",
  },
};

// ============================================
// TIPOS (no modificar)
// ============================================
export type ClientConfig = typeof clientConfig;
