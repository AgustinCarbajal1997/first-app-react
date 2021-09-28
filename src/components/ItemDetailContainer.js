import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { firestore } from "../firebase";
import LoadingBars from "./LoadingBars";
const ItemDetailContainer = () => {
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState(null)
    const [loading, setLoading] = useState(false);


    
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

    return (
        <div className="product-view">
            { itemDetail && <ItemDetail item={itemDetail} id={id}/>}
            { loading &&  <LoadingBars/>}
        </div>
    )
}

export default ItemDetailContainer
