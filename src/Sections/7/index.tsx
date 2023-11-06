const Section7 = () => {
  return (
    <div
      id="interactuemos"
      className="
        flex flex-col md:flex-row-reverse
        gap-[28px]  md:gap-[45px] 
        px-[21px]   md:px-[58px]
        py-[30px]   md:py-[81px] md:pb-[166px]
      "
    >
      <div
        className="
          flex flex-col
        bg-[#FFFAEB]
          py-[31px] md:py-[38px]
          px-[16px] md:px-[42px]
          shadow-2xl
          md:w-1/2
        "
      >
        <div className="text-center font-black text-[24px] md:text-[42px] font-gopher w-fit m-auto">
          Inspiración
          <div
            className="h-[4px] md:h-[8px] w-full -mt-1
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
          />
        </div>
        <div
          className="relative
            bg-[#071E2C] rounded-lg text-whit 
            p-[13px] md:p-[25px] 
            mt-[11px] md:mt-[15px]
          "
        >
          <div
            className="
              text-[10px]
              leading-[14px]
              tracking-[0.17px]

              md:text-[18px]
              md:leading-[24px]
              md:tracking-[0.3px]
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
              text-[11px] md:text-[18px] w-fit
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
              -bottom-[35px] md:-bottom-[48px]
              left-[34px]    md:left-[67px]
              scale-50 md:scale-100
            "
          />
        </div>

        <img
          src="/section7/profil-section-7.png"
          alt="profil"
          className="
              -mt-[8px] md:mt-[30px]
              m-auto
              scale-[0.81] md:scale-100
            "
        />
        <div
          className="h-[6px] md:h-[11px] w-[95%] m-auto -mt-[23px]
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
        />
      </div>

      <div
        className="
          rounded-xl
          bg-gradient-to-t from-[#2ABA64] to-[#3369FF]
          py-[25px]   md:py-[35px] 
          px-[40px]   md:px-[95px]
          md:w-1/2
        "
      >
        <div
          className="
            text-[24px] md:text-[41px] 
            font-bold font-gopher
          "
        >
          Quieres decirnos algo?
        </div>
        <div
          className="
            flex flex-col gap-1
            px-[15px] md:px-0
            mt-1 md:mt-5
          text-white
            md:text-[27px]
          "
        >
          <label htmlFor="name">
            <div>Nombre:</div>
            <input
              id="name"
              type="text"
              className="
                w-full bg-[#FAFAFA] rounded-md 
                h-[28px] md:h-[46px]
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
                h-[28px] md:h-[46px]
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
                h-[28px] md:h-[46px]
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
                h-[120px] md:h-[190px] 
                border-2 border-[#122E3F]
                text-[#071E2C] px-[7px]
              "
            />
          </label>

          <button
            className="
                flex justify-center items-center
                text-[11px] md:text-[16px] font-bold
                rounded-md 
                h-[24px] md:h-[40px] 
                w-[185px] md:w-[320px] 
                m-auto
                bg-[#09202E]
                mt-[10px]
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
