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
    <div className="mt-[10px] text-[14px]  xl:text-[18px] leading-[20px]">
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
          w-[350px] xl:w-[1340.8px] 
          rounded-2xl xl:rounded-[20px]
          max-h-[98vh] xl:max-h-[94vh] 
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
            flex items-center h-[32px] xl:h-[63px] xl:w-full
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
            className="pl-[16px] w-[36px] h-[36px] xl:w-[58px] xl:h-[58px] cursor-pointer"
          />
          {favorite && (
            <div className="absolute left-1/2 -translate-x-[42%] xl:-translate-x-[60%] font-bold text-[#122E3F]">
              Recomendado
            </div>
          )}
        </div>

        <div
          className={`
            p-4 xl:px-[40px] xl:py-[26px] h-[94vh] 
            ${window.innerHeight < 863 ? "xl:max-h-[78vh]" : "xl:max-h-[742px]"}
          `}
        >
          <div className="flex flex-col gap-9  xl:gap-[0px] overflow-auto h-full">
            {/* Intro */}
            <div className="flex flex-col xl:flex-row xl:gap-[93px]">
              <div className="xl:ml-[19px]">
                <div
                  className="
                  xl:w-max pt-[50px] pb-[28px] xl:p-0 text-[28px] xl:text-[40px] font-gopher leading-[21px] xl:leading-[46px]  
                  bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center
                "
                >
                  {title}
                </div>
                <div className="relative flex justify-center items-center xl:gap-[15px]">
                  <div
                    className="  text-[35px] xl:text-[40px] xl:tracking-[.1rem] font-bold text-center after:content-[''] after:absolute 
                            after:bottom-[-10px] after:left-0 xl:after:hidden
                            after:h-[2px] xl:after:h-[2px] after:w-full
                            after:bg-[#09202E]"
                  >
                    ${price}
                  </div>
                  <div className="absolute  -top-[86px] xl:top-0 xl:relative xl:text-[26px] w-max text-center xl:tracking-normal">
                    {priceText}
                  </div>
                </div>
              </div>

              <div className="pt-4 xl:pt-0 pl-1 text-[14px] xl:text-[18px] leading-[20px] xl:tracking-[.04rem]">
                {TextComponent(text2, preferentWords)}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col xl:flex-row xl:gap-[70px]">
              {/*  */}
              <div className="flex flex-col mt-8 border border-[#09202E] rounded-3xl xl:w-[446px] xl:p-[0px] order-1 ">
                <div className="mt-1 ml-5 mr-8 text-[22px] leading-[22px] font-bold text-[#346AFF] xl:text-[32px] xl:mr-10 xl:tracking-normal xl:leading-[32px]">
                  {subtitle}
                </div>
                <div className="mt-5 xl:mt-[28px] xl:text-[18px] xl:leading-[20px] flex flex-col gap-2 xl:gap-[10px]">
                  {text1.map((text) => (
                    <div className="mx-5 text-xs xl:text-lg font-semibold leading-[14px] xl:leading-[17px] text-justify">
                      {text}
                    </div>
                  ))}
                </div>

                <div className="mt-3  ml-[18px] xl:mt-[27px] text-[#2ABA64] text-[22px] tracking-[.000rem] xl:text-[29px] font-bold font-gopher">
                  {question}
                </div>
                <div className="mt-[10px] mx-5 xl:mt-[18px] text-xs font-semibold leading-[14px] text-justify xl:text-[18px] xl:leading-[20px] xl:mb-[10px]">
                  {answer}
                </div>
              </div>

              {/* listas */}
              <div className="flex flex-col flex-1 xl:mt-[20px] xl:order-1">
                <div className="flex flex-col xl:flex-row xl:gap-[80px]">
                  {/*  */}
                  <div className="flex flex-col w-full pl-[5px] xl:pl-0 xl:pt-[14px]">
                    <div className="text-2xl leading-[35px] tracking-[.02rem] xl:text-[33px]">
                      {titleList1}
                    </div>
                    <ul
                      className="
                    pt-3 px-4 pr-1 xl:px-0 xl:pt-2
                    xl:mt-[14px] xl:text-[18px] lxl:eading-[20px]
                    flex flex-col gap-[10px] xl:gap-[10px] xl:pl-[18px] xl:w-full list-disc
                  "
                    >
                      {list1.map((text) => (
                        <li className="text-sm leading-[17px] tracking-[.0001rem] xl:text-lg xl:leading-[20px] xl:tracking-normal">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*  */}
                  <div className="flex flex-col xl:w-full xl:mt-1">
                    <div className="pt-[10px] pl-1 xl:pl-0 text-2xl leading-[35px] font-bold xl:text-[33px]">
                      {titleList2}
                    </div>
                    <ul
                      className="
                    pt-3 px-[21px] pr-1 xl:pt-2 xl:pr-3
                    xl:mt-[14px] xl:text-[18px] xl:leading-[20px] list-disc
                    flex flex-col gap-[10px] xl:gap-[10px] xl:pl-[18px] xl:w-full
                  "
                    >
                      {list2.map((text) => (
                        <li className="text-sm leading-[17px] tracking-[.0001rem] xl:text-lg xl:leading-[20px] xl:tracking-normal">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex flex-col items-center xl:flex-row xl:gap-[100px] xl:mt-9 xl:ml-0">
              {/*  */}
              <div className="mt-10 flex flex-col  xl:flex-row items-center xl:mt-[15px] xl:ml-[19px] xl:gap-[28px] order-1 ">
                <img
                  src="/modal/logo-modal.png"
                  alt="logo"
                  className="w-[206px] h-[64px] xl:w-[251px] xl:h-[78px]"
                />

                <div className="my-8 xl:my-0 xl:m-0 flex items-center  gap-5  xl:gap-[18px]  h-full">
                  <img
                    src="/header/linkedin.png"
                    alt="Linkedin"
                    className="xl:h-[20px]"
                  />
                  <img
                    src="/header/instagram.png"
                    alt="Instagram"
                    className="xl:h-[20px]"
                  />
                  <img
                    src="/header/facebook.png"
                    alt="facebook"
                    className="xl:h-[20px]"
                  />
                  <img
                    src="/header/tiktok.png"
                    alt="Tiktok"
                    className="xl:h-[20px]"
                  />
                </div>
              </div>

              {/*  */}
              <div className="flex flex-col xl:relative gap-6 xl:order-1">
                <div className="xl:absolute xl:-top-[40px] mt-1 xl:-mt-[12px] mx-10 xl:mx-0 xl:w-max font-gopher text-sm leading-[14px] xl:text-[18px] bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text font-bold text-center">
                  {text3}
                </div>
                <div className="mx-4 xl:mx-0 grid grid-cols-1 xl:grid-cols-2 xl:gap-[40px] xl:mt-[10px] gap-4">
                  <button className="h-[36px] xl:h-[38px] xl:w-[337px] border border-[#346AFF] rounded-md">
                    Debito / credito
                  </button>
                  <button className="h-[36px] xl:h-[40px] xl:w-[337px] border border-[#2ABA64] rounded-md">
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
