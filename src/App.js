import React, { useState, useEffect } from "react";
import ListingProducts from "./components/ListingProducts";
import NavBar from "./components/NavBar";
import MENU_LIST from "./constants/MenuList";


function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    (async ()=>{
      const response = await fetch("https://ecommerce-app-f9d78-default-rtdb.firebaseio.com/productos/.json");
      const data = await response.json();

      setProducts(data);
    })()

  }, [])

  console.log(products)

  return (
    <div>
      <NavBar menuList={MENU_LIST}/> 
      <ListingProducts listProducts={products}/>
    </div>
  );
}

export default App;
