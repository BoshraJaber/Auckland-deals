import "./Card.css";
import { ReactComponent as Plus } from '../assets/plus-circle.svg';


export default function Card() {
    return (
        <>
            
            <div className="image-container2">
                <img alt="Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa &amp; Fitness Centre, Parking &amp; Late Checkout - Options to Stay in the Pinnacle Tower &amp; Up to 3 Nights with $150 Credit"

                    src="//main-cdn.grabone.co.nz/goimage/495x343/66881e3937f955ca34d7304de9c7301d3ac7bb03.jpg" />
                <div class="top-right2"><Plus /></div>
                <p className="centered2">
                    Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa &amp; Fitness Centre, Parking &amp; Late Checkout - Options to Stay in the...
                </p>

                <section className="listing-details2">
                    <header className="listing-details-header2">
                        <h3>
                            Luxury 5-Star Auckland Stay at Cordis
                        </h3>
                        <p className="listing-vendor2">

                            <span className="listing-vendor-display-name2">Cordis</span><br />

                            <span className="listing-location2">Auckland</span>
                        </p>
                    </header>
                    <div className="listing-purchase-count2">
                        323 bought
                    </div>


                    <div className="listing-price-container2">

                        <span className="listing-price-from2">from</span>

                        <div className="listing-price-current2">


                            <span className="listing-price-value2">$580</span>

                            $279

                        </div>

                        <span className="listing-price-per-item2">

                        </span>
                    </div>

                </section>
            </div>


        </>
    )
}