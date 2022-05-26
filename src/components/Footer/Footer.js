import './Footer.css';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Youtube } from '../assets/youtube.svg';
import { ReactComponent as Phone } from '../assets/smartphone.svg';


export default function Form() {
    return (
        <>
            <section className="main-footer">
                <div className="main-footer__columns">
                    <nav className="main-footer__col">
                        <h4 className="main-footer__heading">Follow us on</h4>
                        <div className="main-footer__social-icons-container">
                            <a href="https://www.facebook.com/GrabOne" target="_blank" rel="noopener">
                                {/* <svg className="main-footer__social-icon"><use xlink:href="#facebook-with-circle"></use></svg> */}
                                <Facebook className="main-footer__social-icon"/>
                            </a>
                            <a href="https://twitter.com/grab_one" target="_blank" rel="noopener">
                                {/* <svg className="main-footer__social-icon"><use xlink:href="#twitter-with-circle"></use></svg> */}
                                <Twitter className="main-footer__social-icon"/>
                            </a>
                            <a href="https://www.instagram.com/grabone_nz/" target="_blank" rel="noopener">
                                {/* <svg className="main-footer__social-icon"><use xlink:href="#instagram-with-circle"></use></svg> */}
                                <Instagram className="main-footer__social-icon"/>
                            </a>
                            <a href="https://www.youtube.com/grabonenz" target="_blank" rel="noopener">
                                {/* <svg className="main-footer__social-icon"><use xlink:href="#youtube-with-circle"></use></svg> */}
                                <Youtube className="main-footer__social-icon"/>
                            </a>
                        </div>
                        <h4 className="main-footer__heading">Get app exclusive deals</h4>
                        <a href="/mobile" className="main-footer__button">
                            {/* <svg className="main-footer__button-icon"><use xlink:href="#feather-smartphone"></use></svg> */}
                            <Phone className="main-footer__button-icon"/>
                            Download our App</a>
                    </nav>

                    <nav className="main-footer__col">
                        <h4 className="main-footer__heading">GrabOne</h4>

                        <a className="main-footer__link footer-link-desktop" href="https://www.grabone.co.nz/contact-us" >Contact Us</a>

                        <a className="main-footer__link " href="/about" >About Us</a>

                        <a className="main-footer__link " href="/terms-and-conditions" >Terms &amp; Returns</a>

                        <a className="main-footer__link " href="http://newblog.grabone.co.nz" target="_blank">Blog</a>

                        <a className="main-footer__link " href="/gift-card" >Gift Cards</a>

                    </nav>

                    <nav className="main-footer__col">
                        <h4 className="main-footer__heading">My Account</h4>

                        <a className="main-footer__link footer-link-desktop" href="https://www.grabone.co.nz/my-stuff/my-account" >My Account</a>


                        <a className="main-footer__link footer-link-mobile" href="http://mobile.grabone.co.nz/view-cart" >My Cart</a>

                        <a className="main-footer__link footer-link-desktop" href="https://www.grabone.co.nz/my-stuff/my-deals" >My Coupons</a>


                        <a className="main-footer__link " href="/faq" >FAQ</a>

                    </nav>

                    <nav className="main-footer__col">
                        <h4 className="main-footer__heading">Merchants</h4>

                        <a className="main-footer__link " href="/run-a-deal" >Run a Deal</a>

                        <a className="main-footer__link " href="https://grabonemerchant.co.nz" >Merchant Centre</a>

                    </nav>

                    <div className="main-footer__col main-footer__subscribe">
                        <h4 className="main-footer__heading">Newsletter Signup</h4>
                        <span className="main-footer__subscribe__message">Sign up for our daily emails and we'll send you all the best deals, tailored for you.</span>
                        <form className="email-subscription email-subscription__form" method="post" action="https://www.grabone.co.nz/register?success_url=https%3A%2F%2Fwww.grabone.co.nz%2Fmy-stuff%2Fmy-subscriptions">
                            <div className="email-subscription__input-container">
                                {/* <svg className="email-subscription__icon"><use xlink:href="#feather-mail"></use></svg> */}
                                <input name="register_email" type="email" value="" placeholder="Enter email address" className="email-subscription__input"/>
                            </div>
                            <button type="submit" value="Sign Up" className="email-subscription__button oldbtn">Subscribe</button>
                        </form>

                    </div>
                </div>
                <div className="main-footer__copyright">
                    <a href="/privacy-policy" className="main-footer__copyright-content">Privacy Policy</a>
                    <span className="main-footer__copyright-content">&copy; 2022 GrabOne Limited</span>
                </div>
            </section>
        </>
    )
}



