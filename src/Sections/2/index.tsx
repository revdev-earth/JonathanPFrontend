const Section2 = () => {
  return (
    <div className=" p-[17px] pt-[50px]  lg:p-[100px] lg:py-[140px] lg:pb-[95px]">
      <div>
        <div className="flex flex-col lg:flex-row bg-[#092435] font-bold rounded-xl lg:rounded-3xl lg:px-14 lg:pr-8 lg:py-20 lg:pb-16 p-4 pt-8 pb-[42px] gap-[25px] text-white relative ">
          <div
            className="
              absolute 
              -top-5 lg:-top-8 left-2/4 -translate-x-2/4
              flex items-center justify-center
              h-9 py-1 lg:h-16  lg:px-8 w-[288px] lg:w-max
              font-bold rounded-xl text-xs lg:text-2xl text-center 
              text-[#092435] lg:leading-[45px] font-gopher
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
          >
            ¡¡ Toma acción y responsabilidad, no es <br className="lg:hidden" />{" "}
            casualidad que hayas llegado hasta aquí!!
          </div>
          <div className="flex flex-col gap-4  lg:gap-[17px] w-full ">
            <div
              className="
                font-gopher text-3xl lg:text-[42px] leading-[30px] lg:leading-[54px] 
                lg:w-[520px]
                bg-clip-text text-transparent bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
              "
            >
              Querido viajero y sembrador en el tiempo,
            </div>
            <div className="flex flex-col px-2 lg:p-0 pr-3 gap-4 font-normal text-base lg:text-lg leading-[21px] lg:leading-[25px] lg:w-[520px]">
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
            <div className="flex justify-center lg:items-start lg:justify-start mt-3">
              <button
                className="
                  flex items-center justify-center uppercase text-center
                  mx-4 lg:m-0 w-full lg:w-auto px-4 h-10 font-bold
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
