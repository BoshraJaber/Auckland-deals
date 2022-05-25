import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { updateCity } from '../../store/reducers';
import './Banner.css';

export default function Banner() {
    const cities = ["Auckland", "Waikato", "Wellington", "Northland", "Manawatu - Wanganui", "Tauranga", "Rotorua - Taupo", "Hawkes Bay", "Christchurch", "Taranaki", "Nelson - Marlborough", "Queenstown - Wanaka", "Dunedin - Invercargill"];

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
                <Container className="d-flex">
                    <Navbar.Brand href="/">GrabOne</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title={city} id="basic-nav-dropdown">
                            {
                                cities.map(city => {
                                    return (

                                        <NavDropdown.Item onClick={() => { handleCityChange(city) }} >{city}</NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}


// <style>
//     .cart-icon-button-count {
//         background - color: #fa3e3e;
//     border-radius: 4px;
//     color: white;
//     font-size: 12px;
//     font-weight: 900;
//     position: absolute;
//     width: 18px;
//     bottom: 15px;
//     right: -7px;
// }

//     .cart-icon-button {
//         display: inline-block;
//     position: relative;
//     text-align: center;
// }
// </style>


// <nav id="banner-primary-nav">
//     <div className="banner-primary-nav__content">
//         <div id="banner-brand">
//             <a href="https://new.grabone.co.nz">
//                 <svg className="svg__global--go-logo-white">sss</svg>
//             </a>

//         </div>
//     </div>
// </nav>