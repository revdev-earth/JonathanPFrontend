const CardsInfo = [
  {
    imgSrc: "url",
    title: "",
    content: "",
  },
  {
    imgSrc: "url",
    title: "",
    content: "",
  },
  {
    imgSrc: "url",
    title: "",
    content: "",
  },
  {
    imgSrc: "url",
    title: "",
    content: "",
  },
  {
    imgSrc: "url",
    title: "",
    content: "",
  },
];

const Card = () => {
  return (
    <div>
      <div>Background</div>
      <div>
        <div>Title</div>
        <div>Content</div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div>
      <div>
        <div>Método de transformación</div>
        <div>enfocado en descubrir:</div>
      </div>
      <div>
        {CardsInfo.map((_data, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
