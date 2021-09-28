import PaymentOrder from "./PaymentOrder";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const PaymentOrderContainer = () => {
    const [order, setOrder] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const collection = firestore.collection("orders");
        let query = collection.doc(id);
        query = query.get();

        
        toast.promise(query
            .then((snapshot)=>{
                setOrder(snapshot.data())
            })
            .catch((error)=> console.log(error))
        ,{
            pending:{
                render(){
                    return "Cargando orden"
                },
                style:{backgroundColor:"#383838", color:"#ffffff"}
            },
            success:"¡Muchas gracias por su compra!",
            error:"Ha ocurrido un error con su orden."
        })


    }, [id])

    return (
        <div className="payment-order-container">
            { order && <PaymentOrder order={order}/> }
            <ToastContainer/>
        </div>
    )
}

export default PaymentOrderContainer
