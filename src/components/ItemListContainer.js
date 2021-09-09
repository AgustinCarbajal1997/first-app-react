import React, { useState, useEffect } from "react";
import { productList } from "../constants/productsList";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  
  
  
  useEffect(() => {
    // promise para simular luego el retardo por asincronia y consulta a base de datos
    const productsPromise = new Promise((resolve, reject) => {
      resolve(productList);
      reject("Ha ocurrido un error");
    });
    productsPromise
      .then((response) => {
          setTimeout(() => {
            if(id){
              const filterCategories = response.filter(item => item.article === id);
              setProducts(filterCategories)
            }else{
              setProducts(response)
            }
          }, 2000); //delay de dos segundo para simular consula a base de datos
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, [id])


  return (
    <div>
      <ItemList listProducts={products} />
    </div>
  );
};

export default ItemListContainer;
