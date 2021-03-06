import './SideBar.css';

export default function SideBar() {
    return (
        <>

                  
                        <aside className="discover-nav" id="discover-nav">
                            <header>Discover</header>
                            <ul>
                                <li>
                                    <a href="/auckland-experience">
                                        <span >Featured Auckland deals</span>
                                        <span className="deals-amount">1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/auckland/c/our-picks">
                                        <span >Collections</span>
                                        <span>44</span>
                                    </a>
                                </li>
                                <li id="discover-escapes">
                                    <a href="/auckland-escapes">
                                        <span >Escapes</span>
                                        <span>261</span>
                                    </a>
                                </li>



                                <li id="discover-picked-for-you">
                                    <a href="/auckland/picked-for-you">
                                        <span >Picked for You</span>
                                        <span> 5038</span>
                                    </a>
                                </li>



                                <li id="discover-activities-events-outdoors">
                                    <a href="/auckland/activities-events-outdoors">
                                        <span >Activities, Events &amp; Outdoors</span>
                                        <span>455</span>
                                    </a>
                                </li>



                                <li id="discover-store">
                                    <a href="/auckland-store">
                                        <span >Store</span>
                                        <span>455</span>
                                    </a>
                                </li>



                                <li id="discover-restaurants-bars-cafes">
                                    <a href="/auckland/restaurants-bars-cafes">
                                        <span >Restaurants, Bars, Cafes</span>
                                        <span>455</span>
                                    </a>
                                </li>



                                <li id="discover-beauty-massage-spa">
                                    <a href="/auckland/beauty-massage-spa">
                                        <span >Beauty, Massage &amp; Spa</span>
                                        <span>455</span>
                                    </a>
                                </li>



                                <li id="discover-house-garden">
                                    <a href="/auckland/house-garden">
                                        <span >House &amp; Garden</span>
                                        <span>455</span>
                                    </a>
                                </li>



                                <li id="discover-fitness-sports">
                                    <a href="/auckland/fitness-sports">
                                        <span >Fitness &amp; Sports</span>
                                        <span>455</span>
                                    </a>
                                </li>



                                <li id="discover-automotive">
                                    <a href="/auckland/automotive">
                                        <span >Automotive</span>
                                        <span>455</span>
                                    </a>
                                </li>
                            </ul>
                        </aside>                
        </>
    )
}