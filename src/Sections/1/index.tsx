import LogotFotosintesis from "/section1/logo-fotosintesis.png";

const Section1 = () => {
  return (
    <div
      id="inicio"
      className="flex lg:items-start  
        h-[374px] px-[20px] py-[40px]
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
        className="absolute right-0 top-[-10px] lg:top-0 w-[210px] lg:w-[866px]"
      />

      <div className="flex flex-col  gap-3 lg:gap-7 max-w-[750px]">
        <div className="w-[253px] lg:w-[506px]">
          <img src={LogotFotosintesis} alt="logo fotosintesis" />
        </div>
        <div className="flex flex-col lg:items-start lg:justify-evenly gap-5 lg:gap-3">
          <div className="text-[26px] lg:text-5xl font-gopher font-bold leading-[30px] lg:leading-[54px]">
            ¡Descubre tu resplandor!
          </div>
          <div className="lg:w-[795px] font-semibold text-base lg:text-2xl leading-[21px] lg:leading-[30px] text-justify">
            A través de este enfoque innovador y revolucionario que te
            acompañara hacia la revelación de tu luz interior y desbloqueara el
            potencial oculto de tu ser para que disfrutes de una vida con
            propósito.
          </div>
          <div className="lg:mt-3 py-2 px-2 lg:px-5 bg-[#2ABA64] text-base text-center font-bold uppercase rounded-md tracking-[.15em]">
            Invertir en mi crecimiento
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
