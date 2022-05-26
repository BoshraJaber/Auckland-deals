import './EmailForm.css';
import { ReactComponent as Mail } from '../assets/mail.svg';


export default function EmailForm() {
    return (
        <section className="mail-container">
            <div className="cta-sub">
                <div className="cta-sub__message">Get the best deals delivered direct to your inbox each day</div>
                <form className="email-subscription email-subscription__form" method="post" action="https://www.grabone.co.nz/register?success_url=https%3A%2F%2Fwww.grabone.co.nz%2Fmy-stuff%2Fmy-subscriptions">
                    <div className="email-subscription__input-container">

                        <Mail className="email-subscription__icon"/>

                        <input name="register_email" type="email" value="" placeholder="Enter email address" className="email-subscription__input" />
                    </div>
                    <button type="submit" value="Sign Up" className="email-subscription__button oldbtn">Subscribe</button>
                </form>

            </div>
        </section>
    )
}