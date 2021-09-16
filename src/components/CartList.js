import CartItem from "./CartItem"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartList = ({ products }) => {
    const { clearProducts } = useContext(CartContext);
    return (
        <div className="cart-list">
            <button onClick={()=> clearProducts()}>LIMPIAR CARRITO</button>
            {
                products.map((item, index)=> <CartItem item={item} key={index}/>)
            }
        </div>
    )
}

export default CartList
