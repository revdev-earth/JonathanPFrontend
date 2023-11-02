const Section1 = () => {
  return (
    <div
      className="flex items-center
        min-h-[500px] px-24 relative
        bg-[url('src/assets/hero/hero-bg.png')]
        "
    >
      <img
        src="src/assets/hero/rama.png"
        alt="rama"
        className="absolute right-0"
      />

      <div className="flex flex-col gap-2 max-w-[750px]">
        <div>
          <img
            src="src/assets/hero/logo-fotosintesis.png"
            alt="logo fotosintesis"
          />
        </div>
        <div>¡Descubre tu resplandor!</div>
        <div>
          A través de este enfoque innovador y revolucionario que te acompañara
          hacia la revelación de tu luz interior y desbloqueara el potencial
          oculto de tu ser para que disfrutes de una vida con propósito.
        </div>
        <div>INVERTIR EN MI CRECIMIENTO</div>
      </div>
    </div>
  );
};

export default Section1;
