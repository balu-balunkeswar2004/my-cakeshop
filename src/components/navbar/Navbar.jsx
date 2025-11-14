import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar'>
            <div id='logo'>
                <Link to={"/"}><img src="../../../public/logo.jpg" alt="" style={{ width: "78px", height: "78px", borderRadius: "50%", objectFit: "cover", cursor: "pointer" }} /></Link>
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
