import { ModalDataInterface } from "../ModalData";

const TextComponent = (
  text: string,
  preferentWords: ModalDataInterface["preferentWords"],
) => {
  const resaltarPalabras = (text: string) => {
    const regex = new RegExp(
      `\\b(${Object.values(preferentWords).flat().join("|")})\\b`,
      "gi",
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
  favorite,
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
        fixed top-0 h-screen w-screen overflow-hidden
        flex justify-center 
      "
    >
      <div
        className="
          h-screen w-screen
          flex items-center justify-center
          bg-stone-500 opacity-70 text-[#FFFEFA]  
        "
        onClick={closeModal}
      />

      <div
        className=" absolute z-10 overflow-hidden
        bg-[#122E3F] text-[#FFFEFA] 
          w-[350px] md:w-[1340.8px] 
          rounded-2xl md:rounded-[20px]
          max-h-[98vh] md:max-h-[94vh] 
        "
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div
          className={`
            ${
              favorite
                ? "bg-gradient-to-r from-[#2ABA64] to-[#3369FF]"
                : "bg-[#09202E]"
            }
            flex items-center h-[32px] md:h-[63px] md:w-full
          `}
        >
          <img
            src={
              favorite
                ? "/section5/close-modal-black.svg"
                : "/section5/close-modal.svg"
            }
            alt="close modal"
            onClick={closeModal}
            className="pl-[16px] w-[36px] h-[36px] md:w-[58px] md:h-[58px] cursor-pointer"
          />
          {favorite && (
            <div className="absolute left-1/2 -translate-x-[42%] md:-translate-x-[60%] font-bold text-[#122E3F]">
              Recomendado
            </div>
          )}
        </div>

        <div
          className={`
            p-4 md:px-[40px] md:py-[26px] h-[94vh] 
            ${window.innerHeight < 863 ? "md:max-h-[78vh]" : "md:max-h-[742px]"}
          `}
        >
          <div className="flex flex-col gap-9  md:gap-[0px] overflow-auto h-full">
            {/* Intro */}
            <div className="flex flex-col md:flex-row md:gap-[93px]">
              <div className="md:ml-[19px]">
                <div
                  className="
                  md:w-max pt-[50px] pb-[28px] md:p-0 text-[28px] md:text-[40px] font-gopher leading-[21px] md:leading-[46px]  
                  bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center
                "
                >
                  {title}
                </div>
                <div className="relative flex justify-center items-center md:gap-[15px]">
                  <div
                    className="  text-[35px] md:text-[40px] md:tracking-[.1rem] font-bold text-center after:content-[''] after:absolute 
                            after:bottom-[-10px] after:left-0 md:after:hidden
                            after:h-[2px] md:after:h-[2px] after:w-full
                            after:bg-[#09202E]"
                  >
                    ${price}
                  </div>
                  <div className="absolute  -top-[86px] md:top-0 md:relative md:text-[26px] w-max text-center md:tracking-normal">
                    {priceText}
                  </div>
                </div>
              </div>

              <div className="pt-4 md:pt-0 pl-1 text-[14px] md:text-[18px] leading-[20px] md:tracking-[.04rem]">
                {TextComponent(text2, preferentWords)}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col md:flex-row md:gap-[70px]">
              {/*  */}
              <div className="flex flex-col mt-8 border border-[#09202E] rounded-3xl md:w-[446px] md:p-[0px] order-1 ">
                <div className="mt-1 ml-5 mr-8 text-[22px] leading-[22px] font-bold text-[#346AFF] md:text-[32px] md:mr-10 md:tracking-normal md:leading-[32px]">
                  {subtitle}
                </div>
                <div className="mt-5 md:mt-[28px] md:text-[18px] md:leading-[20px] flex flex-col gap-2 md:gap-[10px]">
                  {text1.map((text) => (
                    <div className="mx-5 text-xs md:text-lg font-semibold leading-[14px] md:leading-[17px] text-justify">
                      {text}
                    </div>
                  ))}
                </div>

                <div className="mt-3  ml-[18px] md:mt-[27px] text-[#2ABA64] text-[22px] tracking-[.000rem] md:text-[29px] font-bold font-gopher">
                  {question}
                </div>
                <div className="mt-[10px] mx-5 md:mt-[18px] text-xs font-semibold leading-[14px] text-justify md:text-[18px] md:leading-[20px] md:mb-[10px]">
                  {answer}
                </div>
              </div>

              {/* listas */}
              <div className="flex flex-col flex-1 md:mt-[20px] md:order-1">
                <div className="flex flex-col md:flex-row md:gap-[80px]">
                  {/*  */}
                  <div className="flex flex-col w-full pl-[5px] md:pl-0 md:pt-[14px]">
                    <div className="text-2xl leading-[35px] tracking-[.02rem] md:text-[33px]">
                      {titleList1}
                    </div>
                    <ul
                      className="
                    pt-3 px-4 pr-1 md:px-0 md:pt-2
                    md:mt-[14px] md:text-[18px] lmd:eading-[20px]
                    flex flex-col gap-[10px] md:gap-[10px] md:pl-[18px] md:w-full list-disc
                  "
                    >
                      {list1.map((text) => (
                        <li className="text-sm leading-[17px] tracking-[.0001rem] md:text-lg md:leading-[20px] md:tracking-normal">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*  */}
                  <div className="flex flex-col md:w-full md:mt-1">
                    <div className="pt-[10px] pl-1 md:pl-0 text-2xl leading-[35px] font-bold md:text-[33px]">
                      {titleList2}
                    </div>
                    <ul
                      className="
                    pt-3 px-[21px] pr-1 md:pt-2 md:pr-3
                    md:mt-[14px] md:text-[18px] md:leading-[20px] list-disc
                    flex flex-col gap-[10px] md:gap-[10px] md:pl-[18px] md:w-full
                  "
                    >
                      {list2.map((text) => (
                        <li className="text-sm leading-[17px] tracking-[.0001rem] md:text-lg md:leading-[20px] md:tracking-normal">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex flex-col items-center md:flex-row md:gap-[100px] md:mt-9 md:ml-0">
              {/*  */}
              <div className="mt-10 flex flex-col  md:flex-row items-center md:mt-[15px] md:ml-[19px] md:gap-[28px] order-1 ">
                <img
                  src="/modal/logo-modal.png"
                  alt="logo"
                  className="w-[206px] h-[64px] md:w-[251px] md:h-[78px]"
                />

                <div className="my-8 md:my-0 md:m-0 flex items-center  gap-5  md:gap-[18px]  h-full">
                  <img
                    src="/header/linkedin.png"
                    alt="Linkedin"
                    className="md:h-[20px]"
                  />
                  <img
                    src="/header/instagram.png"
                    alt="Instagram"
                    className="md:h-[20px]"
                  />
                  <img
                    src="/header/facebook.png"
                    alt="facebook"
                    className="md:h-[20px]"
                  />
                  <img
                    src="/header/tiktok.png"
                    alt="Tiktok"
                    className="md:h-[20px]"
                  />
                </div>
              </div>

              {/*  */}
              <div className="flex flex-col md:relative gap-6 md:order-1">
                <div className="md:absolute md:-top-[40px] mt-1 md:-mt-[12px] mx-10 md:mx-0 md:w-max font-gopher text-sm leading-[14px] md:text-[18px] bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center">
                  {text3}
                </div>
                <div className="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-2 md:gap-[40px] md:mt-[10px] gap-4">
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
    </div>
  );
};

export default Modal;
