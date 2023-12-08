import home_icon from "../../../../assets/footerImg/home_icon (1).svg";
import arrows_icon from "../../../../assets/footerImg/arrows_icon (1).svg";
import contacts_icon from "../../../../assets/footerImg/contacts_icon (1).svg";
import user_icon from "../../../../assets/footerImg/user_icon.svg";

import "./footer.scss";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='footer-main'>
                            <NavLink to="/dashbord" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})} ><img className="footer-link_img" src={home_icon} alt='pay'/><p>Home</p></NavLink>
                            <NavLink to="/transactions" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})}><img className="footer-link_img" src={arrows_icon} alt='pay'/><p>Transactions</p></NavLink>
                            <NavLink to="/contacts" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})}><img className="footer-link_img" src={contacts_icon} alt='pay'/><p>Contacts</p></NavLink>
                            <NavLink to="/my_profile" className="footer-link" style={({isActive}) => ({opacity: isActive ? '1' : '0.3'})}><img className="footer-link_img" src={user_icon} alt='pay'/><p>Profile</p></NavLink>
                        </div>
                    </div>
                </div>
         
            </div>
        </footer>
    );
}

export default Footer;