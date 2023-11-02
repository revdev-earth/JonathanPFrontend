const CardsInfo = [
  {
    text1: "Programa de 6 Sesiones",
    text2: "Iluminación Propia",
    price: 597,
    list: [
      "No conoces tus debilidades y fortalezas.",
      "Sientes que te falta amarte y aceptarte tal y como eres.",
      "Sientes que tu relación contigo mismo es autosaboteo y autocritica.",
      "No sabes que es lo que te bloquea o limita en las relaciones.",
      "Tienes pensamientos que te controlan",
      "Las ideas que tienes en tu mente no son saludables para ti.",
    ],
  },
  {
    text1: "Programa de 10 Sesiones",
    text2: "Fotosíntesis Humana",
    price: 897,
    list: [
      "Te sientes con baja Autoestima y Amor Propio.",
      "Quieres cambiar tu vida, pero sientes miedo al fracaso y al cambio.",
      "Sientes que no encajas en ningún lugar y es mejor estar solo.",
      "Quieres tener la vida de tus sueños, pero no sabes por dónde empezar.",
      "Llevas tiempo haciendo mil cosas, pero sigues obteniendo los mismos resultados.",
      "Te sientes con muchos bloqueos y limitaciones en tu vida.",
      "Te encuentras en una zona de confort y no sabes cómo salir de ella.",
    ],
  },
  {
    text1: "Programa de 6 Sesiones",
    text2: "Recursos Ilimitados",
    price: 597,
    list: [
      "Sientes que gastas más de lo que ganas.",
      "Sientes bloqueos con respecto al dinero y no sabes cómo superarlos.",
      "Sientes que tu relación con el dinero no es buena.",
      "No tienes metas, ni objetivos financieros.",
      "No sabes cuales son los mecanismos y las herramientas para una vida más prospera y abundante.",
    ],
  },
];

const Card = ({
  text1,
  text2,
  price,
  list,
}: {
  text1: string;
  text2: string;
  price: number;
  list: string[];
}) => {
  return (
    <div className="min-h-[600px] w-[400px] bg-[#122E3F] rounded-2xl">
      <div>{text1}</div>
      <div>{text2}</div>
      <div>{price}</div>
      <div>
        List
        <ul>
          {list.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div>
        <div>Button 1</div>
        <div>
          <div>Button 2</div>
          <div>Button 3</div>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className="flex flex-col min-h-[800px] py-32 gap-20">
      <div className="w-max m-auto text-6xl text-center font-bold">
        Esta es la transformación que
        <br />
        necesitas, si te sientes así:
      </div>
      <div className="grid grid-cols-3 items-center w-fit gap-16 m-auto">
        {CardsInfo.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Section5;
