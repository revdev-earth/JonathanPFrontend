export interface ModalDataInterface {
  title: string;
  price: number;
  priceText: string;
  subtitle: string;
  text1: string[];
  question: string;
  answer: string;
  text2: string;
  preferentWords: {
    blue: string[];
    green: string[];
  };
  titleList1: string;
  list1: string[];
  titleList2: string;
  list2: string[];
  text3: string;
}

export const ModalData = [
  {
    title: "Iluminación Propia",
    price: 597,
    priceText: "Programa de 6 Sesiones",
    subtitle: "Estas transformaciones se realizan...",
    text1: [
      "Por medio de una Sesión online personalizada, de entre 60 a 90 minutos, en una videoconferencia en la plataforma Meet donde podrás elegir el horario que te quede más asequible, recuerda activar tu cámara y audio, lo podrás realizar desde cualquier parte del mundo.",
      "Necesitamos un espacio seguro para ti, sin interrupciones, que te dé completa tranquilidad y seguridad para comunicarte.",
    ],
    question: "¿Qué obtienes?",
    answer:
      "6 videollamadas privadas de entre 60 y 90 minutos con Jonathan Pérez. Las llamadas serán semanales o cada dos semanas.",
    text2:
      "Este entrenamiento tiene como base nutrir tu autoestima y amor por ti mismo, experimentarás un mayor control interno, lo que desencadenará pensamientos más saludables, sentimientos más auténticos y acciones más significativas.",
    preferentWords: {
      blue: ["tu autoestima"],
      green: ["pensamientos", "sentimientos", "acciones"],
    },
    titleList1: "Si te sientes así...",
    list1: [
      "No conoces tus debilidades y fortalezas.",
      "Sientes que te falta amarte y aceptarte tal y como eres.",
      "Sientes que tu relación contigo mismo es autosaboteo y autocritica.",
      "No sabes que es lo que te bloquea o limita en las relaciones.",
      "Tienes pensamientos que te controlan",
      "Las ideas que tienes en tu mente no son saludables para ti.",
    ],
    titleList2: "Te acompañare a...",
    list2: [
      "Tendrías la capacidad de poner límites a tus relaciones",
      "Sabrías cuáles son tus No negociables.",
      "Tendrías la fuerza para mejorar tus pensamientos, tus sentimientos y tus acciones.",
      "Sentirías la confianza y la determinación de cambiar todo a tu alrededor.",
      "Sentirás la fuerza interior para superar cualquier reto en tu vida.",
    ],
    text3:
      "¡¡ Toma acción y responsabilidad, no es casualidad que hayas llegado hasta aquí!!",
  },
];
