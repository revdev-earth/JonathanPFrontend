const Section7 = () => {
  return (
    <div
      id="interactuemos"
      className="
        flex flex-col
        md:grid md:grid-cols-2
        xl:flex xl:flex-row-reverse
        gap-[28px]  xl:gap-[45px] 
        px-[21px]   xl:px-[58px]
        py-[30px]   xl:py-[72px] xl:pb-[148px]
      "
    >
      <div
        className="
          flex flex-col
        bg-[#FFFAEB]
          py-[31px] xl:py-[38px]
          px-[16px] xl:px-[38px]
          shadow-2xl rounded-xl
          xl:w-1/2
        "
      >
        <div className="text-center font-black text-[24px] xl:text-[42px] font-gopher w-fit m-auto">
          Inspiración
          <div
            className="h-[4px] xl:h-[8px] w-full -mt-1
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
          />
        </div>

        <div
          className="relative
            bg-[#071E2C] rounded-lg text-whit 
            p-[13px] xl:p-[22px] xl:pb-[27px]
            mt-[11px] xl:mt-[20px]
          "
        >
          <div
            className=" text-[#FFFEFA]
              text-[10px] 
              leading-[14px]
              tracking-[0.17px]

              xl:text-[19px]
              xl:leading-[25px]
              xl:tracking-[0px]
            "
          >
            Hoy arde de nuevo. Que ardan tus sueños, tu ser, tu sonrisa, tu alma
            y espíritu. Prende a alguien más, no ilumines nada más. Dale calor a
            los que transitan el invierno de la soledad y tristeza. Apuesta
            todas tus fichas a Dios.
            <br /> Lo que se apagó de pie, préndelo de rodillas.
          </div>
          <div
            className="
              text-[11px] xl:text-[18px] w-fit
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text
            "
          >
            - Daniel Habif -
          </div>
          <img
            src="/section7/vector-section-7.svg"
            alt="vector"
            className="
              absolute
              -bottom-[35px] xl:-bottom-[48px]
              left-[34px]    xl:left-[67px]
              scale-50 xl:scale-100
            "
          />
        </div>

        <img
          src="/section7/profil-section-7.png"
          alt="profil"
          className="
              -mt-[8px] xl:mt-[30px]
              m-auto
              scale-[0.81] xl:scale-100
            "
        />
        <div
          className="h-[6px] xl:h-[11px] w-[95%] m-auto -mt-[5px] z-10
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
        />
      </div>

      <div
        className="
          rounded-xl
          bg-gradient-to-t from-[#2ABA64] to-[#3369FF]
          py-[25px]   xl:py-[35px] xl:pb-[45px] 
          px-[40px]   xl:px-[95px]
          xl:w-1/2
        "
      >
        <div
          className="
            text-[24px] xl:text-[41px] 
            font-bold font-gopher
          "
        >
          Quieres decirnos algo?
        </div>
        <div
          className="
            flex flex-col gap-[8px] xl:gap-[22px]
            px-[15px] xl:px-0
            mt-1 xl:mt-5
          text-white
            xl:text-[22px]
          "
        >
          <label htmlFor="name">
            <div>Nombre:</div>
            <input
              id="name"
              type="text"
              className="
                w-full bg-[#FAFAFA] rounded-md 
                h-[28px] xl:h-[46px]
                border-2 border-[#122E3F]
                text-[#071E2C] px-[7px]
              "
            />
          </label>

          <label htmlFor="email">
            <div>Correo electronico:</div>
            <input
              id="email"
              type="text"
              className="
                w-full bg-[#FAFAFA] rounded-md 
                h-[28px] xl:h-[46px]
                border-2 border-[#122E3F]
                text-[#071E2C] px-[7px]
              "
            />
          </label>

          <label htmlFor="tel">
            <div>Telefono:</div>
            <input
              id="tel"
              type="text"
              className="
                w-full bg-[#FAFAFA] rounded-md 
                h-[28px] xl:h-[46px]
                border-2 border-[#122E3F]
                text-[#071E2C] px-[7px]
              "
            />
          </label>

          <label htmlFor="tel">
            <div>Tu mensaje (opcional)</div>
            <textarea
              id="tel"
              className="
                w-full bg-[#FAFAFA] rounded-md 
                h-[111px] xl:h-[190px] 
                border-2 border-[#122E3F]
                text-[#071E2C] px-[7px]
              "
            />
          </label>

          <button
            className="
                flex justify-center items-center
                text-[13px] xl:text-[16px] font-bold
                bg-[#09202E] rounded-md 
                h-[28px] xl:h-[40px] 
                w-full xl:w-[320px] 
                m-auto xl:mt-[16px]
              "
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section7;
