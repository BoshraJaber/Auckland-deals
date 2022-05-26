import './LargeCard.css';
import { ReactComponent as Plus } from '../assets/plus-circle.svg';


export default function LargeCard() {
    return (
        <>
            <div className="listing-image image-container">
                <img alt="Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa &amp; Fitness Centre, Parking &amp; Late Checkout - Options to Stay in the Pinnacle Tower &amp; Up to 3 Nights with $150 Credit"

                    src="//main-cdn.grabone.co.nz/goimage/495x343/66881e3937f955ca34d7304de9c7301d3ac7bb03.jpg" />
                <div class="top-right"><Plus /></div>
                <p className="centered">
                    Luxury Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa &amp; Fitness Centre, Parking &amp; Late Checkout - Options to Stay in the...
                </p>

                <section className="listing-details">
                    <header className="listing-details-header">
                        <h3>
                            Luxury 5-Star Auckland Stay at Cordis
                        </h3>
                        <p className="listing-vendor">

                            <span className="listing-vendor-display-name">Cordis</span><br />

                            <span className="listing-location">Auckland</span>
                        </p>
                    </header>
                    <div className="listing-purchase-count">
                        323 bought
                    </div>


                    <div className="listing-price-container">

                        <span className="listing-price-from">from</span>

                        <div className="listing-price-current">


                            <span className="listing-price-value">$580</span>

                            $279

                        </div>

                        <span className="listing-price-per-item">

                        </span>
                    </div>

                </section>
            </div>


        </>
    )
}