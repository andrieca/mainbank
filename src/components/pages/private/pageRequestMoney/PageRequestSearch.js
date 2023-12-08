
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import pageContactsStore from '../pageContacts/PageContactsStore';
import back_icon from "../../../../assets/navImg/back_icon.svg";
import "./pageRequest.scss";

import { useForm } from 'react-hook-form';
import HeaderPrivat from "../../../pages/partials/header/HeaderPrivate";
import axios from "axios"
import InputSearch from '../../../designComponents/InputSearch';
import pageRequestStor from './PageRequestStor';
import ModalMoney from '../../partials/modalMoney/ModalMoney';
import request_icon from "../../../../assets/dashbordImg/request_icon.svg";

const PageRequestSearch = observer(() => {
    const { handleSubmit, reset, register } = useForm();
    const destination = "/dashbord";
    const [searchedUsername, setSearchedUsername] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);


    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

 
    const styleBtn = {
        borderRadius: "10px",
        backgroundColor: "#1A87DD",
        padding: "13px",
        color: "#FFF",
        textTransform: 'none',
        textAlign: "center",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "21px",
        width: "100%",
    }

    const handleSearchInputChange = (event) => {
        const newValue = event.target.value;
        setSearchedUsername(newValue);
    };

    const handleSearchUser = () => {
        // Знаходимо користувача за введеним username
        const item = pageContactsStore.users.find(item => item.username === searchedUsername);
        if (item) {
            setSelectedUser(item);
            console.log("item", item)
            pageRequestStor.addUserContact(item);
            pageRequestStor.userId = item._id;
            pageRequestStor.setTrDate(`${formattedDate}  ${hours}:${minutes}`);
            
        } else {
            console.error("User not found");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
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
            <div className='contacts-search'>
                <InputSearch users={pageContactsStore.users} onChange={handleSearchInputChange} value={searchedUsername} />
                <button className="form-label label" onClick={handleSearchUser}>Search User</button>
            </div>
            
            <div className="listRequestMoney">
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
                <form onSubmit={handleFormSubmit}>
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
                            defaultValue={`${formattedDate}  ${hours}:${minutes}`}
                            placeholder="Date"
                            rows="3"></textarea>
                    </div>
                    <footer className="footer-form">
                                <ModalMoney 
                                style={styleBtn} 
                                text="Request Payment"
                                textP="The amount has been sent successfully!" 
                                iconM={<img src={request_icon} alt='pay'/>}
                                type="submit"
                                />   
                                
                    </footer>
                </form>
            </div>
        </div>
       
    );
});

export default PageRequestSearch;