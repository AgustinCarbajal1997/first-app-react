import React, { useState } from "react";
import { productList } from "../constants/productsList";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productsPromise = new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        setProducts(productList);
      }, 2000)
    );
    reject("Ha ocurrido un error");
  });

  productsPromise
    .then(() => {
      console.log(products);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <ItemList listProducts={products} />
    </div>
  );
};

export default ItemListContainer;
