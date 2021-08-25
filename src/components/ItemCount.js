const ItemCount = ({ counter, onSubtractHandler, onAddHandler }) => {
    return (
        <div>
            <button className="button-counter" onClick={onSubtractHandler}>-</button>
            <h2>{counter}</h2>
            <button className="button-counter" onClick={onAddHandler}>+</button>
        </div>
    )
}

export default ItemCount