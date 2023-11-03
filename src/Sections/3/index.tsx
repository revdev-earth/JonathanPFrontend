const Section3 = () => {
  return (
    <div className="min-h-[888px] bg-[#092435] px-28 pt-14 pb- relative">
      <div>
        <img
          src="/section3/vector-izquierda-section-3.png"
          alt="logo"
          className="
            absolute left-0 top-0
                          w-[255px] max-w-none
            min-h-[210px] h-[325px] 
          "
        />
        <img
          src="/section3/vector-derecha-section-3.png"
          alt="logo"
          className="
            absolute right-0 top-0
                          w-[280px] max-w-none
            min-h-[164px] h-[222px] 
          "
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-16 w-[1200px] text-white">
        <div className="flex flex-col text-center items-center  
                      w-[600px]  text-[42px] font-bold leading-[45px]
                      bg-clip-text         
                      text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        
        ">
          Emprendedor digital, 
          Especialista en Life Coaching,
          Proyector de Vida, Formador.
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex gap-10">
            <div
              className="
                flex justify-center items-center
                min-w-[400px]  min-h-[188px] bg-[#FFFAEB] rounded-lg
              "
            >
              <img
                src="/section3/logo-section-3.png"
                alt="logo"
                className="max-w-none w-[300px] min-h-[100px] h-[100px] "
              />
            </div>
            <div className="text-lg leading-[25px] font-normal">
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

          <div className="flex gap-10">
            <div
              className="
                flex justify-center items-center
                min-w-[400px] min-h-[200px] bg-[#FFFAEB] rounded-lg
              "
            >
              <img
                src="/section3/logo-fotosintesis-section-3.png"
                alt="logo"
                className="max-w-none w-[300px] min-h-[100px] h-[100px] "
              />
            </div>
            <div className="text-lg leading-[25px] font-normal">
              <ul>
                <li>
                  • Al igual que la fotosíntesis, el crecimiento personal es un
                  proceso que requiere tiempo, dedicación у paciencia.
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

          <button className="flex items-center 
                                mt-[7px] px-4 h-10 w-[]
                                uppercase text-base font-bold 
                                tracking-[.45em] leading-4
                                border-2 rounded-md border-[#2ABA64]">
                VER LOS PLANES AHORA
              </button>
      </div>
    </div>
  );
};

export default Section3;
