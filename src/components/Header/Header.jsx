import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'wishlist',
        display: 'Wishlist'
    }
]

const Header = () => {
    return (
        <nav className="navbar-section">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src='bits.svg' alt="" />
                    <a href="">BITS</a>
                </div>
                <div className="navbar-main-link">
                    <ul className="menu">
                        {
                        nav_links.map((item, index)=>(
                            <li className="nav_item" key={index}>
                                <NavLink 
                                    to={item.path}
                                    className={(navClass) =>
                                        navClass.isActive ? "nav_active": ""
                                    }
                                >
                                {item.display}
                                </NavLink>
                            </li>
                        )) 
                        }
                    </ul>
                </div>
                <div className="navbar-icons-link">
                    {/* <a href="/message"><i class='bx bx-message-minus'></i></a> */}
                    <a href="/cart"><i class='bx bx-cart' ></i></a>
                    <a href="/profile"><i class='bx bx-user'></i></a>
                </div>
                {/* <div className="burger-button">
                    <i class='bx bx-menu'></i>
                </div> */}
            </div>
        </nav>
    )
}

export default Header
