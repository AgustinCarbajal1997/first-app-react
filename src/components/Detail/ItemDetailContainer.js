import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import LoadingBars from "../LoadingBars";
const ItemDetailContainer = () => {
    const { id } = useParams()
    const { products } = useContext(CartContext);
    const [itemDetail, setItemDetail] = useState(null)
    const [loading, setLoading] = useState(false);
    const [isExist, setIsExist] = useState(null);

    
    useEffect(() => {
        setLoading(true);
        const collection = firestore.collection("items");
        let query = collection.doc(id);
        query = query.get();

        query
            .then((snapshot)=>{
                setItemDetail({ ...snapshot.data(), itemId:id })
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
    }, [id])

    useEffect(() => {
        if(products.length > 0){
            const findProductCart = products.find((item)=> item.itemId === id);
            findProductCart ? setIsExist(true) : setIsExist(null);
        }
    }, [id, products])


    return (
        <div className="product-view">
            { itemDetail && <ItemDetail item={itemDetail} id={id} isExist={isExist}/>}
            { loading &&  <LoadingBars/>}
        </div>
    )
}

export default ItemDetailContainer
