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
    <div className="mt-[10px] text-[14px]  md:text-[18px] leading-[20px]">
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
          fixed z-10 h-screen w-[350px] md:w-[1340.8px] overflow-auto
        bg-[#122E3F] text-[#FFFEFA] rounded-2xl md:max-h-[838px]
          -top-1/2 translate-y-[50%] 
        "
      > 
        {/* barra  para cerrar modal */}
        <div className="flex items-center h-[32px] md:h-[63px] md:w-full bg-[#09202E] ">
          <img
            src="/section5/close-modal.svg"
            alt="close modal"
            onClick={closeModal}
            className="pl-[16px] w-[36px] h-[36px] md:w-full md:h-auto cursor-pointer"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col px-4 md:px-[40px] md:py-[26px] gap-9  md:gap-[16px]">
          <div className="flex flex-col md:flex-row md:gap-[80px]">
            <div className="md:ml-[19px]">
              <div
                className="
                  text-[28px] ms:text-[40px] font-gopher leading-[21px] md:leading-[46px] md:w-max pt-[50px] pb-[28px] 
                  bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center
                "
              >
                {title}
              </div>
              <div className="relative flex justify-center items-center md:gap-[20px]">
                <div className="text-[35px] md:text-[40px] font-bold text-center after:content-[''] after:absolute 
                            after:bottom-[-10px] after:left-0 
                            after:h-[2px] md:after:h-[10px] after:w-full
                            after:bg-[#09202E]">
                  ${price}
                </div>
                <div className="absolute -top-[86px] md:relative md:text-[26px] w-max text-center">{priceText}</div>
              </div>
            </div>

            <div className="pt-4 pl-1 text-[14px] leading-[20px] font-nunito">{TextComponent(text2, preferentWords)}</div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row md:gap-[70px]">
            {/*  */}
            <div className="flex flex-col mt-8 border border-[#09202E] rounded-3xl md:w-[446px] md:p-[20px] order-1 md:order-2">
              <div className="mt-1 ml-5 mr-8 text-[22px] leading-[22px] font-bold text-[#346AFF] md:text-[32px] md:leading-[31px]">{subtitle}</div>
              <div className="mt-5 md:mt-[28px] md:text-[18px] md:leading-[20px] flex flex-col gap-2 md:gap-[9px]">
                {text1.map((text) => (
                  <div className="mx-5 text-xs font-semibold leading-[14px] text-justify">{text}</div>
                ))}
              </div>

              <div className="mt-3 ml-[18px] md:mt-[21px] text-[#2ABA64] text-[22px] tracking-[.000rem] md:text-[29px] font-bold font-gopher">
                {question}
              </div>
              <div className="mt-[10px] mx-5 md:mt-[18px] text-xs font-semibold leading-[14px] text-justify md:text-[18px] md:leading-[20px] md:mb-[10px]">
                {answer}
              </div>
            </div>
            
            {/* listas */}
            <div className="flex flex-col flex-1 md:mt-[12px]">
              <div className="flex flex-col md:flex-row md:gap-[80px]">
                {/*  */}
                <div className="flex flex-col w-full pl-[5px] ">
                  <div className="text-2xl leading-[35px] tracking-[.02rem] md:text-[33px]">{titleList1}</div>
                  <ul
                    className="
                    pt-3 px-4 pr-1
                    md:mt-[14px] md:text-[18px] lmd:eading-[20px]
                    flex flex-col gap-[10px] md:gap-[10px] md:pl-[18px] md:w-full list-disc
                  "
                  >
                    {list1.map((text) => (
                      <li className="text-sm leading-[17px] tracking-[.0001rem]">{text}</li>
                    ))}
                  </ul>
                </div>

                {/*  */}
                <div className="flex flex-col md:w-full">
                  <div className="pt-[10px] pl-1 text-2xl leading-[35px] font-bold md:text-[33px]">{titleList2}</div>
                  <ul
                    className="
                    pt-3 px-[21px] pr-1
                    md:mt-[14px] md:text-[18px] md:leading-[20px] list-disc
                    flex flex-col gap-[10px] md:gap-[10px] md:pl-[18px] md:w-full
                  "
                  >
                    {list2.map((text) => (
                      <li className="text-sm leading-[17px] tracking-[.0001rem]">{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/*  */}
          <div className="flex flex-col md:flex-row md:gap-[100px] ">
            {/*  */}
            <div className="mt-10 flex flex-col md:flex-row items-center md:mt-[15px] md:ml-[19px] md:gap-[28px] order-1">
              <img src="/modal/logo-modal.png" alt="logo" className="w-[206px] h-[64px]"/>

              <div className="mt-8 mb-20 flex gap-5 md:gap-[13px] md::gap-[18px] md:h-[13px] md::h-[20px]">
                <img src="/header/linkedin.png" alt="Linkedin" />
                <img src="/header/instagram.png" alt="Instagram" />
                <img src="/header/facebook.png" alt="facebook" />
                <img src="/header/tiktok.png" alt="Tiktok" />
              </div>
            </div>
            
            {/*  */}
            <div className="flex flex-col md:relative gap-6">
              <div className="md:absolute md:-top-[40px] mt-1 mx-10 md:w-max font-gopher text-sm leading-[14px] md:text-[18px] bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center">
                {text3}
              </div>
              <div className="mx-4 grid grid-cols-1 md:grid-cols-2 md:gap-[40px] md:mt-[30px] gap-4">
                <button className="h-[36px] md:h-[38px] md:w-[337px] border border-[#346AFF] rounded-md">
                  Debito / credito
                </button>
                <button className="h-[36px] md:h-[40px] md:w-[337px] border border-[#2ABA64] rounded-md">
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
