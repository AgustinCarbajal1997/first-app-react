import Item from "./Item";

const ItemList = ({ listProducts }) => {
  return (
    <section className="section-products">
      {listProducts.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </section>
  );
};

export default ItemList;
