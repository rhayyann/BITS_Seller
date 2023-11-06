import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'
import {Container, Row} from 'reactstrap';

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
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <div className='nav_wrapper'>
                        
                        <div className="navigation">
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

                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
