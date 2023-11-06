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
            h-[315px] w-[330px]
            overflow-hidden rounded-xl
          "
    >
      <img src={imgSrc} alt={title} />

      <div className="absolute min-h-[170px] bottom-0 text-white bg-[#092435] px-[18px] py-[9px]">
        <div className=" font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-xl">
          {title}
        </div>
        <div className="text-[13px]">{content}</div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div
      id="metodo"
      className="relative flex flex-col min-h-[800px] py-1 pb-[35px] md:py-[88px] gap-5 md:gap-20"
    >
      <img
        src="/section4/vector-section-4.png"
        alt="logo"
        className="
            absolute hidden md:flex left-[531px] top-[344px]
            h-[83px]
          "
      />
      <img
        src="/section4/vector-section-4.png"
        alt="logo"
        className="
            absolute hidden md:flex left-[772px] top-[344px] 
            h-[83px] -scale-x-100
          "
      />
      <img
        src="/section4/vector-section-4.png"
        alt="logo"
        className="
          absolute hidden md:flex left-[531px] top-[813px]
            h-[83px] -scale-y-100
          "
      />
      <img
        src="/section4/vector-section-4.png"
        alt="logo"
        className="
          absolute hidden md:flex left-[772px] top-[813px] 
          h-[83px] -scale-x-100 -scale-y-100
          "
      />

      <div className=" w-max m-auto text-2xl md:text-6xl text-center font-bold tracking-[.04rem] md:tracking-[.10rem] ">
        <div
          className=" 
        relative after:content-[''] after:absolute 
        after:bottom-[0px] md:after:bottom-[-10px] after:left-0  
        after:h-[6px] md:after:h-[10px] after:w-full
        after:bg-gradient-to-r after:from-[#2ABA64] after:to-[#3369FF] "
        >
          Método de transformación
        </div>
        <div className="md:mt-4">enfocado en descubrir:</div>
      </div>

      <div className="grid  grid-cols-1 gap-5 md:grid-cols-3 items-center mt-1">
        <div
          className="
            flex flex-col gap-5 md:gap-10
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
            flex flex-col gap-5 md:gap-10
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
