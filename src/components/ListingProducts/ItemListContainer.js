import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import LoadingBars from "../LoadingBars";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  

  useEffect(() => {
    const collection = firestore.collection("items");
    
    if (id) {
      setLoading(true);
      let query = collection.where("article", "==", id);
      query = query.get();
      query
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((item) => ({ ...item.data(), itemId: item.id }))
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(true);
      let query = collection.get();
      query
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((item) => ({ ...item.data(), itemId: item.id }))
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });

    }
  }, [id]);

  
  




  return (
    <div>
      <ItemList listProducts={products} />
      { loading &&  <LoadingBars/>}
      
    </div>
  );
};
      

export default ItemListContainer;
