const CardsInformation = [
  {
    content: "content",
    name: "name",
    profesion: "profesion",
  },
];

const Card = ({ content, name, profesion }: any) => {
  return (
    <div>
      <div>{content}</div>
      <div>{name}</div>
      <div>{profesion}</div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div>
      <div>Transformaciones</div>
      <div>
        {CardsInformation.map((_data, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section6;
