import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
const NavBar = ({ menuList }) => {
    const [productsCart, setProductsCart] = useState([])
    const { products } = useContext(CartContext);
    useEffect(() => {
        if(products.length === 0) return;
        setProductsCart(products.map(item => item.quantity).reduce((a, b)=> a + b))
    }, [products])
    return (
        <header className="header">
            <div className="logo"><h1>TECH MARKET</h1></div>
            <nav className="nav">
                <ul className="menu">
                    {menuList.map((item, index) => (
                        <li className="menu__item" key={index}><Link to={item.href}>{item.name}</Link></li>
                    ))}
                    <li className="menu__item" ><Link to="/cart"><i className="fas fa-shopping-cart"></i>{productsCart}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
