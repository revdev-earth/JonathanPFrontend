const CardsInformation = [
  {
    content:
      'A partir de la  comprensión y el amor aprendi que en el cultivo de mi interioridad estaban las respuesta a preguntas que insistentemente buscaba afuera. La apertura de conciencia, el influjo hacia los demás y la paz interior es el fruto de ese amor propio. Un regalo tan "sabroso" e infinito, que vale la pena compartir.',
    name: "Juan Esteban Reyes",
    profesion: "Psicoterapia",
  },
  {
    content:
      "Conocer a la persona detrás del proceso de coaching te lleva a ver un mundo diferente, te lleva a interiorizar todo aquello que deseas cumplir en tu vida, mirando tu presente pero proyectado al futuro. Jonathan es una excelente persona y calidad humana, una experiencia que todos deberíamos vivir",
    name: "Giovanny Acevedo",
    profesion: "33 años",
  },
  {
    content:
      'A partir de la  comprensión y el amor aprendi que en el cultivo de mi interioridad estaban las respuesta a preguntas que insistentemente buscaba afuera. La apertura de conciencia, el influjo hacia los demás y la paz interior es el fruto de ese amor propio. Un regalo tan "sabroso" e infinito, que vale la pena compartir.',
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
    <div className="flex flex-col w-[330px] text-black bg-[#FFFAEB] rounded-b-lg overflow-hidden ">
      <div className="p-10 flex-1">{content}</div>

      <div className="p-5 flex flex-col gap-2 items-center bg-[#071E2C] text-white">
        <img src="/section6/stars.png" alt="start" />
        <div>{name}</div>
        <div>{profesion}</div>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className="flex flex-col gap-12 min-h-[500px] py-16">
      <div className="text-4xl w-fit m-auto">Transformaciones</div>
      <div className="grid grid-cols-3 gap-10 w-fit m-auto">
        {CardsInformation.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Section6;
