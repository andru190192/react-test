const CardItem = ({ person: { name, image, status, species } }) => {
  return (
    <div>
      <li>{name}</li>
      <li>{status}</li>
      <li>{species}</li>
      <img src={image} />
    </div>
  );
}

export default CardItem;