import CardItem from "../CardItem";

const CardList = ({ persons }) => {
  return (
    <div>
      <ul>{persons.map((person) => {
        return (
          <CardItem
            key={person.id}
            person={person}
          />
        );
      })}</ul>
    </div>
  );
}

export default CardList;