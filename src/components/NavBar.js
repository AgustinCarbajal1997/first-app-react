const NavBar = ({ menuList }) => {
    return (
        <header className="header">
            <div className="logo"><h1>EAGLE HOTEL</h1></div>
            <nav className="nav">
                <ul className="menu">
                    {menuList.map((item, index) => (
                        <li className="menu__item" key={index}><a href={item.href}>{item.name}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
