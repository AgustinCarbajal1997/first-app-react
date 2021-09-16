import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
const CartContainer = () => {
    const { products } = useContext(CartContext);

    return (
        <>
            <CartList products={products} />
        </>
    )
}

export default CartContainer
