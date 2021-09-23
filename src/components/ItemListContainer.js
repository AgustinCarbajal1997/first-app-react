import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    const collection = firestore.collection("items");

    if (id) {
      let query = collection.where("article", "==", id);
      query = query.get();
      query
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let query = collection.get();
      query
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
          );
        })
        .catch((error) => {
          console.log(error);
        });

      // probando buscador --------------------------------------------

      
    }
  }, [id]);

  return (
    <div>
      <ItemList listProducts={products} />
    </div>
  );
};

export default ItemListContainer;
