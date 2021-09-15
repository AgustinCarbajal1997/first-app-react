import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemDetail = ({ item }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [itemCountValue, setItemCountValue] = useState(null);

    const onAdd = (itemNumber) => {
        alert(`Has agregado al carrito ${itemNumber} unidades del producto ${item.title}`);
        setItemCountValue(itemNumber);
    }

    return (
        <>
         <div className="product-view-carousel">
                <div className="product-view-carousel__bigImage">
                    <img src={item.images[currentImg]} alt={item.title}/>
                </div>
                <div className="product-view-carousel__previewPics">
                    {item.images.map((img, index)=>{
                        return(
                            <img src={img} alt={item.title} key={index} onClick={() => setCurrentImg(index)}/>
                        )
                    })}
                </div>
            </div>
            <div className="product-view-title-info">
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                { itemCountValue 
                    ? <Link to="/cart"><button>TERMINAR COMPRA</button></Link>
                    : <ItemCount initial={1} stock={parseInt(item.unites)} onAdd={onAdd}/>
                }
                
            </div>
            <div className="product-view-specifications">
                <h2>{item.title}</h2>
                <ul className="product-view-specifications__ul">
                    <h3>Especificaciones técnicas</h3>
                    {item.especifications.map((esp, index) =>{
                        return(
                            <li key={index} className="product-view-specifications__li">
                                <h3>{esp.title}</h3>
                                <h4>{esp.especifications1}</h4>
                                <h4>{esp.especifications2}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="product-view-features">
                <h3>Descripción</h3>
                <ul className="product-view-features__ul">
                        {item.description.map((desc, index)=>{
                        return(
                                <li key={index} className="product-view-features__li">
                                    <h3>{desc.title}</h3>
                                    <p>{desc.paragraph}</p>
                                </li>
                            )
                        })}
                </ul>
            </div>   
        </>
    )
}

export default ItemDetail
