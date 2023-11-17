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
    <div className="mt-[10px] text-[14px]  lg:text-[18px] leading-[20px]">
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
          w-[350px] lg:w-[1340.8px] 
          rounded-2xl lg:rounded-[20px]
          max-h-[98vh] lg:max-h-[94vh] 
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
            flex items-center h-[32px] lg:h-[63px] lg:w-full
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
            className="pl-[16px] w-[36px] h-[36px] lg:w-[58px] lg:h-[58px] cursor-pointer"
          />
          {favorite && (
            <div className="absolute left-1/2 -translate-x-[42%] lg:-translate-x-[60%] font-bold text-[#122E3F]">
              Recomendado
            </div>
          )}
        </div>

        <div
          className={`
            p-4 lg:px-[40px] lg:py-[26px] h-[94vh] 
            ${window.innerHeight < 863 ? "lg:max-h-[78vh]" : "lg:max-h-[742px]"}
          `}
        >
          <div className="flex flex-col gap-9  lg:gap-[0px] overflow-auto h-full">
            {/* Intro */}
            <div className="flex flex-col lg:flex-row lg:gap-[93px]">
              <div className="lg:ml-[19px]">
                <div
                  className="
                  lg:w-max pt-[50px] pb-[28px] lg:p-0 text-[28px] lg:text-[40px] font-gopher leading-[21px] lg:leading-[46px]  
                  bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center
                "
                >
                  {title}
                </div>
                <div className="relative flex justify-center items-center lg:gap-[15px]">
                  <div
                    className="  text-[35px] lg:text-[40px] lg:tracking-[.1rem] font-bold text-center after:content-[''] after:absolute 
                            after:bottom-[-10px] after:left-0 lg:after:hidden
                            after:h-[2px] lg:after:h-[2px] after:w-full
                            after:bg-[#09202E]"
                  >
                    ${price}
                  </div>
                  <div className="absolute  -top-[86px] lg:top-0 lg:relative lg:text-[26px] w-max text-center lg:tracking-normal">
                    {priceText}
                  </div>
                </div>
              </div>

              <div className="pt-4 lg:pt-0 pl-1 text-[14px] lg:text-[18px] leading-[20px] lg:tracking-[.04rem]">
                {TextComponent(text2, preferentWords)}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col lg:flex-row lg:gap-[70px]">
              {/*  */}
              <div className="flex flex-col mt-8 border border-[#09202E] rounded-3xl lg:w-[446px] lg:p-[0px] order-1 ">
                <div className="mt-1 ml-5 mr-8 text-[22px] leading-[22px] font-bold text-[#346AFF] lg:text-[32px] lg:mr-10 lg:tracking-normal lg:leading-[32px]">
                  {subtitle}
                </div>
                <div className="mt-5 lg:mt-[28px] lg:text-[18px] lg:leading-[20px] flex flex-col gap-2 lg:gap-[10px]">
                  {text1.map((text) => (
                    <div className="mx-5 text-xs lg:text-lg font-semibold leading-[14px] lg:leading-[17px] text-justify">
                      {text}
                    </div>
                  ))}
                </div>

                <div className="mt-3  ml-[18px] lg:mt-[27px] text-[#2ABA64] text-[22px] tracking-[.000rem] lg:text-[29px] font-bold font-gopher">
                  {question}
                </div>
                <div className="mt-[10px] mx-5 lg:mt-[18px] text-xs font-semibold leading-[14px] text-justify lg:text-[18px] lg:leading-[20px] lg:mb-[10px]">
                  {answer}
                </div>
              </div>

              {/* listas */}
              <div className="flex flex-col flex-1 lg:mt-[20px] lg:order-1">
                <div className="flex flex-col lg:flex-row lg:gap-[80px]">
                  {/*  */}
                  <div className="flex flex-col w-full pl-[5px] lg:pl-0 lg:pt-[14px]">
                    <div className="text-2xl leading-[35px] tracking-[.02rem] lg:text-[33px]">
                      {titleList1}
                    </div>
                    <ul
                      className="
                    pt-3 px-4 pr-1 lg:px-0 lg:pt-2
                    lg:mt-[14px] lg:text-[18px] llg:eading-[20px]
                    flex flex-col gap-[10px] lg:gap-[10px] lg:pl-[18px] lg:w-full list-disc
                  "
                    >
                      {list1.map((text) => (
                        <li className="text-sm leading-[17px] tracking-[.0001rem] lg:text-lg lg:leading-[20px] lg:tracking-normal">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*  */}
                  <div className="flex flex-col lg:w-full lg:mt-1">
                    <div className="pt-[10px] pl-1 lg:pl-0 text-2xl leading-[35px] font-bold lg:text-[33px]">
                      {titleList2}
                    </div>
                    <ul
                      className="
                    pt-3 px-[21px] pr-1 lg:pt-2 lg:pr-3
                    lg:mt-[14px] lg:text-[18px] lg:leading-[20px] list-disc
                    flex flex-col gap-[10px] lg:gap-[10px] lg:pl-[18px] lg:w-full
                  "
                    >
                      {list2.map((text) => (
                        <li className="text-sm leading-[17px] tracking-[.0001rem] lg:text-lg lg:leading-[20px] lg:tracking-normal">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex flex-col items-center lg:flex-row lg:gap-[100px] lg:mt-9 lg:ml-0">
              {/*  */}
              <div className="mt-10 flex flex-col  lg:flex-row items-center lg:mt-[15px] lg:ml-[19px] lg:gap-[28px] order-1 ">
                <img
                  src="/modal/logo-modal.png"
                  alt="logo"
                  className="w-[206px] h-[64px] lg:w-[251px] lg:h-[78px]"
                />

                <div className="my-8 lg:my-0 lg:m-0 flex items-center  gap-5  lg:gap-[18px]  h-full">
                  <img
                    src="/header/linkedin.png"
                    alt="Linkedin"
                    className="lg:h-[20px]"
                  />
                  <img
                    src="/header/instagram.png"
                    alt="Instagram"
                    className="lg:h-[20px]"
                  />
                  <img
                    src="/header/facebook.png"
                    alt="facebook"
                    className="lg:h-[20px]"
                  />
                  <img
                    src="/header/tiktok.png"
                    alt="Tiktok"
                    className="lg:h-[20px]"
                  />
                </div>
              </div>

              {/*  */}
              <div className="flex flex-col lg:relative gap-6 lg:order-1">
                <div className="lg:absolute lg:-top-[40px] mt-1 lg:-mt-[12px] mx-10 lg:mx-0 lg:w-max font-gopher text-sm leading-[14px] lg:text-[18px] bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center">
                  {text3}
                </div>
                <div className="mx-4 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-[40px] lg:mt-[10px] gap-4">
                  <button className="h-[36px] lg:h-[38px] lg:w-[337px] border border-[#346AFF] rounded-md">
                    Debito / credito
                  </button>
                  <button className="h-[36px] lg:h-[40px] lg:w-[337px] border border-[#2ABA64] rounded-md">
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
