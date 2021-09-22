import React, { useState, useEffect } from "react";
import { productList } from "../constants/productsList";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  
  
  
  useEffect(() => {
    const collection = firestore.collection("items")

    const query = collection.get()
    
    query
      .then((snapshot)=>{
        const docs = snapshot.docs
        const products = docs.map((item)=> ({ ...item.data(), id:item.id }))
        setProducts(products);
      })
      .catch((error) => {
        console.log(error)
      })
    }, [id])




  return (
    <div>
      <ItemList listProducts={products} />
    </div>
  );
};

export default ItemListContainer;
