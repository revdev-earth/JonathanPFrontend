const Footer = () => {
  return (
    <div className="">
      <div
        className="h-[6px] xl:h-[11px] w-full 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      />
      <div className="bg-[#092435]">
        <div
          className=" text-white w-fit m-auto
            flex flex-col md:flex-row md:gap-[40px] lg:gap-0
            xl:h-[339px] md:px-0 2xl:px-[100px]
            pb-[27px] xl:pb-0
          "
        >
          <div
            className="
              flex justify-center items-center self-center
              mt-[35px] xl:mt-0
              w-[250px] h-[152px]
              xl:w-[487px] xl:h-[152px]
            "
          >
            <a href="/">
              <img src="/footer/logo-footer.png" alt="logo footer" />
            </a>
          </div>

          <div className="flex">
            <div
              className="
              flex flex-col 
              gap-3 xl:gap-5 
              mt-[21px] xl:mt-[58px] 
              ml-[19px] xl:ml-[141px]
            "
            >
              <div
                className="
                  uppercase font-bold 
                  text-[13px] xl:text-[22px]
                "
              >
                Secciones
              </div>
              <ul
                className="
                  flex flex-col 
                  gap-[9px] xl:gap-[16px]
                  text-[12px] xl:text-[21px]
                "
              >
                <li>
                  <a
                    href="#inicio"
                    className="
                      flex 
                      gap-[8px] xl:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                      scale-50 xl:scale-100
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
                      gap-[8px] xl:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                    scale-50 xl:scale-100
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
                      gap-[8px] xl:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                    scale-50 xl:scale-100
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
                      gap-[8px] xl:gap-[21px]
                    "
                  >
                    <img
                      src="/footer/arrow-footer.svg"
                      alt="arrow footer"
                      className="
                    scale-50 xl:scale-100
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
                ml-[88px] xl:ml-[155px] 
                mt-[21px] xl:mt-[106px] 
                gap-[8px] xl:gap-[16px]
              "
            >
              <div
                className="
                  uppercase font-bold 
                  text-[13px] xl:text-[22px]
                "
              >
                Contacto
              </div>
              <ul
                className="
                  flex flex-col 
                  gap-[9px] xl:gap-[15px]
                  text-[12px] xl:text-[21px]
                "
              >
                <li>
                  <a href="tel:+34657241310" className="flex xl:gap-[13px]">
                    <img
                      src="/footer/phone.svg"
                      alt="phone"
                      className="
                      scale-50 xl:scale-100
                    "
                    />
                    +34657241310
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tucoach@conciencia11.com"
                    className="flex xl:gap-[13px]"
                  >
                    <img
                      src="/footer/mail.svg"
                      alt="mail"
                      className="
                      scale-50 xl:scale-100
                    "
                    />
                    tucoach@conciencia11.com
                  </a>
                </li>
                <li className="flex gap-1 xl:gap-6 xl:mt-2">
                  <a
                    href="https://www.linkedin.com/in/jonathan-perez-medina-17614a231/"
                    target="_blank"
                  >
                    <img
                      src="/header/linkedin.png"
                      alt="Linkedin"
                      className="
                        scale-50 xl:scale-100
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
                        scale-50 xl:scale-100
                      "
                    />
                  </a>
                  <a href="https://www.facebook.com/JonaPerezM" target="_blank">
                    <img
                      src="/header/facebook.png"
                      alt="facebook"
                      className="
                        scale-50 xl:scale-100
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
                        scale-50 xl:scale-100
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
          text-[15px] xl:text-[19px] 
          h-[48px] xl:h-[80px] 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      >
        ©2023 Jonathan Perez. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
