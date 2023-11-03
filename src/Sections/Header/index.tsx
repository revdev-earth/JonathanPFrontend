const Header = () => {
  return (
    <div className="flex bg-[#092435] h-[120px] justify-between px-24">
      <div className="flex items-center gap-8">
        <div>
          <img src="/header/logo.png" alt="logo" />
        </div>
        <div className="flex gap-5 ">
          <img src="/header/linkedin.png" alt="Linkedin" />
          <img src="/header/instagram.png" alt="Instagram" />
          <img src="/header/facebook.png" alt="facebook" />
          <img src="/header/tiktok.png" alt="Tiktok" />
        </div>
      </div>

      <div className="flex text-white gap-7 items-center">
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
