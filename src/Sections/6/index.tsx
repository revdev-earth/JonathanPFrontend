const CardsInformation = [
  {
    content:
      "Jonathan solo quería pasar a agradecerte por cada una de las palabras de apoyo que me has dado en todo este proceso de encontrarme conmigo misma, por siempre escucharme y desde tu conocimiento y sabiduría saberme guiar y darle luz a ese sendero que muchas veces seguía oculto para mi.",
    name: "Juan Esteban Reyes",
    profesion: "Psicoterapia",
  },
  {
    content:
      "Conocer a la persona detrás del proceso de coaching te lleva a ver un mundo diferente, te lleva a interiorizar todo aquello que deseas cumplir en tu vida, mirando tu presente pero proyectado al futuro. Jonathan es una excelente persona y tiene mucha calidad humana, una experiencia que todos deberíamos vivir.",
    name: "Giovanny Acevedo",
    profesion: "33 años",
  },
  {
    content:
      "Jonathan, hola! Quería agradecerte por el apoyo que me has dado a través del conocimiento que has adquirido, el acompañamiento en este Cre-Ser interior y despertar a tener una conexión con el presente, el estar mas enfocada en objetivos marcados, a Encontrar en conjunto el propósito de vida que va más allá de lo laboral.",
    name: "Juan Esteban Reyes",
    profesion: "Psicoterapia",
  },
];

const Card = ({
  content,
  name,
  profesion,
}: {
  content: string;
  name: string;
  profesion: string;
}) => {
  return (
    <div
      className="
        flex flex-col 
        text-black bg-[#FFFAEB]
        w-[338px]
        rounded-b-xl overflow-hidden
      "
    >
      <div
        className=" 
          h-[12px] -mt-[3px] w-full
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      />

      <div
        className="
          py-5 px-[26px] flex-1
          text-[17px] leading-[19px]
        "
      >
        {content}
      </div>

      <div className="p-4 flex flex-col gap-2 items-center bg-[#071E2C] text-white">
        <img src="/section6/stars.png" alt="start" />
        <div
          className="
            text-[24px]
            bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text
          "
        >
          {name}
        </div>
        <div className="-mt-[10px]">{profesion}</div>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div
      className="
        flex flex-col 
        gap-6 lg:gap-[62px] min-h-[500px] 
        py-5 lg:py-[73px]
        pb-[7px]
      "
    >
      <div
        className="
          font-gopher font-bold
          text-[27px] lg:text-[60px]
          w-fit m-auto
        "
      >
        Transformaciones
        <div
          className=" w-full 
            h-[5px] lg:h-[10px]
            -mt-[3px] lg:-mt-[11px]
            bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
          "
        />
      </div>
      <div
        className="
          grid lg:grid-cols-3 
          gap-10 lg:gap-8
          w-fit m-auto
        "
      >
        {CardsInformation.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Section6;
