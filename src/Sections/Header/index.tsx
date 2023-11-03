const Header = () => {
  return (
    <div className="flex items-center  justify-between
                  h-[88px] px-[20px]
                  lg:h-[120px]  lg:px-24
                  bg-[#092435]">
      <div className="flex items-center gap-[18px]">
        <div className="w-[111px] h-[69px]">
          <img src="/header/logo.png" alt="logo" />
        </div>
        <div className="flex gap-[13px] h-[13px]">
          <img src="/header/linkedin.png" alt="Linkedin" />
          <img src="/header/instagram.png" alt="Instagram" />
          <img src="/header/facebook.png" alt="facebook" />
          <img src="/header/tiktok.png" alt="Tiktok" />
        </div>
      </div>
        <div className="">
          <img src="/header/hamburger.png" alt="Tiktok" />
        </div>

      <div className="hidden text-white gap-7 items-center">
        <div>Inicio</div>
        <div>Método</div>
        <div>Planes</div>
        <div>Interactuemos</div>
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
          className="flex items-center uppercase px-4 h-10 border-2 rounded-md border-[#2ABA64]"
        >
          Asesoria - Free
        </a>
      </div>
    </div>
  );
};

export default Header;
