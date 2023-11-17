const Section3 = () => {
  return (
    <div
      id="intro"
      className=" relative 
        m-5 lg:m-0 mt-2 md:m-0 
        py-12 pb-7 md:pt-[89px] md:pb-[35px] lg:py-16 lg:pb-[68px] lg:px-24 
        lg:min-h-[800px] bg-[#092435] 
        rounded-lg lg:rounded-none
      "
    >
      <div>
        <img
          src="/section3/vector-izquierda-section-3.png"
          alt="logo"
          className="
            absolute left-0 top-0
            w-[58px] md:w-[140px] lg:w-[255px] max-w-none
            h-[81px] md:h-[196px] lg:h-[326px] lg:min-h-[210px] 
          "
        />

        <img
          src="/section3/vector-derecha-section-3.png"
          alt="logo"
          className="
            absolute right-0 top-1 lg:top-0
            w-[58px] md:w-[147px] lg:w-[279px] max-w-none
            h-[55px] md:h-[125px] lg:h-[224px] lg:min-h-[164px] 
          "
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-[37px] lg:gap-12 lg:pt-0 text-white ">
        <div
          className="flex flex-col font-gopher font-bold text-white text-center 
            lg:items-center lg:h-[97px] 
            text-xl md:text-[42px] lg:text-[42px] 
            leading-[22px] md:leading-[52px] lg:leading-[45px] 
            bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
          "
        >
          <div className="bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]">
            Emprendedor digital,
          </div>
          <div className="bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]">
            Especialista en Life Coaching,
          </div>
          <div className="bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]">
            Proyector de Vida, Formador.
          </div>
        </div>

        <div
          className="
            flex flex-col items-center md:items-start
            gap-10 md:gap-5 lg:gap-12 md:px-[42px] 
            md:grid md:grid-cols-2
            lg:flex lg:flex-col
            lg:pl-[22px] lg:pt-12
          "
        >
          <div
            className="
              flex flex-col items-center lg:flex-row 
              gap-2 lg:gap-10 box-content px-5 md:px-0 text-base font-normal leading-[21px] 
            "
          >
            <div
              className="
                flex justify-center items-center box-content lg:mt-1 rounded-lg
                w-[206px] md:w-full 
                h-[97px] md:h-[156px]
                lg:min-w-[400px] lg:min-h-[188px] bg-[#FFFAEB] 
              "
            >
              <img
                src="/section3/logo-section-3.png"
                alt="logo"
                className="max-w-none w-[150px] lg:w-[290px] lg:min-h-[100px] h-[51px] lg:h-[100px] "
              />
            </div>
            <div className="md:mt-[18px] md:text-[18px] md:leading-[25px] lg:mt-0 lg:text-lg lg:leading-[25px]">
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

          <div
            className="
              flex flex-col lg:flex-row items-center box-content
              gap-3 lg:gap-7 
              px-5 md:px-0 lg:px-[18px] pr-2 
              text-base font-normal leading-[21px]
            "
          >
            <div
              className="
                flex justify-center items-center mr-3 lg:mt-2
                w-[223px] md:w-full 
                h-[122px]  md:h-[156px]
                lg:min-w-[399px] lg:min-h-[218px] bg-[#FFFAEB] rounded-lg
              "
            >
              <img
                src="/section3/logo-fotosintesis-section-3.png"
                alt="logo"
                className="max-w-none w-[176px] lg:w-[316px] lg:min-h-[100px] h-[56px] lg:h-[100px] "
              />
            </div>
            <div className="md:mt-[18px] md:text-[18px] md:leading-[25px] lg:mt-0 lg:text-lg lg:leading-[25px]">
              <ul className="flex flex-col gap-[10px] lg:mt-2">
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
        <button
          className="
            inline-block uppercase h-10 text-center 
            mx-4 lg:m-0 lg:w-auto px-4 font-bold
            tracking-[.15em] lg:tracking-[.35em] lg:text-base 
            border-2 rounded-md border-[#2ABA64] 
          "
        >
          Ver planes ahora
        </button>
      </div>
    </div>
  );
};

export default Section3;
