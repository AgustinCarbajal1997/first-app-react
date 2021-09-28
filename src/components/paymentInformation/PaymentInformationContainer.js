import { useReducer, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import PaymentInformation from "./PaymentInformation";
import INITIAL_FORM_STATE from "./InitialFormState";
import REGULAR_EXPRESSION from "./RegularExpressions";
import { formReducer } from "./FormReducer";
import { firestore } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
const PaymentInformationContainer = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE)
    const { products, clearProducts } = useContext(CartContext);
    const history = useHistory();
    
    const onChangeInputHandler = (e) => {
        const data = e.target.value;
        const regex = REGULAR_EXPRESSION[e.target.name].test(data); 
        const modification = {
            item: e.target.name,
            value:data,
            onBlur:false,
            checked:regex
        }
        dispatch({ type:"MODIFY_INPUT", payload:modification })
    }
    const onBlurRegex = (e) => {
        dispatch({ type:"BLUR_REGEX", payload:e.target.name })
    }

    const onConfirmCartHandler = () => {
        const checkedInputs  = Object.values(state).map((item)=> item.checked).every((item)=> item === true);
        if(!checkedInputs) return toast.error("¡No ha completado todos los campos!",{
            style:{
                backgroundColor:"#383838",
                color:"#ffffff"
            }
        });

        const dataBuyer = Object.keys(state).reduce((obj, item)=> ({ ...obj, [item]:state[item].value }),{});
        
        const selectedProducts = products.map((item)=> ({ 
            itemId:item.itemId,
            title:item.title,
            quantity:item.quantity,
            price:item.price
         }))
        
        const date = new Date();
        const dd = date.toLocaleDateString()
        const total = products.map((item)=> item.quantity * item.price).reduce((a,b)=> a + b);
        
        const newOrder = {
            buyer:dataBuyer,
            items:selectedProducts,
            date:dd,
            total
        }
        const orders = firestore.collection("orders");
        
        orders.add(newOrder)
            .then(({ id })=>{
                history.push(`/payment-information/${id}`);
                clearProducts()
            })
            .catch((error)=> console.log(error))

    }

    return (
        <>
            {
                products.length > 0 
                ? (
                    <PaymentInformation 
                        state={state} 
                        onChangeInputHandler={onChangeInputHandler}
                        onConfirmCartHandler={onConfirmCartHandler}
                        onBlurRegex={onBlurRegex}
                        products={products}    
                    />
                    )
                : (<div className="alert-cart-no-products">
                    <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                    <Link to="/"><button >HOME</button></Link>
                    </div>)
            }
            <ToastContainer/>
        </>
    )
}


export default PaymentInformationContainer
