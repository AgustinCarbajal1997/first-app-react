import { useState } from "react"
import ItemCount from "./ItemCount"
const ItemCountContainer = ({ initial, stock }) => {
    const [counter, setCounter] = useState(initial)

    const onAddHandler = () => {
        if(counter === stock) return;
        setCounter(counter + 1)
    }
    const onSubtractHandler = () => {
        if(counter === initial) return;
        setCounter(counter - 1)
    }

    return (
        <div>
            <ItemCount 
                counter={counter} 
                onAddHandler={onAddHandler} 
                onSubtractHandler={onSubtractHandler}/>
        </div>
    )
}

export default ItemCountContainer
