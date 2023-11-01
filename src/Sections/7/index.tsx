const Section7 = () => {
  return (
    <div>
      <div>
        <div>Quieres decirnos algo?</div>
        <label htmlFor="name">
          <div>Nombre</div>
          <input id="name" type="text" />
        </label>

        <label htmlFor="email">
          <div>Correo electronico</div>
          <input id="email" type="text" />
        </label>

        <label htmlFor="tel">
          <div>Telefono</div>
          <input id="tel" type="text" />
        </label>

        <label htmlFor="tel">
          <div>Tu mensaje (opcional)</div>
          <textarea id="tel" />
        </label>
        <div>
          <button>enviar</button>
        </div>
      </div>
      <div>
        <div>Inspiracion</div>
        <div>
          <div>
            Hoy arde de nuevo. Que ardan tus sueños, tu ser, tu sonrisa, tu alma
            y espíritu. Prende a alguien más, no ilumines nada más. Dale calor a
            los que transitan el invierno de la soledad y tristeza. Apuesta
            todas tus fichas a Dios. Lo que se apagó de pie, préndelo de
            rodillas.
          </div>
          <div>- Daniel Habif -</div>
        </div>
        <div>Imagen</div>
      </div>
    </div>
  );
};

export default Section7;
