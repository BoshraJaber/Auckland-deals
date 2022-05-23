import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import './Banner.css'

export default function Banner() {
    const cities = ["Auckland", "Waikato", "Wellington", "Northland", "Manawatu - Wanganui", "Tauranga", "Rotorua - Taupo", "Hawkes Bay", "Christchurch", "Taranaki", "Nelson - Marlborough", "Queenstown - Wanaka", "Dunedin - Invercargill"];

    const [city, setCity] = useState("Auckland")



    // useEffect(() => {
    //     document.title = city;
    // }, []);


    function handleCityChange(cityName) {
        document.title = cityName;
        setCity(cityName);
    }
    return (
        <header id="banner" role="banner">
            {/* <div id="logo"></div>
            <div>
                <Link to="/">GrabOne</Link>
            </div> */}
            <Navbar className="Navbar" variant="dark" >
                <Container className="d-flex">
                    <Navbar.Brand href="/">GrabOne</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <svg class="primary-nav-icon primary-nav-icon--location"></svg> */}
                        {/* <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        
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