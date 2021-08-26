import { useState } from "react";

const ItemCount = ({ initial, stock }) => {
  const [counter, setCounter] = useState(initial);

  const onAddHandler = () => {
    if (counter === stock) return;
    setCounter(counter + 1);
  };
  const onSubtractHandler = () => {
    if (counter === initial) return;
    setCounter(counter - 1);
  };
  const onAdd = () => {
    if (counter === 0) return;
    console.log(`Se agrega al carrito ${counter} unidades`);
  };

  return (
    <div className="div-buttons">
      <div className="div-counter">
        <button className="button-counter" onClick={onSubtractHandler}>
          -
        </button>
        <h2>{counter}</h2>
        <button className="button-counter" onClick={onAddHandler}>
          +
        </button>
      </div>
      <button className="add-to-cart-button" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
