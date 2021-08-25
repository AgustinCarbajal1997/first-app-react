import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
const ItemListContainer = () => {
    const [products, setProducts] = useState([])

useEffect(() => {
    (async ()=>{
        const response = await fetch("https://ecommerce-app-f9d78-default-rtdb.firebaseio.com/productos/.json");
        const data = await response.json();
        const filterProducts = data.filter(item => item.article === "cellphone")

        setProducts(filterProducts);
    })()
}, [])
    
    console.log(products)

    return (
        <div>
            <ProductsItem listProducts={products}/>
        </div>
    )
}

export default ItemListContainer
