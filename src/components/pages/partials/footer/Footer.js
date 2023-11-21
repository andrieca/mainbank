import home_icon from "../../../../assets/footerImg/home_icon (1).svg";
import arrows_icon from "../../../../assets/footerImg/arrows_icon (1).svg";
import contacts_icon from "../../../../assets/footerImg/contacts_icon (1).svg";
import user_icon from "../../../../assets/footerImg/user_icon.svg";

import "./footer.scss";
import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            {/* <div className='footer-main'>  */}
                 {/* <a className="footer__link" href="!#"><HomeIcon className="footer__img footer__img-active"/>Home</a>
            <Link to="/transactions"><ImportExportIcon className="footer__img"/>Transactions</Link>
            <a href="!#"><PermIdentityIcon className="footer__img"/>Profile</a>
            <a href="!#"><CreditCardIcon className="footer__img"/>Cards</a> */}
            {/* </div> */}

            <div className='footer-main'>
                <NavLink to="/dashbord" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})} ><img className="footer-link_img" src={home_icon} alt='pay'/><p>Home</p></NavLink>
                <NavLink to="/transactions" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})}><img className="footer-link_img" src={arrows_icon} alt='pay'/><p>Transactions</p></NavLink>
                <NavLink to="/contacts" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})}><img className="footer-link_img" src={contacts_icon} alt='pay'/><p>Contacts</p></NavLink>
                <NavLink to="/my_profile" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})}><img className="footer-link_img" src={user_icon} alt='pay'/><p>Profile</p></NavLink>
            </div>
        </footer>
    );
}

export default Footer;