import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCity } from '../../store/reducers';
import './Banner.css';
import { ReactComponent as LocationIcon } from '../assets/map-pin.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';
import { ReactComponent as ShoppingCart } from '../assets/shopping-cart.svg';
import { ReactComponent as User } from '../assets/user.svg';


const style = { color: "white", paddingLeft: "5px", marginTop: "9px", fontFamily: 'Museo normal' }


export default function Banner() {
    const cities = ["Auckland", "Waikato", "Wellington", "Northland", "Manawatu - Wanganui", "Tauranga", "Rotorua - Taupo", "Hawkes Bay", "Christchurch", "Taranaki", "Nelson - Marlborough", "Queenstown - Wanaka", "Dunedin - Invercargill"];
    const userOptions = ["My Account", "Gifts", "Profile", "My Subscriptions", "My Purchases", "Logout", "Login"]
    const [city, setCity] = useState("Auckland");
    const dispatch = useDispatch();

    function handleCityChange(cityName) {
        dispatch(updateCity(cityName));
        document.title = cityName;
        setCity(cityName);

    }
    return (
        <header id="banner" role="banner">
            <Navbar className="Navbar" variant="dark" >
                <Container className="container">
                    <Navbar.Brand href="/" className="nav-brand">GrabOne  </Navbar.Brand>
                    <Nav className="me-auto">
                        <span className='droplist'>
                            <LocationIcon />
                            <NavDropdown title={city} id="basic-nav-dropdown">

                                {
                                    cities.map(city => {
                                        return (

                                            <NavDropdown.Item classNmae="black-text" onClick={() => { handleCityChange(city) }} >{city}</NavDropdown.Item>
                                        )
                                    })
                                }
                            </NavDropdown>
                        </span>
                        <span className='droplist'>
                            <HeartIcon />
                        </span>

                        <span className='droplist'>
                            <User />
                            <NavDropdown id="basic-nav-dropdown">

                                {
                                    userOptions.map(option => {
                                        return (

                                            <NavDropdown.Item classNmae="black-text">{option}</NavDropdown.Item>
                                        )
                                    })
                                }
                            </NavDropdown>
                        </span>
                        <span className='droplist'>
                            <ShoppingCart />

                        </span>
                        <span className='droplist'>

                            <Mail />
                            <p style={style}> Subscribe</p>
                        </span>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}