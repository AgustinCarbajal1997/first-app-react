import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgMenuGridR } from 'react-icons/cg';
import SearchInput from "./SearchInput";

const NavBar = ({ menuList }) => {
    const [productsCart, setProductsCart] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)
    const { products } = useContext(CartContext);
    useEffect(() => {
        if(products.length === 0) return;
        setProductsCart(products.map(item => item.quantity).reduce((a, b)=> a + b))
    }, [products])
    return (
        <header className="header">
            
                <div className="logo">
                    <h1>TECH MARKET</h1>
                </div>
                <SearchInput/>
                <div className="icon-cart">
                    <Link to="/cart"><RiShoppingCartLine color="#b99768" size="2rem"/>{productsCart ? <h3>{productsCart}</h3> : null}</Link>
                </div>
            
            <nav 
                className={`nav ${openMenu && "isActive-menu"}`}
                >
                <ul className="menu">
                    {menuList.map((item, index) => (
                        <li 
                            className="menu__item" 
                            key={index}
                            onClick={()=>setOpenMenu(false)}    
                        >
                                <Link to={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div 
                className="deploy-menu-icon"
                onClick={()=> setOpenMenu(openMenu ? false : true)}
            >
                <CgMenuGridR size="2.5rem" color="#b99768"/>
            </div>
        </header>
    )
}

export default NavBar
