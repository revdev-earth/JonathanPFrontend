import { ModalDataInterface } from "../ModalData";

const TextComponent = (
  text: string,
  preferentWords: ModalDataInterface["preferentWords"]
) => {
  const resaltarPalabras = (text: string) => {
    const regex = new RegExp(
      `\\b(${Object.values(preferentWords).flat().join("|")})\\b`,
      "gi"
    );
    return text.split(regex).map((part, index) => {
      if (preferentWords.blue.includes(part.toLowerCase())) {
        return (
          <span key={index} className="text-[#346AFF]">
            {part}{" "}
          </span>
        );
      } else if (preferentWords.green.includes(part.toLowerCase())) {
        return (
          <span key={index} className="text-[#2ABA64]">
            {part}{" "}
          </span>
        );
      }
      return <span key={index}>{part} </span>;
    });
  };

  return (
    <div className="mt-[10px] text-[18px] leading-[20px]">
      {resaltarPalabras(text)}
    </div>
  );
};

interface ModalInterface extends ModalDataInterface {
  closeModal: () => void;
}

const Modal = ({
  title,
  price,
  priceText,
  subtitle,
  text1,
  question,
  answer,
  text2,
  preferentWords,
  titleList1,
  list1,
  titleList2,
  list2,
  text3,
  closeModal,
}: ModalInterface) => {
  return (
    <div
      className="
        fixed top-0 h-screen w-screen overflow-auto
        flex justify-center
      "
    >
      <div
        className="
          h-screen w-screen
          flex items-center justify-center
          bg-stone-500 text-[#FFFEFA]
        "
        onClick={closeModal}
      />
      <div
        className="
          fixed z-10 h-screen w-[1340.8px] overflow-auto
        bg-[#122E3F] text-[#FFFEFA] rounded-2xl max-h-[838px]
          -top-1/2 translate-y-[50%]
        "
      > 
        {/* barra  para cerrar modal */}
        <div className="flex items-center h-[63px] w-full bg-[#09202E]">
          <img
            src="/section5/close-modal.svg"
            alt="close modal"
            onClick={closeModal}
            className="pl-[16px]"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col px-[40px] py-[26px] gap-[16px]">
          <div className="flex gap-[80px]">
            <div className="ml-[19px]">
              <div
                className="
                  text-[40px] font-gopher leading-[46px] w-max
                  bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text
                "
              >
                {title}
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="text-[40px] font-bold">${price}</div>
                <div className="text-[26px] w-max">{priceText}</div>
              </div>
            </div>

            <div>{TextComponent(text2, preferentWords)}</div>
          </div>

          <div className="flex gap-[70px]">
            <div className="flex flex-col border border-[#09202E] rounded-3xl w-[446px] p-[20px]">
              <div className="text-[32px] leading-[31px]">{subtitle}</div>
              <div className="mt-[28px] text-[18px] leading-[20px] flex flex-col gap-[9px]">
                {text1.map((text) => (
                  <div>{text}</div>
                ))}
              </div>
              <div className="mt-[21px] text-[29px] font-gopher">
                {question}
              </div>
              <div className="mt-[18px] text-[18px] leading-[20px] mb-[10px]">
                {answer}
              </div>
            </div>

            <div className="flex flex-col flex-1 mt-[12px]">
              <div className="flex gap-[80px]">
                <div className="flex flex-col w-full">
                  <div className="text-[33px]">{titleList1}</div>
                  <ul
                    className="
                    mt-[14px] text-[18px] leading-[20px] 
                    flex flex-col gap-[10px] pl-[18px] w-full
                  "
                  >
                    {list1.map((text) => (
                      <li>{text}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col w-full">
                  <div className="text-[33px]">{titleList2}</div>
                  <ul
                    className="
                    mt-[14px] text-[18px] leading-[20px] 
                    flex flex-col gap-[10px] pl-[18px] w-full
                  "
                  >
                    {list2.map((text) => (
                      <li>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[100px]">
            <div className="flex items-center mt-[15px] ml-[19px] gap-[28px]">
              <img src="/modal/logo-modal.png" alt="logo" />

              <div className="flex gap-[13px] md:gap-[18px] h-[13px] md:h-[20px]">
                <img src="/header/linkedin.png" alt="Linkedin" />
                <img src="/header/instagram.png" alt="Instagram" />
                <img src="/header/facebook.png" alt="facebook" />
                <img src="/header/tiktok.png" alt="Tiktok" />
              </div>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute -top-[40px] w-max font-gopher font-bold text-[18px]">
                {text3}
              </div>
              <div className="grid grid-cols-2 gap-[40px] mt-[30px]">
                <button className="h-[38px] w-[337px] border border-[#346AFF] rounded-md">
                  Debito / credito
                </button>
                <button className="h-[40px] w-[337px] border border-[#2ABA64] rounded-md">
                  Paypal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
