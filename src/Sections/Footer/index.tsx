const Footer = () => {
  return (
    <div className="font-nunito">
      <div
        className="h-[6px] md:h-[11px] w-full 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      />
      <div
        className="
        text-white bg-[#092435] 
          flex flex-col md:flex-row 
          md:h-[339px] md:px-[100px]
          pb-[27px] md:pb-0
        "
      >
        <div
          className="
            flex justify-center items-center
            mt-[35px] md:mt-0
          "
        >
          <img
            src="/footer/logo-footer.png"
            alt="logo footer"
            className="
              w-[250px] 
              md:w-[487px] md:h-[152px]
            "
          />
        </div>

        <div className="flex">
          <div
            className="
            flex flex-col 
            gap-3 md:gap-5 
            mt-[21px] md:mt-[58px] 
            ml-[19px] md:ml-[141px]
          "
          >
            <div
              className="
                uppercase font-bold 
                text-[13px] md:text-[22px]
              "
            >
              Secciones
            </div>
            <ul
              className="
                flex flex-col 
                gap-[9px] md:gap-[16px]
                text-[12px] md:text-[21px]
              "
            >
              <li
                className="
                flex 
                gap-[8px] md:gap-[21px]
              "
              >
                <img
                  src="/footer/arrow-footer.svg"
                  alt="arrow footer"
                  className="
                    scale-50 md:scale-100
                  "
                />
                Inicio
              </li>
              <li
                className="
                flex 
                gap-[8px] md:gap-[21px]
              "
              >
                <img
                  src="/footer/arrow-footer.svg"
                  alt="arrow footer"
                  className="
                  scale-50 md:scale-100
                "
                />
                Método
              </li>
              <li
                className="
                flex 
                gap-[8px] md:gap-[21px]
              "
              >
                <img
                  src="/footer/arrow-footer.svg"
                  alt="arrow footer"
                  className="
                  scale-50 md:scale-100
                "
                />
                Planes
              </li>
              <li
                className="
                flex 
                gap-[8px] md:gap-[21px]
              "
              >
                <img
                  src="/footer/arrow-footer.svg"
                  alt="arrow footer"
                  className="
                  scale-50 md:scale-100
                "
                />
                Interactuemos
              </li>
            </ul>
          </div>

          <div
            className="
              flex flex-col 
              ml-[88px] md:ml-[155px] 
              mt-[21px] md:mt-[106px] 
              gap-[8px] md:gap-[16px]
            "
          >
            <div
              className="
                uppercase font-bold 
                text-[13px] md:text-[22px]
              "
            >
              Contacto
            </div>
            <ul
              className="
                flex flex-col 
                gap-[9px] md:gap-[15px]
                text-[12px] md:text-[21px]
              "
            >
              <li className="flex md:gap-[13px]">
                <img
                  src="/footer/phone.svg"
                  alt="phone"
                  className="
                    scale-50 md:scale-100
                  "
                />
                +34657241310
              </li>
              <li className="flex md:gap-[13px]">
                <img
                  src="/footer/mail.svg"
                  alt="mail"
                  className="
                    scale-50 md:scale-100
                  "
                />
                tucoach@conciencia11.com
              </li>
              <li className="flex gap-1 md:gap-6 md:mt-2">
                <img
                  src="/footer/linkedin.svg"
                  alt="phone"
                  className="
                    scale-50 md:scale-100
                  "
                />
                <img
                  src="/footer/instagram.svg"
                  alt="instagram"
                  className="
                    scale-50 md:scale-100
                  "
                />
                <img
                  src="/footer/facebook.svg"
                  alt="facebook"
                  className="
                    scale-50 md:scale-100
                  "
                />
                <img
                  src="/footer/tiktok.svg"
                  alt="tiktok"
                  className="
                    scale-50 md:scale-100
                  "
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="
          flex justify-center items-center 
          font-semibold 
          text-[15px] md:text-[19px] 
          h-[48px] md:h-[80px] 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      >
        ©2023 Conecta tu propósito. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
