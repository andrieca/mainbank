

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import pageContactsStore from '../pageContacts/PageContactsStore';
import sendIcon from "../../../../assets/contactsImg/send_button.svg";
import { useParams } from "react-router-dom";
import back_icon from "../../../../assets/navImg/back_icon.svg";
import "./pageSendMoney.scss";
import pageSendMoneyStor from './PageSendMoneyStor';
import { useForm } from 'react-hook-form';
import HeaderPrivat from "../../../pages/partials/header/HeaderPrivate";
import axios from "axios"
import ModalMoney from '../../partials/modalMoney/ModalMoney';

const PagesendMoneyView = observer((props) => {

    const { id } = useParams();
    const { handleSubmit, reset, register } = useForm();
    const destination = "/contacts";
    const [searchText, setSearchText] = useState("");



    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#F8BB18",
        padding: "13px",
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
        pageContactsStore.users.forEach((item) => {
            if (item._id === id) {
                console.log("sendMoneyV", item)
                pageSendMoneyStor.addUserContact(item);
                pageSendMoneyStor.userId = id; // Збереження ID користувача
            }
        });
    }, [id]);

    const onSubmit = (data) => {
        pageSendMoneyStor.setTrDate(`${formattedDate}  ${hours}:${minutes}`);
        const requestData = pageSendMoneyStor.getDataForRequest();
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
                // pageSendMoneyStor.clearUserContact();
            })
            .catch((error) => {
                console.error('There was a problem with the axios operation:', error);
                alert('Помилка аутентифікації: ' + error.message);
            });

    };
    const handleChange = (value) => {
        setSearchText(value); // Оновлення тексту пошуку при зміні значення
    };

    const filteredUsers = pageContactsStore.users.filter((user) =>
        user.username.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='container'>
            <HeaderPrivat text={"Send Money"} iconSt={<img src={back_icon} alt="pay" />} destination={destination} />

            <div className="listSendMoney">
                {pageSendMoneyStor.userContact.map((item) => (
                    <div className="row list-transactions" key={item._id}>
                        <div className="col-auto avatar-transactions" id='send_avatarImg'>
                            <img id='send_avatar' src={item.avatar} alt="avatar" />
                        </div>
                        <div className="col bio-transactions">
                            <span className="username" id='send-fullname'>{item.fullName}</span>
                            <span className="date" id='send-username'>{item.username}</span>
                        </div>
                    </div>
                ))}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label label">Payment Amount</label>
                        <input
                            type="number"
                            className="form-control input-colorS"
                            id="exampleFormControlInput1"
                            {...register("amount")}
                            onChange={(e) => pageSendMoneyStor.setAmount(e.target.value)}
                            placeholder="Amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label label">Payment Note</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            {...register("trDate")}
                            defaultValue={`${formattedDate}  ${hours}:${minutes}`}
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

export default PagesendMoneyView;




