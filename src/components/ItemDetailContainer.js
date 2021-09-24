import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState(null)


    
    useEffect(() => {
        const collection = firestore.collection("items");
        let query = collection.doc(id);
        query = query.get();

        query
            .then((snapshot)=>{
                setItemDetail(snapshot.data())
            })
            .catch((error)=> console.log(error))
    }, [id])

    return (
        <div className="product-view">
            { itemDetail && <ItemDetail item={itemDetail}/>}
            
        </div>
    )
}

export default ItemDetailContainer
