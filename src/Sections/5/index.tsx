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
    <div className="flex flex-col min-h-[800px] py-32 gap-20">
      <div className="w-max m-auto text-6xl text-center font-bold">
        Esta es la transformación que
        <br />
        necesitas, si te sientes así:
      </div>
      <div className="grid grid-cols-3 items-center">
        {CardsInfo.map((_data, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section5;
