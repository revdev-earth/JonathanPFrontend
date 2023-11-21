import { useState } from "react";
import "./style.css";

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex flex-col font-semibold">
      <div className="flex items-center justify-between bg-[#092435] h-[88px] px-[20px] md:px-[40px]">
        <div className="flex items-center gap-[18px] xl:gap-[30px]">
          <div className="w-[111px] xl:w-[178px] h-[69px] xl:h-[111px]">
            <a href="/">
              <img src="/header/logo.png" alt="logo" />
            </a>
          </div>
          <div className="flex gap-[13px] xl:gap-[21px] h-[13px] xl:h-[20px]">
            <a
              href="https://www.linkedin.com/in/jonathan-perez-medina-17614a231/"
              target="_blank"
            >
              <img src="/header/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/jonaperezme/" target="_blank">
              <img src="/header/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/JonaPerezM" target="_blank">
              <img src="/header/facebook.png" alt="facebook" />
            </a>
            <a
              href="https://www.tiktok.com/@jonaperezme?lang=es"
              target="_blank"
            >
              <img src="/header/tiktok.png" alt="Tiktok" />
            </a>
          </div>
        </div>

        <div onClick={() => setShowMenu(!showMenu)}>
          <img src="/header/hamburger.png" alt="hamburger" />
        </div>
      </div>

      <div
        className={`
          flex flex-col gap-[20px] items-center text-xl text-[#071E2C] 
          bg-[url('/section1/hero-bg.png')] bg-bottom bg-cover rounded-b-3xl
          ${showMenu ? "menuAnimation1" : "menuAnimation2"}
        `}
      >
        <div className="flex gap-[22px] text-[18px] mt-[20px]">
          <a href="#inicio">Inicio</a>
          <a href="#metodo">Método</a>
          <a href="#planes">Planes</a>
          <a href="#interactuemos">Interactuemos</a>
        </div>

        <div className="flex gap-[26px]">
          <a
            href="/"
            className="flex items-center uppercase px-4 h-10 border-2 rounded-md border-[#346AFF]"
          >
            Blog
          </a>

          <a
            href="#intro"
            className="flex items-center uppercase px-6 h-10 border-2 rounded-md border-[#2ABA64]"
          >
            Asesoria - Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
