import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar'>
            <div id='logo'>
                <Link to={"/"} style={{textDecoration:"none",fontFamily:"sans-serif",fontSize:"x-large",fontWeight:"bold"}}>JAGAN</Link>
            </div>
            <div id='list'>
                <ul id='nav_list'>
                    <li><Link to={"/boys"} style={{textDecoration:"none"}}>cake list</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
