const Section2 = () => {
  return (
    <div className=" p-24 pt-32">
      <div>
        <div className="relative flex gap-4 ml-2 pl-12 pr-[34px] pt-[76px] w-[1237px] h-[600px] bg-[#092435] text-white font-bold rounded-2xl">
          <div
            className="
              absolute
              -top-8 left-2/4 -translate-x-2/4
              flex items-center
              h-16 w-max px-10
              bg-gradient-to-r from-cyan-500 to-blue-500
              font-bold rounded-xl text-2xl text-[#092435]
          "
          >
            ¡¡ Toma acción y responsabilidad, no es casualidad que hayas llegado
            hasta aquí!!
          </div>
          <div className="flex flex-col gap-6 w-2/4 ">
            <div className="w-[500px]  text-[42px] font-bold leading-[54px]
                          bg-clip-text         
                          text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            ">
              Querido viajero y sembrador en el tiempo,
            </div>
            <div className="flex flex-col gap-4 w-[500px] text-[18px] leading-[25px] font-normal">
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
            <div>
              <button className="flex items-center 
                                mt-[7px] px-4 h-10 
                                uppercase text-xs font-bold 
                                tracking-[.45em]
                                border-2 rounded-md border-[#2ABA64]">
                QUIERO VER LOS PLANES
              </button>
            </div>
          </div>
          <div className="pt-1">
            <img src="/section2/schedule.png" alt="schedule" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
