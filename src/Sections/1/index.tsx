import LogotFotosintesis from "/section1/logo-fotosintesis.png";

const Section1 = () => {
  return (
    <div
      id="inicio"
      className="flex lg:items-start  
        h-[374px] md:h-[365px] px-[20px] py-[40px] md:px-[40px] md:py-[30px]
        lg:py-[72px]
        lg:min-h-[567px] lg:px-24 relative
        bg-[url('/section1/hero-bg.png')]
        after:content-[''] after:absolute 
        after:bottom-[-10px] after:left-0 
        after:h-[6px] lg:after:h-[10px] after:w-full
        after:bg-gradient-to-r after:from-[#2ABA64] after:to-[#3369FF]
      "
    >
      <img
        src="/section1/rama.png"
        alt="rama"
        className="absolute right-0 top-[-10px] md:top-[-26px] lg:top-0 w-[210px] md:w-[436px] lg:w-[866px]"
      />

      <div className="flex flex-col gap-3 lg:gap-7 max-w-[750px]">
        <div className="w-[253px] md:w-[333px] lg:w-[506px]">
          <img src={LogotFotosintesis} alt="logo fotosintesis" />
        </div>
        <div className="flex flex-col lg:items-start lg:justify-evenly gap-5 lg:gap-3">
          <div className="text-[26px] lg:text-5xl font-gopher font-bold leading-[30px] lg:leading-[54px]">
            ¡Descubre tu resplandor!
          </div>
          <div
            className="font-semibold text-justify md:w-[454px] lg:w-[795px] 
              text-base md:text-[16px] lg:text-2xl
              leading-[21px] md:leading-[20px] lg:leading-[30px]
            "
          >
            A través de este enfoque innovador y revolucionario que te
            acompañara hacia la revelación de tu luz interior y desbloqueara el
            potencial oculto de tu ser para que disfrutes de una vida con
            propósito.
          </div>
          <div
            className=" bg-[#2ABA64] text-base text-center font-bold uppercase rounded-md
              lg:mt-3 py-2 px-2 lg:px-5 tracking-[.15em] md:w-[334px]
            "
          >
            Invertir en mi crecimiento
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
