import { useState } from "react";
import Modal from "./components/Modal";
import { ModalData } from "./components/ModalData";

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
    recommended: false,
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
    recommended: true,
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
    recommended: false,
  },
];

const mobileCards = [CardsInfo[1], CardsInfo[0], CardsInfo[2]];
const mobileMobileData = [ModalData[1], ModalData[0], ModalData[2]];
const xs = window.innerWidth <= 390;
const Cards = xs ? mobileCards : CardsInfo;
const Data = xs ? mobileMobileData : ModalData;

const Card = ({
  text1,
  text2,
  price,
  list,
  recommended,
  openModal,
}: {
  text1: string;
  text2: string;
  price: number;
  list: string[];
  recommended: boolean;
  openModal: () => void;
}) => {
  return (
    <div
      className={`
        bg-[#122E3F] rounded-2xl
        lg:min-h-[600px] lg:w-[395px]
        overflow-hidden shadow-lg
      `}
    >
      {recommended ? (
        <div
          className="
            flex justify-center items-center h-[36px] 
            lg:text-[18px] font-bold
            bg-[#2ABA64] text-[#122E3F]
          "
        >
          Recomendado
        </div>
      ) : (
        <div className="h-[36px] bg-[#09202E]" />
      )}

      <div
        className="
          flex flex-col
          items-center
          py-[12px] lg:py-[18px]
        "
      >
        <div className="text-[15px] lg:text-[17px]">{text1}</div>
        <div
          className="
            mt-[4px] text-[28px] lg:text-[32px] font-gopher font-bold
            bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text
          "
        >
          {text2}
        </div>
        <div className="mt-[14px] text-[38px] font-bold">${price}</div>

        <div className="px-[32px] mt-[8px] lg:mt-[16px]">
          <div className="h-[1px] bg-[#09202E] w-full" />
          <ul
            className="
              flex flex-col 
              gap-[9px] lg:gap-[15px]
              px-[20px] py-[19px]
              lg:pl-[28px] lg:py-[22px] 
              text-[14px] lg:text-[16px] list-disc
              leading-[18px]
            "
          >
            {list.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[13px] w-full px-[32px] mt-[10px] mb-[28px] font-bold">
          <button
            onClick={openModal}
            className="bg-[#09202E] w-full h-[40px] rounded-md shadow-lg"
          >
            Ver completo
          </button>
          <div className="grid grid-cols-2 gap-[13px]">
            <button className="h-[38px] border border-[#346AFF] rounded-md">
              Debito / credito
            </button>
            <button className="h-[40px] border border-[#2ABA64] rounded-md">
              Paypal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  const [showModal, setShowModal] = useState(false);
  const [numberModal, setNumberModal] = useState<number>();

  const openModal = (indexModal: number) => {
    setShowModal(true);
    setNumberModal(indexModal);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setNumberModal(undefined);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className="
        flex flex-col 
        py-[36px] lg:py-[98px] lg:pb-[131px]
        gap-[14px]
        bg-gradient-to-t from-[#2ABA64] to-[#3369FF]
      "
    >
      <div
        id="planes"
        className="
          font-gopher
          lg:w-3/4 m-auto px-10
          text-[24px] lg:text-6xl 
          leading-[26px]
          text-center font-bold
        "
      >
        Esta es la transformación que necesitas, si te sientes así:
      </div>

      <div
        className="
          flex flex-col lg:grid lg:grid-cols-3 
          items-center lg:items-end 
          gap-[22px] lg:gap-[26px] m-auto
          px-[20px] lg:mt-[42px]
          text-[#FFFAEB] w-fit 
        "
      >
        {Cards.map((data, index) => (
          <Card
            key={index}
            {...{
              ...data,
              openModal: () => openModal(index),
            }}
          />
        ))}
      </div>

      {showModal && typeof numberModal !== "undefined" && (
        <Modal {...{ ...Data[numberModal], closeModal }} />
      )}
    </div>
  );
};

export default Section5;
