import LogotFotosintesis from "/section1/logo-fotosintesis.png";

const Section1 = () => {
  return (
    <div
      className="flex relative
        min-h-[577px] px-24 pt-[72px]
        bg-[url('src/assets/hero/hero-bg.png')]
        border-b-[10px] 
        after:content-['*'] after:absolute 
        after:bottom-[-10px] after:left-0 
        after:h-[10px] after:w-full
        after:bg-gradient-to-r after:from-[#2ABA64] after:to-[#3369FF]
        "
    >
      <img src="/section1/rama.png" alt="rama" className="absolute right-0" />

      <div className="flex flex-col gap-6">
        <div>
          <img src={LogotFotosintesis} alt="logo fotosintesis" />
        </div>

        <div className="flex flex-col gap-4">
          <div className=" text-5xl font-bold">¡Descubre tu resplandor!</div>

          <div className=" text-2xl font-semibold leading-[30PX] max-w-[785px]">
            A través de este enfoque innovador y revolucionario que te
            acompañara hacia la revelación de tu luz interior y desbloqueara el
            potencial oculto de tu ser para que disfrutes de una vida con
            propósito.
          </div>
        </div>
        <button
          className="bg-[#2ABA64] w-[334px] mt-2 p-1
                            font-bold text-base rounded-md
                            shadow-[0_0px_6px_0px_rgba(0,0,0)]"
        >
          INVERTIR EN MI CRECIMIENTO
        </button>
      </div>
    </div>
  );
};

export default Section1;
