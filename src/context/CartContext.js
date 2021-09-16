import { createContext, useState } from "react";

export const CartContext = createContext()
const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (dataProduct) => {
        const isInCart = products.find(item => item.id === dataProduct.id);
        if(!isInCart){
            setProducts([...products,dataProduct]);
        }else{
            let modifyProduct = products.filter(item => item.id !== isInCart.id);
            isInCart.quantity = isInCart.quantity + dataProduct.quantity;
            modifyProduct = [...modifyProduct, isInCart]
            setProducts(modifyProduct)
        }

    }

    const removeProduct = (id) => {}

    return (
        <Provider value={{ products, addProduct, removeProduct }}>
            { children }
        </Provider>

    )

}

export default CustomProvider;