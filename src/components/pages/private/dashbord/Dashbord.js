
import '../dashbord/dashbord.scss';
import notifications_icon from "../../../../assets/dashbordImg/notifications _icon.svg";
import profile_foto from "../../../../assets/dashbordImg/Profile Picture.jpg";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import profileStore from "../profile/ProfileStore";
import React, { useEffect } from "react";
import Transactions from '../transactions/Transactions';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import PrimaryBtnYellow from '../../../designComponents/PrimaryBtnYellow';
import sendIcon from "../../../../assets/dashbordImg/send_icon.svg";
import requestIcon from "../../../../assets/dashbordImg/request_icon.svg"




const Dashbord = observer(() => {

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        fetch("http://49.13.31.246:9191/me", {
            "headers": {
                "x-access-token": token
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("myData", data);
                profileStore.setProfile(data);
                localStorage.setItem("my_id", JSON.stringify(data._id))

            })

    }, []);


    return (
        <div className='container'>
            <div className='dashbord-profile'>
                <div className='dashbord-profile-container'>
                    <div className='dashbord'>
                        <h3>Dashbord</h3>
                        <img src={profileStore.avatar} alt='avatar' />
                        
                    </div>
                    <div className='bio'>
                        <h4>Hi, {profileStore.fullName}!</h4>
                        <h3>Total Balance</h3>
                    </div>
                    <div className='dashbord-balance'>
                        <h1>${profileStore.balance}</h1>
                        <Link to="/requests"><button><img src={notifications_icon} alt='icon' /></button></Link>
                        
                    </div>
                </div>
            </div>
            {/* <div className='send-request'>
            <div className='row'>
                <div className='col' style={{padding:" 0 auto"}}>
                <PrimaryBtnYellow text={"Send Money"} icon={<img src={sendIcon} alt='icon'/>}/>
                </div>
                <div className='col'>
                <PrimaryBtn text={"Send Money"} icon={<img src={requestIcon} alt='icon'/>}/>
                </div>
            </div>
            </div>
            <div className='last-transactions'>
                <div>
                    <span>Last Transactions</span>
                </div>
                <div>
                    <button>View All</button>
                </div>

            </div> */}
            <div className='box-transaction'>
                <Transactions transactions={profileStore.transactions}/>
            </div>

        </div>
    );
})

export default Dashbord;