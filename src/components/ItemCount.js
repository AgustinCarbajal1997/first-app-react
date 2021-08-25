import { useState } from "react"

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
        <div className="div-button">
            <button className="button-counter" onClick={onSubtractHandler}>-</button>
            <h2>{counter}</h2>
            <button className="button-counter" onClick={onAddHandler}>+</button>
        </div>
    )
}

export default ItemCountContainer
