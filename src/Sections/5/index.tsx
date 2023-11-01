const CardsInfo = [
  {
    text1: "text",
    text2: "text",
    price: 500,
    list: ["text", "text"],
  },
  {
    text1: "text",
    text2: "text",
    price: 500,
    list: ["text", "text"],
  },
  {
    text1: "text",
    text2: "text",
    price: 500,
    list: ["text", "text"],
  },
];

const Card = () => {
  return (
    <div>
      <div>text 1</div>
      <div>text 2</div>
      <div>price</div>
      <div>
        List
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <div>Button 1</div>
        <div>
          <div>Button 2</div>
          <div>Button 3</div>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div>
      <div>Esta es la transformación que necesitas, si te sientes así:</div>
      <div>
        {CardsInfo.map((_data, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section5;
