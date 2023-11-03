const CardsInfo = [
  {
    imgSrc: "/section4/bg-1-section-4.png",
    title: "Tu luz adecuada",
    content:
      "Cuál es su fuente, cuál es la luz que ilumina tu vida, tu camino, tu viaje y te proporciona todo de manera divina y perfecta.",
  },
  {
    imgSrc: "/section4/bg-2-section-4.png",
    title: "Tu agua de vida",
    content:
      "Es esencial en nuestra nutrición y vitalidad, en nuestra fluidez y adaptabilidad, en nuestra purificación y renovación, en nuestra fuerza y perseverancia.",
  },
  {
    imgSrc: "/section4/bg-3-section-4.png",
    title: "Tu nueva humanidad",
    content:
      "En esta amplia gama de sensaciones, como esa luz que nos ilumina en todo momento, ese cuerpo que nos ha sido entregado para respetarlo, cuidarlo y protegerlo, esa agua de vida que consumimos y ese aire sano y limpio que respiramos para encontrar ese propósito de vida que nos lleve a ser nuestra mejor versión.",
  },
  {
    imgSrc: "/section4/bg-4-section-4.png",
    title: "Tu cuerpo fértil",
    content:
      "La aceptación y la gratitud, junto con tu diálogo interno positivo, el autoconocimiento y el desarrollo de tu inteligencia emocional, son elementos clave que te impulsarán a un nivel superior en tu vida.",
  },
  {
    imgSrc: "/section4/bg-5-section-4.png",
    title: "Tu aire nutritivo",
    content:
      "Identificar y aceptar el aire que nos nutre, que acompaña nuestro ser y nos permite respirar con paz y tranquilidad. Este entorno de relaciones significativas y sólidas.",
  },
];

const Card = ({
  imgSrc,
  title,
  content,
}: {
  imgSrc: string;
  title: string;
  content: string;
}) => {
  return (
    <div
      className="
            flex flex-col relative
            items-center
            h-[315px] w-[334px]
            overflow-hidden rounded-xl carta
          "
    >
      <img src={imgSrc} alt={title} className="imagen_carta"/>

      <div className="absolute bottom-0 min-h-2/4 p-6 bg-[#092435] text-white 
                    transition duration-150 ease-out 
                    hover:text-red-700 contenido_carta
      ">
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="flex flex-col min-h-[800px] py-[85px] px-[165px] gap-[50px]">
      <div className="flex flex-col gap-4 w-max m-auto text-6xl text-center font-bold">
        <div className=" relative
              after:content-[''] after:absolute 
              after:bottom-[-10px] after:left-0 
              after:h-[10px] after:w-full
              after:bg-gradient-to-r after:from-[#2ABA64] after:to-[#3369FF]
        ">
          Método de transformación
          </div>
        <div>enfocado en descubrir:</div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div
          className="
            flex flex-col gap-[70px]
            items-center
          "
        >
          <Card {...CardsInfo[0]} />
          <Card {...CardsInfo[1]} />
        </div>
        <div
          className="
            flex flex-col gap-10
            items-center
          "
        >
          <Card {...CardsInfo[2]} />
        </div>
        <div
          className="
            flex flex-col gap-[70px]
            items-center
          "
        >
          <Card {...CardsInfo[3]} />
          <Card {...CardsInfo[4]} />
        </div>
      </div>
    </div>
  );
};

export default Section4;
