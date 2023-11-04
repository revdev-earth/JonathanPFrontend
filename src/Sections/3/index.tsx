const Section3 = () => {
  return (
    <div className="m-5 mt-8 md:min-h-[800px] bg-[#092435] md:px-24 rounded-lg py-12 pb-8 relative">
      <div>
        <img
          src="/section3/vector-izquierda-section-3.png"
          alt="logo"
          className="
            absolute left-0 top-0
            w-[58px] h-[81px] md:w-[180px] max-w-none
            md:min-h-[210px] md:h-[213px] 
          "
        />

        <img
          src="/section3/vector-derecha-section-3.png"
          alt="logo"
          className="
            absolute right-0 top-1 md:top-0
            w-[58px] h-[55px] md:w-[200px] max-w-none
            md:min-h-[164px] md:h-[164px] 
          "
        />
      </div>
      <div className="flex flex-col items-center  gap-6 md:gap-12 text-white ">
        <div className="flex flex-col text-white text-center md:items-center md:h-[97px] text-xl leading-[22px] font-gopher font-bold">
          <div>Emprendedor digital, </div>
          <div>Especialista en Life Coaching,</div>
          <div>Proyector de Vida, Formador.</div>
        </div>

        <div className="flex flex-col items-center gap-10 md:gap-12 ">
          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-10 box-content px-5 text-base font-normal font-nunito leading-[21px]">
            <div
              className="
                flex  justify-center items-center box-content
                w-[206px] h-[97px] 
                md:min-w-[400px] md:min-h-[200px] bg-[#FFFAEB] rounded-lg
              "
            >
              <img
                src="/section3/logo-section-3.png"
                alt="logo"
                className="max-w-none w-[150px] md:w-[300px] md:min-h-[100px] h-[51px] md:h-[100px] "
              />
            </div>
            <div>
              "Quiero a través de mis redes sociales talleres, conferencias,
              sesiones personalizadas, sembrar la consciencia en el mundo,
              guiado por el amor, la ética y la coherencia. Aspiro a tocar las
              vidas de las personas y acompañarlas en sus procesos vitales,
              reconociendo nuestra existencia en este mundo como una experiencia
              humana llena de desafíos y oportunidades que podemos explorar
              juntos. En este viaje, mi propósito es analizar cada aspecto de la
              vida desde la amplitud de nuestra existencia, reconociendo la
              integridad de cuerpo, alma y mente que nos define como seres
              perfectos en evolución."
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-3 md:gap-10 box-content px-5 pr-2 text-base font-normal font-nunito leading-[21px]">
            <div
              className="
                flex justify-center items-center mr-3
                w-[223px] h-[122px] md:min-w-[400px] md:min-h-[200px] bg-[#FFFAEB] rounded-lg
              "
            >
              <img
                src="/section3/logo-fotosintesis-section-3.png"
                alt="logo"
                className="max-w-none w-[176px] md:w-[300px] md:min-h-[100px] h-[56px] md:h-[100px] "
              />
            </div>
            <div>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  • Al igual que la fotosíntesis, el crecimiento personal es un
                  proceso que requiere tiempo, dedicación у paciencia.{" "}
                </li>
                <li>
                  • Al igual que las plantas necesitan luz para realizar la
                  fotosíntesis, las personas necesitan aprender y experimentar
                  cosas nuevas para crecer.
                </li>
                <li>
                  • Al igual que las plantas necesitan nutrientes para crecer,
                  las personas necesitan rodearse de personas positivas y tener
                  una actitud positiva para crecer.
                </li>
                <li>
                  • Al igual que las plantas necesitan agua para sobrevivir, las
                  personas necesitan cuidar su cuerpo y su mente para
                  sobrevivir.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="inline-block uppercase mx-4 md:m-0  md:w-auto px-4 h-10 text-center border-2 rounded-md border-[#2ABA64] tracking-[.15em]">
          VER PLANES AHORA
        </button>
                
      </div>
    </div>
  );
};

export default Section3;
