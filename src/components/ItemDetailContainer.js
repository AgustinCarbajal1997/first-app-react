import { useEffect, useState } from "react";
import { productList } from "../constants/productsList";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

// promise para simular consulta a base de datos
const getItems = () => {
    return new Promise((resolve, reject)=>{
        resolve(productList);
        reject("Ha ocurrido un error");
    })
}

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState(null)

    console.log("useParams", typeof id)

    
    useEffect(() => {
        getItems()
            .then((response)=>{
                setTimeout(() => {
                    console.log(response)
                    const filterProduct = response.find(item => item.id === parseInt(id))
                    console.log(filterProduct);
                    setItemDetail(filterProduct); 
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
