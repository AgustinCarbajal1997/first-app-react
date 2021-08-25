import ItemCountContainer from "./ItemCountContainer"

const ProductsItem = ({ listProducts }) => {
    return (
        
            <section className="section-products">
            {listProducts.map((item, index) =>(
                <div className="product-item" key={index}>
                    <div className="product-item__image">
                        <img src={item.images[0]} alt={item.title}/>
                    </div>
                    <h2>{item.title}</h2>
                    <h3>$ {item.price}</h3>
                    <div>
                        <ItemCountContainer initial={0} stock={parseInt(item.unites)} />
                    </div>
                </div>
            ))}
        </section>
        
    )
}

export default ProductsItem
