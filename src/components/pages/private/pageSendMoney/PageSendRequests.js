

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import pageContactsStore from '../pageContacts/PageContactsStore';
import PrimaryBtnYellow from '../../../designComponents/PrimaryBtnYellow';
import sendIcon from "../../../../assets/contactsImg/send_button.svg";
import { useNavigate, useParams } from "react-router-dom";
import back_icon from "../../../../assets/navImg/back_icon.svg";
import "./pageSendMoney.scss";
import pageSendMoneyStor from './PageSendMoneyStor';
import { useForm } from 'react-hook-form';
import HeaderPrivat from "../../../pages/partials/header/HeaderPrivate";
import axios from "axios"
import InputSearch from '../../../designComponents/InputSearch';
import ModalMoney from '../../partials/modalMoney/ModalMoney';
import { useLocation } from 'react-router-dom';
import pageSendRequestsStor from './PageSendRequestsStor';

const PageSendRequests = observer((props) => {
    const location = useLocation();
    const resivetData = location.state;
    console.log("resivetData", resivetData);
    const { handleSubmit, reset, register, setValue } = useForm();
    const destination = "/dashbord";

    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#F8BB18",
        padding: "13px",
        // marginTop: '5px',
        color: "#1A1A1A",
        textTransform: 'none',
        textAlign: "center",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "21px",
        width: "100%",
    }


    useEffect(() => {
        pageSendRequestsStor.setUserName(resivetData.userName);
        pageSendRequestsStor.setUserAvatar(resivetData.userAvatar);
        pageSendRequestsStor.setAmount(resivetData.amount)
    })

    useEffect(() => {
        setValue('amount', resivetData.amount);
    }, [setValue, resivetData.amount]);

    const onSubmit = (data) => {
        const requestData = pageSendRequestsStor.getDataForRequest();
        console.log("requestDATA", requestData);
        if (!requestData) {
            console.error("User data not found");
            return;
        }


        const token = localStorage.getItem("jwt");

        axios.post("http://49.13.31.246:9191/transaction", requestData, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            }
        })

            .then((response) => {
                console.log("Response data:", response.data);
                reset();
            })
            .catch((error) => {
                console.error('There was a problem with the axios operation:', error);
                alert('Помилка аутентифікації: ' + error.message);
            });

    };
    // const handleChange = (value) => {
    //     setSearchText(value); // Оновлення тексту пошуку при зміні значення
    // };

    return (
        <div className='container'>
            <HeaderPrivat text={"Send Money"} iconSt={<img src={back_icon} alt="pay" />} destination={destination} />

            <div className="listSendMoney">
                <div className="row list-transactions" key={resivetData.tradingCode}>
                    <div className="col-auto avatar-transactions" id='send_avatarImg'>
                        <img id='send_avatar' src={resivetData.userAvatar} alt="avatar" />
                    </div>
                    <div className="col bio-transactions">
                        <span className="date" id='send-username'>{resivetData.userName}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label label">Payment Amount</label>
                        <input
                            type="number"
                            className="form-control input-colorS"
                            id="exampleFormControlInput1"
                            {...register("amount")}
                            defaultValue={resivetData.amount}
                            placeholder="Amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label label">Payment Note</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            {...register("trDate")}
                            onChange={(e) => pageSendRequestsStor.setTrDate(e.target.value)}
                            placeholder="Date"
                            rows="3"></textarea>
                    </div>
                    <footer className="footer-form">
                        <ModalMoney
                            style={styleBtn}
                            text="Send Payment"
                            textP="The amount has been requested successfully!"
                            iconM={<img src={sendIcon} alt='pay' />}
                            type="submit"
                        />
                    </footer>
                </form>
            </div>
        </div>
    );
});

export default PageSendRequests;