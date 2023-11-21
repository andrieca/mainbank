

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import pageContactsStore from '../pageContacts/PageContactsStore';
import PrimaryBtnYellow from '../../../designComponents/PrimaryBtnYellow';
import sendIcon from "../../../../assets/contactsImg/send_button.svg";
import { useParams } from "react-router-dom";
import back_icon from "../../../../assets/navImg/back_icon.svg";

// import pageSendMoneyStor from './PageSendMoneyStor';
import { useForm } from 'react-hook-form';
import HeaderPrivat from "../../../pages/partials/header/HeaderPrivate";
import axios from "axios"
import pageRequestStor from './PageRequestStor';
import ModalMoney from "../../partials/modalMoney/ModalMoney";
import "./pageRequest.scss";

const PageRequestView = observer((props) => {
    const { id } = useParams();
    const { handleSubmit, reset, register } = useForm();
    const destination = "/contacts";


    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#1A87DD",
        padding: "13px",
        // marginTop: '5px',
        color: "#FFF",
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
                pageRequestStor.addUserContact(item);
                pageRequestStor.userId = id; // Збереження ID користувача
            }
        });
    }, [id]);

    const onSubmit = (data) => {
        const requestData = pageRequestStor.getDataForRequest();
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

    return (
        <div className='container'>
            <HeaderPrivat text={"Request Money"} iconSt={<img src={back_icon} alt="pay" />} destination={destination} />
            <div className="listSendMoney">
                {pageRequestStor.userContact.map((item) => (
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
                            className="form-control input-color"
                            id="exampleFormControlInput1"
                            {...register("amount")}
                            onChange={(e) => pageRequestStor.setAmount(e.target.value)}
                            placeholder="Amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label label">Payment Note</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            {...register("trDate")}
                            onChange={(e) => pageRequestStor.setTrDate(e.target.value)}
                            placeholder="Date"
                            rows="3"></textarea>
                    </div>
                    <footer className="footer-form container" >

                        <ModalMoney
                            style={styleBtn}
                            text="Request Payment"
                            textP="The amount has been sent successfully!"
                            iconM={<img src={sendIcon} alt='pay' />}
                            type="submit" />

                    </footer>
                </form>

            </div>
        </div>
    );
});

export default PageRequestView;