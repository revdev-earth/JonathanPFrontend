const Section2 = () => {
  return (
    <div className="p-[17px] pt-[50px] md:px-[38px] md:pt-[93px] md:pb-[62px] lg:p-[100px] lg:py-[140px] lg:pb-[95px]">
      <div>
        <div
          className=" relative flex flex-col lg:flex-row font-bold bg-[#092435] text-white
            rounded-xl lg:rounded-3xl gap-[25px] md:gap-[53px]
            p-4 pt-8 pb-[42px] md:px-12 md:pt-20 lg:px-14 lg:pr-8 lg:py-20 lg:pb-16 
          "
        >
          <div
            className="
              absolute 
              -top-5 md:-top-8 lg:-top-8 left-2/4 -translate-x-2/4
              flex items-center justify-center
              h-9 md:h-16 lg:h-16 w-[288px] md:w-[560px] lg:w-max
              font-bold rounded-xl text-xs md:text-xl lg:text-2xl text-center 
              text-[#092435] lg:leading-[45px] font-gopher
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
              py-1 md:px-8 lg:px-8
            "
          >
            ¡¡ Toma acción y responsabilidad, no es <br className="md:hidden" />{" "}
            casualidad que hayas llegado hasta aquí!!
          </div>
          <div className="flex flex-col gap-4 md:gap-[28px] lg:gap-[17px] w-full">
            <div
              className="font-gopher md:pr-9
                text-3xl md:text-[42px] md:leading-[50px] lg:text-[42px] leading-[30px] lg:leading-[54px] 
                lg:w-[520px]
                bg-clip-text text-transparent bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
              "
            >
              Querido viajero y sembrador en el tiempo,
            </div>
            <div
              className="
                flex flex-col gap-4 md:gap-[17px] font-normal lg:w-[520px]
                px-2 pr-3 md:px-0 lg:p-0 
                text-base md:text-[18px] lg:text-lg 
                leading-[21px] md:leading-[25px] lg:leading-[25px] 
              "
            >
              <p>
                Si sientes que ya es hora de que despiertes a tu verdadero
                potencial, que te permitas florecer en la plenitud de tu ser,
                que descubras tu propósito y vayas en búsqueda de tu mejor
                versión.
              </p>
              <p>
                Escoge el plan que mejor se adapte a tu necesidad y empecemos a
                darle un cambio radical a tu vida.
              </p>
              <p>
                O si todavía no te sientes seguro de tu decisión, agenda una
                charla conmigo y exploremos juntos que es lo que no te permite
                iniciar.
              </p>
            </div>
            <div className="flex justify-center md:justify-start  lg:items-start lg:justify-start mt-3">
              <button
                className="
                  flex items-center justify-center uppercase text-center
                  mx-4 md:m-0 w-full md:w-auto px-4 h-10 font-bold
                  border-2 rounded-md border-[#2ABA64] tracking-[.15em]
                "
              >
                Quiero ver los planes
              </button>
            </div>
          </div>
          <div className="pl-1 w-full box-content lg:p-0">
            <img
              src="/section2/schedule.png"
              alt="schedule"
              className="w-full lg:w-[565px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
