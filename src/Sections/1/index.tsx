import LogotFotosintesis from "/section1/logo-fotosintesis.png";

const Section1 = () => {
  return (
    <div
      className="flex xl:items-center 
        h-[374px] px-[20px] py-[40px]
        xl:min-h-[500px] xl:px-24 relative
        bg-[url('/section1/hero-bg.png')]
        "
    >
      <img src="/section1/rama.png" alt="rama" className="absolute right-0 top-[-10px] w-[210px]" />

      <div className="flex flex-col gap-3 max-w-[750px]">
        <div className="w-[253px]">
          <img src={LogotFotosintesis} alt="logo fotosintesis" />
        </div>
        <div className="flex flex-col gap-5">

        <div className="text-[26px] font-gopher font-bold leading-[30px]" >¡Descubre tu resplandor!</div>
        <div className="font-nunito font-semibold text-base leading-[21px] text-justify">
          A través de este enfoque innovador y revolucionario que te acompañara
          hacia la revelación de tu luz interior y desbloqueara el potencial
          oculto de tu ser para que disfrutes de una vida con propósito.
        </div>
        <div className="py-2 px-2 bg-[#2ABA64] text-base text-center font-bold font-nunito rounded-md tracking-[.15em]" >INVERTIR EN MI CRECIMIENTO</div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
