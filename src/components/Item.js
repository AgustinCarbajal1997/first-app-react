import ItemCount from "./ItemCount";
const Item = ({ item }) => {
  return (
    <li className="product-item" key={item.id}>
      <div className="product-item__image">
        <img src={item.images[0]} alt={item.title} />
      </div>
      <h2>{item.title}</h2>
      <h3>$ {item.price}</h3>
      <div>
        <ItemCount initial={0} stock={parseInt(item.unites)} />
      </div>
    </li>
  );
};

export default Item;
