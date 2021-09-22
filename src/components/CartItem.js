import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const CartItem = ({ item }) => {
    const { removeProduct } = useContext(CartContext);
    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={item.images[0]} alt={item.title}/>
            </div>
            <div className="cart-item__data">
                <h2>{item.title}</h2>
                <h3>Unidades: {item.quantity}</h3>
                <button onClick={()=> removeProduct(item.id)}>ELIMINAR</button>
            </div>

        </div>
    )
}

export default CartItem
