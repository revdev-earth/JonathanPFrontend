import "./style.css";

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
  favorite,
}: {
  imgSrc: string;
  title: string;
  content: string;
  favorite?: boolean;
}) => {
  return (
    <div
      className={` card-s4 cursor-pointer
        flex flex-col relative group
        items-center w-[330px]
        ${favorite ? "h-[355px]" : "h-[315px]"} 
        overflow-hidden rounded-xl shadow-[0_0_30px_0_rgba(0,0,0,0.25)]
      `}
    >
      <img className="relative hover:image" src={imgSrc} alt={title} />

      <div
        className={`
          absolute min-h-[170px] bottom-0 text-white hover:text
          px-[18px] py-[9px] pb-[18px] cursor-pointer
          ${
            favorite
              ? "bg-gradient-to-t from-[#2ABA64] to-[#3369FF]"
              : "bg-[#092435]"
          } 
        `}
      >
        <div
          className={`
            font-bold text-xl cursor-pointer
            ${
              favorite
                ? "text-black"
                : `bg-clip-text text-transparent bg-gradient-to-r from-[#2ABA64] to-[#3369FF]`
            } 
          `}
        >
          {title}
        </div>
        <div className="text-[13px] cursor-pointer">{content}</div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div
      id="metodo"
      className="
        relative flex flex-col min-h-[800px] 
        py-1 pb-[35px] md:py-[88px] md:pb-[100px] 
        gap-5 md:gap-[40px]
      "
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

      <div
        className="
          grid gap-5
          md:flex m-auto md:gap-[36px]
          items-center mt-1"
      >
        <div
          className="
            flex flex-col gap-5 md:gap-[68px]
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
          <Card {...CardsInfo[2]} favorite />
        </div>
        <div
          className="
            flex flex-col gap-5 md:gap-[68px]
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
