const Footer = () => {
  return (
    <div className="font-nunito">
      <div
        className="h-[11px] w-full 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      />
      <div className="flex h-[339px] bg-[#092435] px-[100px] text-white">
        <div className="flex justify-center items-center">
          <img
            src="/footer/logo-footer.png"
            alt="logo footer"
            className="w-[487px] h-[152px]"
          />
        </div>
        <div className="flex flex-col gap-5 ml-[141px] mt-[58px]">
          <div className="uppercase font-bold text text-[22px]">Secciones</div>
          <ul className="flex flex-col gap-[15px] text-[21px]">
            <li className="flex gap-[21px]">
              <img src="/footer/arrow-footer.svg" alt="arrow footer" />
              Inicio
            </li>
            <li className="flex gap-[21px]">
              <img src="/footer/arrow-footer.svg" alt="arrow footer" />
              Método
            </li>
            <li className="flex gap-[21px]">
              <img src="/footer/arrow-footer.svg" alt="arrow footer" />
              Planes
            </li>
            <li className="flex gap-[21px]">
              <img src="/footer/arrow-footer.svg" alt="arrow footer" />
              Interactuemos
            </li>
          </ul>
        </div>
        <div className="flex flex-col ml-[155px] mt-[106px] gap-[16px]">
          <div className="uppercase font-bold text text-[22px]">Contacto</div>
          <ul className="flex flex-col gap-[15px] text-[21px]">
            <li className="flex gap-[13px]">
              <img src="/footer/phone.svg" alt="phone" />
              +34657241310
            </li>
            <li className="flex gap-[13px]">
              <img src="/footer/mail.svg" alt="mail" />
              tucoach@conciencia11.com
            </li>
            <li className="flex gap-6 mt-2">
              <img src="/footer/linkedin.svg" alt="phone" />
              <img src="/footer/instagram.svg" alt="instagram" />
              <img src="/footer/facebook.svg" alt="facebook" />
              <img src="/footer/tiktok.svg" alt="tiktok" />
            </li>
          </ul>
        </div>
      </div>

      <div
        className="
          flex justify-center items-center 
          font-semibold text-[19px] h-[80px] 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
      >
        ©2023 Conecta tu propósito. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
