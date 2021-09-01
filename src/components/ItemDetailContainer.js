import { useEffect, useState } from "react";
import { productList } from "../constants/productsList";
import ItemDetail from "./ItemDetail";


const getItems = () => {
    return new Promise((resolve, reject)=>{
        resolve(productList[0]);
        reject("Ha ocurrido un error");
    })
}

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState(null)

    useEffect(() => {
        getItems()
            .then((response)=>{
                setTimeout(() => {
                    console.log("reponse", response) 
                    setItemDetail(response); 
                }, 2000)
            }) 
            .catch((error)=> console.log(error))
    }, [])

    return (
        <div className="product-view">
            { itemDetail && <ItemDetail item={itemDetail}/>}
            
        </div>
    )
}

export default ItemDetailContainer
