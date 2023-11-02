const Footer = () => {
  return (
    <div>
      <div>Linea</div>
      <div className="h-[260px] bg-[#092435] flex justify-between px-20">
        <div className="flex justify-center items-center">
          <img
            src="src/assets/footer/logo-footer.png"
            alt="logo footer"
            className="w-[487px] h-[152px]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div>Secciones</div>
          <ul>
            <li>Inicio</li>
            <li>Método</li>
            <li>Planes</li>
            <li>Interactuemos</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <div>Contacto</div>
          <ul>
            <li>+34657241310</li>
            <li>tucoach@conciencia11.com</li>
            <li>
              <div>Linkedin</div>
              <div>Instagram</div>
              <div>facebook</div>
              <div>Tiktok</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[80px] bg-gradient-to-r from-cyan-500 to-blue-500">
        ©2023 Conecta tu propósito. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
