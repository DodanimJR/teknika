// ============================================
// EJEMPLO: Cafe Pura Vida (cafeteria ficticia)
// ============================================
// Este archivo muestra como se veria la config
// para un cliente real. Solo copia client-config.ts,
// renombralo y cambia los valores.
//
// Para usar este ejemplo:
// 1. Renombra client-config.ts a client-config.backup.ts
// 2. Renombra este archivo a client-config.ts
// 3. Corre `npm run dev` y ve a /template-demo
// ============================================

export const clientConfig = {

  // ---- IDENTIDAD DEL NEGOCIO ----
  businessName: "Cafe Pura Vida",
  tagline: "El mejor cafe artesanal de Costa Rica",
  description: "Cafeteria artesanal en el corazon de San Jose. Cafe de altura 100% costarricense, reposteria casera y un ambiente unico para trabajar o compartir.",
  domain: "www.cafepuravida.cr",
  year: new Date().getFullYear(),

  // ---- COLORES ----
  // Paleta calida para cafeteria
  colors: {
    primary: "#8B4513",       // Marron cafe (Saddle Brown)
    primaryHover: "#6B3410",  // Marron mas oscuro
    accent: "#D4A574",        // Dorado cafe (Tan)
    accentHover: "#C49464",   // Dorado mas oscuro
    dark: "#2C1810",          // Cafe muy oscuro
    darkSecondary: "#4A2C20", // Cafe oscuro secundario
    text: "#2C1810",          // Texto oscuro
    textMuted: "#7A6458",     // Texto muted
    background: "#FFFAF5",    // Fondo crema suave
    backgroundAlt: "#FFF5EB", // Fondo crema alterno
    border: "#E8D5C4",        // Bordes suaves
    white: "#FFFFFF",
  },

  // ---- TIPOGRAFIA ----
  // Playfair Display para headings elegantes + Lato para body
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Lato', system-ui, -apple-system, sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap",
  },

  // ---- LOGOS ----
  logos: {
    main: "",  // /img/clientes/cafe-pura-vida-logo.png
    favicon: "",
    width: 44,
    height: 44,
  },

  // ---- NAVEGACION ----
  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Menu", href: "#servicios" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Galeria", href: "#galeria" },
      { label: "Visitanos", href: "#contacto" },
    ],
    ctaButton: {
      label: "Pedi por WhatsApp",
      href: "https://wa.me/50688881234?text=Hola%20Cafe%20Pura%20Vida%2C%20quiero%20hacer%20un%20pedido",
      isExternal: true,
    },
  },

  // ---- SECCION HERO ----
  hero: {
    badge: "Desde 2020",
    title: "Cafe de Altura, Sabor de Casa",
    subtitle: "Disfruta del mejor cafe 100% costarricense en un espacio pensado para vos. Reposteria artesanal, WiFi gratis y la mejor vibra del barrio.",
    ctaPrimary: {
      label: "Ver el Menu",
      href: "#servicios",
    },
    ctaSecondary: {
      label: "Visitanos",
      href: "#contacto",
    },
    backgroundImage: "",  // /img/clientes/cafe-hero.jpg
  },

  // ---- SECCION SERVICIOS (Menu en este caso) ----
  services: {
    badge: "Nuestra carta",
    title: "Menu Destacado",
    subtitle: "Los favoritos de nuestros clientes, hechos con amor y los mejores granos del Valle Central.",
    items: [
      {
        icon: "coffee",
        title: "Cafe de Especialidad",
        description: "Granos de Tarrazu y West Valley. Preparados en V60, Chemex, Aeropress o espresso.",
      },
      {
        icon: "heart",
        title: "Reposteria Artesanal",
        description: "Queques, galletas y postres hechos en casa cada manana. Opciones veganas disponibles.",
      },
      {
        icon: "star",
        title: "Desayunos Ticos",
        description: "Gallo pinto, huevos al gusto, platano maduro y el mejor cafe para empezar el dia.",
      },
      {
        icon: "clock",
        title: "Happy Hour 3-5pm",
        description: "2x1 en bebidas frias todos los dias de 3 a 5 de la tarde. El secreto mejor guardado.",
      },
      {
        icon: "truck",
        title: "Cafe para Llevar",
        description: "Pedidos para llevar o por WhatsApp. Bolsas de cafe en grano o molido para tu casa.",
      },
      {
        icon: "briefcase",
        title: "Espacio Coworking",
        description: "WiFi de alta velocidad, enchufes en cada mesa y ambiente tranquilo para trabajar.",
      },
    ],
  },

  // ---- SECCION SOBRE NOSOTROS ----
  about: {
    badge: "Nuestra historia",
    title: "Sobre Cafe Pura Vida",
    paragraphs: [
      "Nacimos en 2020 con un sueno simple: llevar el mejor cafe de altura de Costa Rica directamente a tu taza, en un espacio donde te sintieras como en casa.",
      "Trabajamos directamente con productores de Tarrazu, West Valley y Brunca. Cada grano es tostado artesanalmente para resaltar sus notas unicas. Nuestro compromiso es con el cafe de calidad, el comercio justo y la comunidad.",
    ],
    image: "",  // /img/clientes/cafe-about.jpg
    values: [
      { title: "Origen Directo", description: "Compramos directamente a los productores costarricenses sin intermediarios." },
      { title: "Tostado Artesanal", description: "Tostamos en lotes pequenos para garantizar frescura y sabor en cada taza." },
      { title: "Comunidad", description: "Somos mas que una cafeteria: somos el punto de encuentro del barrio." },
    ],
  },

  // ---- SECCION GALERIA ----
  gallery: {
    badge: "Momentos",
    title: "Nuestra Galeria",
    subtitle: "Asi se vive la experiencia Cafe Pura Vida.",
    images: [
      { src: "", alt: "Interior del cafe" },
      { src: "", alt: "Latte art" },
      { src: "", alt: "Reposteria del dia" },
      { src: "", alt: "Granos de cafe" },
      { src: "", alt: "Clientes disfrutando" },
      { src: "", alt: "Barista preparando" },
    ],
  },

  // ---- SECCION CONTACTO ----
  contact: {
    badge: "Visitanos",
    title: "Como Llegar",
    subtitle: "Te esperamos con una taza caliente y una sonrisa.",
    phone: "+506 8888-1234",
    whatsapp: "https://wa.me/50688881234?text=Hola%20Cafe%20Pura%20Vida",
    email: "hola@cafepuravida.cr",
    address: "Barrio Escalante, San Jose, Costa Rica",
    hours: "Lunes a Sabado: 7:00 AM - 7:00 PM | Domingo: 8:00 AM - 4:00 PM",
    formAction: "https://formspree.io/f/XXXXXXXX",
    social: {
      instagram: "https://instagram.com/cafepuravida",
      facebook: "https://facebook.com/cafepuravida",
      tiktok: "",
      whatsapp: "https://wa.me/50688881234",
    },
  },

  // ---- FOOTER ----
  footer: {
    tagline: "Cafe de altura, sabor de casa.",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Menu", href: "#servicios" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Visitanos", href: "#contacto" },
    ],
    credit: {
      show: true,
      text: "Sitio web creado por",
      linkText: "Teknika CR",
      linkUrl: "https://teknika.co.cr",
    },
  },

  // ---- SEO ----
  seo: {
    title: "Cafe Pura Vida - Cafe Artesanal en San Jose, Costa Rica",
    description: "Cafeteria artesanal en Barrio Escalante, San Jose. Cafe de altura 100% costarricense, reposteria casera y espacio coworking. Visitanos.",
    locale: "es_CR",
    themeColor: "#2C1810",
  },
};

export type ClientConfig = typeof clientConfig;
