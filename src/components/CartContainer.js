import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
const CartContainer = () => {
    const { products } = useContext(CartContext);

    return (
        <>
            { products.length > 0 
            ? <CartList products={products} />
            : <div className="alert-cart-no-products"><h2>NO HAY PRODUCTOS EN EL CARRITO</h2></div>
            }
        </>
    )
}

export default CartContainer
