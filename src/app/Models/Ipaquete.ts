export interface Paquete {
    id: number;
    nombre: string;
    pais: String;
    ref_1: string;
    ref_2: string;
    ref_3: string;
    ref_4: string;
    estrellas: number[];
    descripcion_1: string;
    descripcion_2: string;
    descripcion_ubicacion: string;
    costo: number;
}

export const listaPaquetes:Paquete[] = [
  {id: 0,
    nombre: "4 Parques Disney",
    pais: "Florida, Estados Unidos",
    ref_1: "../../assets/img/disney-2.jpg", 
    ref_2: "../../assets/img/disney-1.jpeg",
    ref_3: "../../assets/img/disney.jpeg",
    ref_4: "../../assets/img/disney2.avif",
    estrellas: [1,1],
    descripcion_1: "Vive la magia en su máxima expresión con nuestra experiencia en los Parques Disney. Sumérgete en un mundo de fantasía donde los sueños se hacen realidad en Disneyland y Disney World. Desde emocionantes atracciones y deslumbrantes espectáculos hasta encuentros con tus personajes favoritos de Disney",
    descripcion_2: "Prepárate para divertirte en atracciones con mucha música, fuegos artificiales destellantes y toda la magia de este mundo donde reina la fantasía.¡Vas a poder abrazar a Mickey, Minnie y otros personajes queridos!Descubre los parques <br><br>• En Magic Kingdom podrás disfrutar de las atracciones clásicas de Disney, destellantes fuegos artificiales, espectáculos musicales y de la compañía de los personajes más queridos de Disney World. <br><br>• En Epcot, descubrirás las culturas del mundo en sus increíbles pabellones internacionales, te divertirás en sus emocionantes atracciones y vivirás un día diferente junto a la mejor tecnología. <br><br>•En Disney’s Hollywood Studios, conocerás un poco más sobre las películas y series de TV de Disney y disfrutarás de increíbles espectáculos. <br><br>•Ya en Disney’s Animal Kingdom, podrás conocer a los animales de distintos lugares del mundo en áreas como Asia y Africa, además de disfrutar del mundo submarino y del prehistórico.",
    descripcion_ubicacion: "Orlando, Florida, Estados Unidos a 25 minutos del centro.",
    costo: 9040
   },
  {id: 1,
   nombre: "Dubai",
   pais: "Emiratos Árabes Unidos",
   ref_1: "../../assets/img/emiratos-arabes-0.jpg",
   ref_2: "../../assets/img/emiratos-arabes-1.webp",
   ref_3: "../../assets/img/emiratos-arabes-2.jpg",
   ref_4: "../../assets/img/emiratos-arabes-3.jpg",
   estrellas: [1,1,1,1],
   descripcion_1: "Sumérgete en el lujo y la modernidad de Dubái, hogar de impresionantes rascacielos y centros comerciales de clase mundial. Explora la rica cultura e historia en Abu Dabi, donde podrás visitar la icónica Gran Mezquita Sheikh Zayed y el lujoso Palacio de los Emiratos. Disfruta de emocionantes actividades como safaris en el desierto y cruceros por el Golfo Pérsico. Experimenta la opulencia y la autenticidad de los Emiratos Árabes Unidos en una experiencia inolvidable.",
   descripcion_2: "Descubre la majestuosidad de los Emiratos Árabes Unidos con nuestro exclusivo paquete turístico. Sumérgete en el lujo y la modernidad de Dubái, hogar de impresionantes rascacielos, centros comerciales de clase mundial y emocionantes parques temáticos. Explora la rica cultura e historia en Abu Dabi, donde podrás visitar la icónica Gran Mezquita Sheikh Zayed y el lujoso Palacio de los Emiratos. Adéntrate en el oasis de Al Ain y maravíllate con su paisaje desértico y sus oasis exuberantes. Disfruta de emocionantes actividades, desde safaris en el desierto hasta cruceros por el agua turquesa del Golfo Pérsico. Con nuestro paquete turístico, experimentarás la opulencia y la autenticidad de los Emiratos Árabes Unidos en una experiencia inolvidable. ¡Reserva ahora y deja que tus sueños de viaje se hagan realidad en este fascinante destino!",
   descripcion_ubicacion: "Dubai, Emiratos Árabes Unidos a 12 minutos del centro.",
   costo: 1200
  },
  {id: 2,
    nombre: "Paris",
    pais: "Francia",
    ref_1: "../../assets/img/francia-0.jpg",
    ref_2: "../../assets/img/francia-1.webp",
    ref_3: "../../assets/img/francia-2.jpg",
    ref_4: "../../assets/img/francia-3.jpg",
    estrellas: [1,1,1,1],
    descripcion_1: "Descubre la elegancia de París y su icónica Torre Eiffel, pasea por sus encantadores bulevares y disfruta de la exquisita gastronomía francesa. Explora la historia y la arquitectura en ciudades como Lyon y Marsella. Embárcate en un viaje por la campiña francesa y descubre castillos majestuosos y encantadores pueblos medievales. Experimenta la belleza y el encanto de Francia en una aventura inolvidable.",
    descripcion_2: "Explora la belleza y la sofisticación de Francia con nuestro emocionante paquete turístico. Sumérgete en la romántica ciudad de París, donde podrás maravillarte con la icónica Torre Eiffel, pasear por los encantadores bulevares y deleitarte con la exquisita gastronomía francesa. Descubre la rica historia y la arquitectura impresionante en ciudades como Lyon y Marsella, donde cada rincón cuenta una historia fascinante. Explora la región vinícola de Burdeos y déjate cautivar por los paisajes de viñedos interminables y los encantadores pueblos medievales. Embárcate en un viaje por la campiña francesa y descubre castillos majestuosos, jardines exuberantes y encantadoras aldeas. Con nuestro paquete turístico, experimentarás la elegancia y el encanto de Francia en una aventura inolvidable. ¡Reserva ahora y descubre por qué Francia es uno de los destinos más cautivadores del mundo!",
    descripcion_ubicacion: "Paris, Francia a 8 minutos del centro.",
    costo: 5990
   },
   {id: 3,
    nombre: "Cancún",
    pais: "Mexico",
    ref_1: "../../assets/img/mexico-0.avif",
    ref_2: "../../assets/img/mexico-1.avif",
    ref_3: "../../assets/img/mexico-2.jpg",
    ref_4: "../../assets/img/mexico-3.jpg",
    estrellas: [1,1,1],
    descripcion_1: "Descubre las paradisíacas playas de Cancún y Riviera Maya, donde podrás relajarte en un hotel frente al mar y disfrutar de actividades como snorkel y buceo. Experimenta la calidez y la hospitalidad de México en una aventura inolvidable. ¡Reserva ahora y déjate cautivar por el encanto único de este destino!",
    descripcion_2: "Descubre la diversidad y la riqueza cultural de México con nuestro apasionante paquete turístico. Sumérgete en la vibrante Ciudad de México, donde podrás explorar antiguas ruinas aztecas, sumergirte en la atmósfera animada de sus mercados y deleitarte con la deliciosa gastronomía mexicana. Explora las playas paradisíacas de Cancún y Riviera Maya, donde podrás relajarte en arenas blancas y aguas turquesas o disfrutar de emocionantes deportes acuáticos. Sumérgete en la historia en la pintoresca ciudad de Oaxaca, con su arquitectura colonial y su artesanía tradicional. Descubre la belleza natural de Chiapas, con sus impresionantes cascadas y su exuberante selva tropical. Con nuestro paquete turístico, experimentarás la calidez y la hospitalidad de México en una aventura inolvidable. ¡Reserva ahora y deja que México te sorprenda con su encanto único!",
    descripcion_ubicacion: "Cancún, Mexico a 45 minutos del centro.",
    costo: 2030
   },
  {id: 4,
   nombre: "Relax en el Caribe",
   pais: "Caribe",
   ref_1: "../../assets/img/relax-caribe-0.avif",
   ref_2: "../../assets/img/mexico-1.avif",
   ref_3: "../../assets/img/mexico-2.jpg",
   ref_4: "../../assets/img/mexico-3.jpg",
   estrellas: [1,1,1],
   descripcion_1: "Relájate y rejuvenece en el paraíso del Caribe con nuestro paquete de relax. Disfruta de playas de arena blanca, aguas cristalinas y exuberantes paisajes tropicales mientras te hospedas en un resort todo incluido frente al mar. Sumérgete en la serenidad del entorno mientras te deleitas con actividades como el snorkel en arrecifes de coral, paseos en catamarán al atardecer y masajes rejuvenecedores en el spa",
   descripcion_2: "",
   descripcion_ubicacion: "",
   costo: 900
  },
  {id: 5,
    nombre: "Recorrido Cultural por Europa",
    pais: "Europa",
    ref_1: "../../assets/img/europa-0.jpg",
    ref_2: "../../assets/img/europa-1.jpg",
    ref_3: "../../assets/img/europa-2.jpeg",
    ref_4: "../../assets/img/europa-3.jpg",
    estrellas: [1,1,1],
    descripcion_1: "Sumérgete en la riqueza cultural y la historia milenaria de Europa con nuestro recorrido cultural. Desde los majestuosos monumentos de Roma hasta las encantadoras calles empedradas de Praga, cada destino te cautivará con su belleza y su legado histórico. Disfruta de museos de clase mundial, galerías de arte impresionantes y la exquisita gastronomía de cada región mientras te sumerges en la esencia única de Europa.",
    descripcion_2: "",
    descripcion_ubicacion: "",
    costo: 3900
   },
   {id: 6,
    nombre: "Aventura en la Patagonia",
    pais: "Argentina",
    ref_1: "../../assets/img/patagonia-0.avif",
    ref_2: "../../assets/img/patagonia-1.jpg",
    ref_3: "../../assets/img/patagonia-3.jpg",
    ref_4: "../../assets/img/patagonia-2.jpg ",
    estrellas: [1,1,1,1],
    descripcion_1: "Embárcate en una aventura inigualable en la majestuosa Patagonia, donde la naturaleza salvaje te espera con sus impresionantes paisajes montañosos, glaciares imponentes y una fauna única. Desde emocionantes excursiones de senderismo hasta navegaciones por fiordos y avistamiento de ballenas, cada momento será una experiencia inolvidable de exploración y descubrimiento.",
    descripcion_2: "Descubre la majestuosidad de la Patagonia Argentina con nuestra aventura única. Embárcate en un viaje inolvidable a través de paisajes impresionantes, desde glaciares imponentes hasta lagos cristalinos y montañas imponentes. Explora la belleza natural de lugares como el Parque Nacional Los Glaciares, hogar del famoso Glaciar Perito Moreno, y el Parque Nacional Nahuel Huapi, con sus bosques antiguos y lagos de aguas turquesas. Sumérgete en la cultura local y descubre la historia de la región en encantadores pueblos como El Calafate y Bariloche. Con nuestra aventura en la Patagonia Argentina, experimentarás la naturaleza en su estado más puro y te llevarás recuerdos inolvidables de este paraíso natural. ¡Únete a nosotros y descubre la magia de la Patagonia!",
    descripcion_ubicacion: "Patagonia, Argentina y Chile a 1 hora con 45 minutos del centro.",
    costo: 500
   }
]