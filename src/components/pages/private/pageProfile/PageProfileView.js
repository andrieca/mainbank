import React from 'react';
import ModalProfileView from '../../partials/modal/ModalProfileView';
import Profile from '../profile/Profile';
import "./pageProfile.scss";
import profile_icon from "../../../../assets/profileImg/profile_icon.svg";
import card_icon from "../../../../assets/profileImg/card_icon.svg";
import settings_icon from "../../../../assets/profileImg/settings_icon.svg";
import help_icon from "../../../../assets/profileImg/help_icon.svg";
import arrow_icon from "../../../../assets/profileImg/arrow_icon.svg";

function PageProfileView(props) {
    return (
        <div>
            <Profile/>
            <div className='container'>
                <div className='row profile-main'>
                    <div className='col-2'><img src={profile_icon} alt='pay'/></div>
                    <div className='col'>My Info</div>
                    <div className='col-2'><img src={arrow_icon} alt='pay'/></div>
                </div>
                <div className='row profile-main'>
                    <div className='col-2'><img src={card_icon} alt='pay'/></div>
                    <div className='col'>My Cards</div>
                    <div className='col-2'><img src={arrow_icon} alt='pay'/></div>
                </div>
                <div className='row profile-main'>
                    <div className='col-2'><img src={settings_icon} alt='pay'/></div>
                    <div className='col'>Settings</div>
                    <div className='col-2'><img src={arrow_icon} alt='pay'/></div>
                </div>
                <div className='row profile-main'>
                    <div className='col-2'><img src={help_icon} alt='pay'/></div>
                    <div className='col'>Help Center</div>
                    <div className='col-2'><img src={arrow_icon} alt='pay'/></div>
                </div>
            </div>
        </div>
    );
}

export default PageProfileView;