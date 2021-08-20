const ListingProducts = ({ listProducts }) => {
    return (
        <section className="section-products">
            {listProducts.map(item =>(
                <div className="product-item">
                    <div className="product-item__image">
                        <img src={item.images[0]} alt={item.title}/>
                    </div>
                    <h2>{item.title}</h2>
                    <h3>$ {item.price}</h3>
                </div>
            ))}
        </section>
    )
}

export default ListingProducts
