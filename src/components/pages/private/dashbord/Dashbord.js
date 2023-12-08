
import '../dashbord/dashbord.scss';
import notifications_icon from "../../../../assets/dashbordImg/notifications _icon.svg";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import profileStore from "../profile/ProfileStore";
import React, { useEffect, useState } from "react";
import Transactions from '../transactions/Transactions';
import { Badge } from '@mui/material';
import defolte_avatar from "../../../../assets/defolte_avatar.jpg"





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

    const deleteNotifications = () => {
        const token = localStorage.getItem("jwt");
        fetch("http://49.13.31.246:9191/notifications", {
            "headers": {
                "x-access-token": token
            },
            "body": null,
            "method": "DELETE",
        });
    }


    return (
        <div >
            <div className='dashbord-profile'>
                <div className='dashbord-profile-container'>
                    <div className='dashbord'>
                        <h3>Dashbord</h3>
                        <img src={profileStore.avatar} alt='avatar' onError={(e) => {
                            e.target.src = defolte_avatar;
                        }} />

                    </div>
                    <div className='bio'>
                        <h4>Hi, {profileStore.fullName}!</h4>
                        <h3>Total Balance</h3>
                    </div>
                    <div className='dashbord-balance'>
                        <h1>${profileStore.balance}</h1>
                        <Link to="/requests"><button onClick={deleteNotifications}>
                            <Badge badgeContent={profileStore.notifications.length} classes={{ badge: 'custom-badge' }} color="secondary">
                                <img src={notifications_icon} alt='icon' />
                            </Badge>
                        </button></Link>

                    </div>
                </div>
            </div>

            <div className='box-transaction'>
                <Transactions transactions={profileStore.transactions} />
            </div>

        </div>
    );
})

export default Dashbord;

