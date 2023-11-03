const Section2 = () => {
  return (
    <div className=" p-24">
      <div>
        <div className="flex bg-[#092435] font-bold rounded-xl p-8 pt-16 gap-4 text-white relative">
          <div
            className="
              flex items-center
              font-bold rounded-xl
              h-16 w-max px-10
              bg-gradient-to-r from-cyan-500 to-blue-500
              absolute
              -top-8 left-2/4 -translate-x-2/4
          "
          >
            ¡¡ Toma acción y responsabilidad, no es casualidad que hayas llegado
            hasta aquí!!
          </div>
          <div className="flex flex-col gap-2 w-2/4">
            <div>Querido viajero y sembrador en el tiempo,</div>
            <div className="flex flex-col gap-2">
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
              <button className="flex items-center uppercase px-4 h-10 border-2 rounded-md border-[#2ABA64]">
                QUIERO VER LOS PLANES
              </button>
            </div>
          </div>
          <div>
            <img src="/section2/schedule.png" alt="schedule" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
