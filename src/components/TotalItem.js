import { useEffect, useState } from "react"

const TotalItem = ({ products }) => {
    const [total, setTotal] = useState(0)
    console.log(products)
    useEffect(() => {
        const total = products.map((item)=> item.quantity * item.price).reduce((a,b)=> a + b)
        
        setTotal(total);
    }, [products])
        


    return (
        <div className="cart-total-products">
            <h2>TOTAL</h2>
            <h3>${total}</h3>
            <button>Finalizar compra</button>
        </div>
    )
}

export default TotalItem
