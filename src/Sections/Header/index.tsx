const Header = () => {
  return (
    <div
      className="flex items-center  justify-between
        h-[88px] px-[20px]
        md:h-[120px]  lg:px-24
        bg-[#092435]
      "
    >
      <div className="flex items-center gap-[18px] md:gap-[30px]">
        <div className="w-[111px] md:w-[178px] h-[69px] md:h-[111px]">
          <img src="/header/logo.png" alt="logo" />
        </div>
        <div className="flex gap-[13px] md:gap-[21px] h-[13px] md:h-[20px]">
          <img src="/header/linkedin.png" alt="Linkedin" />
          <img src="/header/instagram.png" alt="Instagram" />
          <img src="/header/facebook.png" alt="facebook" />
          <img src="/header/tiktok.png" alt="Tiktok" />
        </div>
      </div>
      <div className=" md:hidden">
        <img src="/header/hamburger.png" alt="Tiktok" />
      </div>

      <div className="hidden md:flex text-white gap-7 items-center text-xl">
        <a href="#inicio">Inicio</a>
        <a href="#metodo">Método</a>
        <a href="#planes">Planes</a>
        <a href="#interactuemos">Interactuemos</a>

        <div>
          <a
            href="/"
            className="flex items-center uppercase px-4 h-10 border-2 rounded-md border-[#346AFF]"
          >
            Blog
          </a>
        </div>
        <a
          href="/"
          className="flex items-center uppercase px-6 h-10 border-2 rounded-md border-[#2ABA64]"
        >
          Asesoria - Free
        </a>
      </div>
    </div>
  );
};

export default Header;
