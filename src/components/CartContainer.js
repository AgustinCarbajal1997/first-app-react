import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import TotalItem from "./TotalItem";
const CartContainer = () => {
    const { products } = useContext(CartContext);

    return (
        <>
            { products.length > 0 
            ? (<div className="cart-list-container"><CartList products={products} /> <TotalItem products={products} /> </div>)
            : (<div className="alert-cart-no-products">
                <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                <Link to="/"><button >HOME</button></Link>
                    
            </div>)
            }
        </>
    )
}

export default CartContainer
