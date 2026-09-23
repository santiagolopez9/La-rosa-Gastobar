export interface MenuItem {
  id: string;
  name: string;
  category: 'cocktails' | 'tapas' | 'platos' | 'postres';
  price: number;
  description: string;
  tag: string;
  image?: string;
  tastingNote?: string;
  isSignature?: boolean;
}

export interface GastroEvent {
  id: string;
  title: string;
  dateOrDay: string;
  description: string;
  tag: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  timeAgo: string;
  spend: string;
  comment: string;
  likes?: number;
}

export const RESTAURANT_DATA = {
  name: 'La Rosa Bar',
  subtitle: 'Gastro bar',
  emoji: '🌹',
  slogan: 'Donde cada noche florece',
  concept: 'Una nueva experiencia en el corazón de La Candelaria',
  description: 'Un lugar donde los cócteles, la música, la cultura y la buena compañía florecen cada noche en una histórica casona colonial.',
  address: 'Cra. 3 Este #8-61, La Candelaria, Bogotá, Colombia',
  referenceAddress: 'Zona histórica de La Candelaria (cerca a Calle 9)',
  phone: '320 3934249',
  phoneClean: '573203934249',
  rating: 5.0,
  reviewsCount: 10,
  priceRange: '$40,000 - $80,000 COP',
  hours: 'Abierto hoy · Cierra a las 11:30 p.m.',
  services: [
    'Terraza con vista & aire libre',
    'Coctelería de autor & comida en el bar',
    'Escena cultural & libros',
    'Ambiente Pet-Friendly 🐾',
    'Parqueadero 24h a solo una cuadra',
  ],
  socials: {
    instagram: 'https://www.instagram.com/larosagastrobar_',
    instagramHandle: '@larosagastrobar_',
    whatsapp: 'https://wa.me/573203934249',
    googleMaps: 'https://maps.google.com/?q=Cra.+3+Este+%238-61,+Bogota',
  },
};

// Exact real reviews from Google Maps
export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Anastasia Rubio Betancourt',
    badge: 'Comensal en La Candelaria',
    rating: 5,
    timeAgo: 'Hace 3 meses',
    spend: '$60,000-80,000',
    comment: 'Mágico ❤️ no se pueden ir de La Candelaria sin conocer este lugar.',
    likes: 2,
  },
  {
    id: 'rev-2',
    author: 'Felipe',
    badge: 'Comensal verificado',
    rating: 5,
    timeAgo: 'Hace 3 meses',
    spend: '$60,000-80,000',
    comment: 'Una experiencia llena de emociones, lugares mágicos, gran atención y excelente comida ❤️',
    likes: 2,
  },
  {
    id: 'rev-3',
    author: 'Sergio Palenqui',
    badge: 'Local Guide · 8 opiniones',
    rating: 5,
    timeAgo: 'Hace 5 meses',
    spend: '$60,000-80,000',
    comment: 'La ubicación, su gente, escena cultural y terraza, hacen que sea muy confortable!',
    likes: 1,
  },
  {
    id: 'rev-4',
    author: 'Carlos Arturo Morales Rodriguez',
    badge: 'Local Guide · 29 opiniones',
    rating: 5,
    timeAgo: 'Hace un mes',
    spend: '$40,000-60,000',
    comment: 'Muy rico el ambiente colonial y las bebidas.',
  },
  {
    id: 'rev-5',
    author: 'Jenny Paola',
    badge: 'Comensal verificada',
    rating: 5,
    timeAgo: 'Hace un mes',
    spend: '$40,000-60,000',
    comment: 'Excelente lugar. No hay parqueadero en el lugar, pero a una cuadra hay uno 24hrs súper cómodo.',
  },
  {
    id: 'rev-6',
    author: 'Jonatan Agüero',
    badge: 'Local Guide · 157 opiniones',
    rating: 5,
    timeAgo: 'Hace un mes',
    spend: '$40,000-60,000',
    comment: 'Rico todo, atención de diez y el sitio espectacular.',
  },
];

export const CURATED_MENU: MenuItem[] = [
  // Coctelería
  {
    id: 'c-1',
    name: 'Cóctel La Rosa Insignia',
    category: 'cocktails',
    price: 38000,
    description: 'Nuestra firma en copa de cristal: destilado botánico infusionado, perfume de rosas rojas y notas cítricas.',
    tag: 'Insignia',
    image: '/src/assets/images/cocktail_rose_isolated_1790123873322.jpg',
    tastingNote: 'Floral, equilibrado y aromático. Servido con rosa roja natural.',
    isSignature: true,
  },
  {
    id: 'c-2',
    name: 'Mezcal Candelaria Ahumado',
    category: 'cocktails',
    price: 42000,
    description: 'Mezcal artesanal, escarcha de sal de rosas, frutos del bosque y romero encendido en mesa.',
    tag: 'Ahumado',
    image: '/src/assets/images/cocktail_signature_rose_1790121437924.jpg',
    tastingNote: 'Notas ahumadas profundas con final especiado.',
    isSignature: true,
  },
  {
    id: 'c-3',
    name: 'Gin Tonic Botánico & Rosas',
    category: 'cocktails',
    price: 36000,
    description: 'Ginebra prémium macerada con pétalos orgánicos, bayas de enebro y tónica rosada fina.',
    tag: 'Clásico floral',
    image: '/src/assets/images/terrace_acoustic_vibe_1790121460226.jpg',
    tastingNote: 'Burbuja fina, refrescante y botánica.',
  },
  {
    id: 'c-4',
    name: 'Spritz Atardecer Colonial',
    category: 'cocktails',
    price: 34000,
    description: 'Prosecco, bitter artesanal, infusión de rosas y rodaja de naranja deshidratada.',
    tag: 'Aperitivo',
    image: '/src/assets/images/hero_gastrobar_ambiance_1790121425802.jpg',
    tastingNote: 'Ligero, cítrico y chispeante para la terraza.',
  },

  // Tapas de bar
  {
    id: 't-1',
    name: 'Tabla La Rosa (Quesos & Charcutería)',
    category: 'tapas',
    price: 58000,
    description: 'Selección de quesos madurados, jamón curado, frutos secos, miel aromatizada y pan campesino.',
    tag: 'Para compartir',
    image: '/src/assets/images/gastrobar_tapas_board_1790121449442.jpg',
    tastingNote: 'Maridaje ideal con vinos tintos o coctelería botánica.',
    isSignature: true,
  },
  {
    id: 't-2',
    name: 'Panceta Glaseada en Miel de Rosas',
    category: 'tapas',
    price: 42000,
    description: 'Trozos crujientes de panceta cocida a fuego lento con reducción dulce de rosas y chips andinos.',
    tag: 'Favorito comensales',
    image: '/src/assets/images/gourmet_dish_platter_1790123886886.jpg',
    tastingNote: 'Crocancia exterior y terneza melosa por dentro.',
    isSignature: true,
  },
  {
    id: 't-3',
    name: 'Croquetas Artesanales de Jamón Serrano',
    category: 'tapas',
    price: 32000,
    description: 'Bechamel suave con virutas de jamón curado y alioli casero de ajo asado.',
    tag: 'Tradición',
    image: '/src/assets/images/gastrobar_tapas_board_1790121449442.jpg',
    tastingNote: 'Cremosas por dentro, doradas y crujientes por fuera.',
  },

  // Platos Gastrobar
  {
    id: 'p-1',
    name: 'Hamburguesa Artesanal La Rosa',
    category: 'platos',
    price: 44000,
    description: 'Carne angus seleccionada, queso fundido, cebolla caramelizada al vino tinto y pan brioche horneado a diario.',
    tag: 'Plato Fuerte',
    image: '/src/assets/images/gourmet_dish_platter_1790123886886.jpg',
    tastingNote: 'Sabor umami pronunciado, jugosa y en pan brioche dorado.',
    isSignature: true,
  },
  {
    id: 'p-2',
    name: 'Lomo al Vino en Brasas de Candelaria',
    category: 'platos',
    price: 56000,
    description: 'Medallones tiernos en reducción de uvas y hierbas de huerto, acompañados de papas rústicas.',
    tag: 'Corte Prémium',
    image: '/src/assets/images/gourmet_dish_platter_1790123886886.jpg',
    tastingNote: 'Corte suave sellado a la brasa con salsa sedosa.',
  },

  // Postres
  {
    id: 'd-1',
    name: 'Postre de Rosas & Frutos Silvestres',
    category: 'postres',
    price: 22000,
    description: 'Mousse aireado con infusión de rosas naturales sobre base crocante de almendras.',
    tag: 'Dulce Floral',
    image: '/src/assets/images/cocktail_rose_isolated_1790123873322.jpg',
    tastingNote: 'Suave, sedoso con sutil acidez de frutos rojos.',
    isSignature: true,
  },
];

export const CURATED_EVENTS: GastroEvent[] = [
  {
    id: 'ev-1',
    title: 'Música & Acústicos en Vivo',
    dateOrDay: 'Jueves a Sábado',
    description: 'Músicos locales y sesiones acústicas entre vigas coloniales y velas.',
    tag: 'En Vivo',
  },
  {
    id: 'ev-2',
    title: 'Noches de Cócteles Especiales',
    dateOrDay: 'Viernes de Candelaria',
    description: 'Cócteles de autor fuera de carta preparados al momento frente a la barra.',
    tag: 'Bar Exclusivo',
  },
  {
    id: 'ev-3',
    title: 'Tardeo Cultural en Terraza',
    dateOrDay: 'Sábados & Domingos',
    description: 'Disfruta el atardecer, lectura entre libros de la casa, café de origen y ambiente pet friendly.',
    tag: 'Terraza & Chill',
  },
];
