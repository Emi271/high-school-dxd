import React from "react";
import './style.css'
import logo from '../img/logo.png'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function Header () {
    return (
        <nav className="navbar">
    <div><Link to="/high-school-dxd"><img src={logo} alt="logo" className="logo"/></Link></div>
<ul className="first-ul">
<li><Link to="/personajes">Ver todos los personajes</Link></li>
<li><Link to="/productos">Tienda</Link></li>
<li><Link>Galería de imágenes</Link></li>
</ul>
<CartWidget/>
</nav>
    )
};
export default Header