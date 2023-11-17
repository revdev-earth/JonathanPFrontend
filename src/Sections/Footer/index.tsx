const Footer = () => {
  return (
    <div className="">
      <div
        className="h-[6px] lg:h-[11px] w-full 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      />
      <div className="bg-[#092435]">
        <div
          className=" text-white w-fit m-auto
            flex flex-col lg:flex-row 
            lg:h-[339px] lg:px-[100px]
            pb-[27px] lg:pb-0
          "
        >
          <div
            className="
              flex justify-center items-center
              mt-[35px] lg:mt-0
            "
          >
            <a href="/">
              <img
                src="/footer/logo-footer.png"
                alt="logo footer"
                className="
                  w-[250px] 
                  lg:w-[487px] lg:h-[152px]
                "
              />
            </a>
          </div>

          <div className="flex">
            <div
              className="
              flex flex-col 
              gap-3 lg:gap-5 
              mt-[21px] lg:mt-[58px] 
              ml-[19px] lg:ml-[141px]
            "
            >
              <div
                className="
                  uppercase font-bold 
                  text-[13px] lg:text-[22px]
                "
              >
                Secciones
              </div>
              <ul
                className="
                  flex flex-col 
                  gap-[9px] lg:gap-[16px]
                  text-[12px] lg:text-[21px]
                "
              >
                <li>
                  <a
                    href="#inicio"
                    className="
                      flex 
                      gap-[8px] lg:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                      scale-50 lg:scale-100
                    "
                    />
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#metodo"
                    className="
                      flex 
                      gap-[8px] lg:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                    scale-50 lg:scale-100
                  "
                    />
                    Método
                  </a>
                </li>
                <li>
                  <a
                    href="#planes"
                    className="
                      flex 
                      gap-[8px] lg:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                    scale-50 lg:scale-100
                  "
                    />
                    Planes
                  </a>
                </li>
                <li>
                  <a
                    href="#interactuemos"
                    className="
                      flex 
                      gap-[8px] lg:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                    scale-50 lg:scale-100
                  "
                    />
                    Interactuemos
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="
                flex flex-col 
                ml-[88px] lg:ml-[155px] 
                mt-[21px] lg:mt-[106px] 
                gap-[8px] lg:gap-[16px]
              "
            >
              <div
                className="
                  uppercase font-bold 
                  text-[13px] lg:text-[22px]
                "
              >
                Contacto
              </div>
              <ul
                className="
                  flex flex-col 
                  gap-[9px] lg:gap-[15px]
                  text-[12px] lg:text-[21px]
                "
              >
                <li>
                  <a href="tel:+34657241310" className="flex lg:gap-[13px]">
                    <img
                      src="/footer/phone.svg"
                      alt="phone"
                      className="
                      scale-50 lg:scale-100
                    "
                    />
                    +34657241310
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tucoach@conciencia11.com"
                    className="flex lg:gap-[13px]"
                  >
                    <img
                      src="/footer/mail.svg"
                      alt="mail"
                      className="
                      scale-50 lg:scale-100
                    "
                    />
                    tucoach@conciencia11.com
                  </a>
                </li>
                <li className="flex gap-1 lg:gap-6 lg:mt-2">
                  <a
                    href="https://www.linkedin.com/in/jonathan-perez-medina-17614a231/"
                    target="_blank"
                  >
                    <img
                      src="/header/linkedin.png"
                      alt="Linkedin"
                      className="
                        scale-50 lg:scale-100
                      "
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/jonaperezme/"
                    target="_blank"
                  >
                    <img
                      src="/header/instagram.png"
                      alt="Instagram"
                      className="
                        scale-50 lg:scale-100
                      "
                    />
                  </a>
                  <a href="https://www.facebook.com/JonaPerezM" target="_blank">
                    <img
                      src="/header/facebook.png"
                      alt="facebook"
                      className="
                        scale-50 lg:scale-100
                      "
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@jonaperezme?lang=es"
                    target="_blank"
                  >
                    <img
                      src="/header/tiktok.png"
                      alt="Tiktok"
                      className="
                        scale-50 lg:scale-100
                      "
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          flex justify-center items-center 
          font-semibold 
          text-[15px] lg:text-[19px] 
          h-[48px] lg:h-[80px] 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      >
        ©2023 Jonathan Perez. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
