import { Link } from "react-router-dom"
const NavBar = ({ menuList }) => {
    return (
        <header className="header">
            <div className="logo"><h1>TECH MARKET</h1></div>
            <nav className="nav">
                <ul className="menu">
                    {menuList.map((item, index) => (
                        <li className="menu__item" key={index}><Link to={item.href}>{item.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
