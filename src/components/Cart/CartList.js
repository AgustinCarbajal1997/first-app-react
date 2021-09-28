import CartItem from "./CartItem"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartList = ({ products }) => {
    const { clearProducts } = useContext(CartContext);
    return (
        <div className="cart-list">
            <div className="cart-list-title">
                <h2>Mi carrito</h2>
                <button onClick={()=> clearProducts()}>LIMPIAR CARRITO</button>
            </div>
            {
                products.map((item, index)=> <CartItem item={item} key={index}/>)
            }
        </div>
    )
}

export default CartList
