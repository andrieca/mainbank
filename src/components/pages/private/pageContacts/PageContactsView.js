import React, { useEffect } from 'react';
import InputSearch from '../../../designComponents/InputSearch';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import add_icon from "../../../../assets/navImg/add_icon.svg";
import "./pageContacts.scss";
import { observer } from 'mobx-react';
import pageContactsStore from './PageContactsStore';
import PrimaryBtnYellow from '../../../designComponents/PrimaryBtnYellow';
import send_icon from "../../../../assets/dashbordImg/send_icon.svg";
import sendIcon from "../../../../assets/contactsImg/send_button.svg";
import requestIcon from "../../../../assets/contactsImg/Request Button.svg";
import { Link } from 'react-router-dom';
import defolte_avatar from "../../../../assets/defolte_avatar.jpg"
import { useState } from 'react';
import InputSearchContacts from '../../../designComponents/InputSearchContacts';


const PageContactsView = observer(() => {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        fetch("http://49.13.31.246:9191/users", {
            "headers": {
                "x-access-token": token
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("users", data);
                pageContactsStore.addUsers(data)
                console.log("mass", pageContactsStore.users)
            })
            .catch((error) => console.error('Помилка', error));

    }, [])

    const handleChange = (value) => {
        setSearchText(value); // Оновлення тексту пошуку при зміні значення
        console.log("searchText", searchText)
    };

    // Фільтруємо користувачів за текстом пошуку
    const filteredUsers = pageContactsStore.users.filter((user) =>
        user.username.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <div className='container'>
            <HeaderPrivate text={"Contacts"} iconEnd={<img src={add_icon} alt="pay" />}/>
            <div className='contacts-search'>
                <InputSearchContacts  value={searchText} onChange={handleChange}/>
            </div>
            <div className="list">

                {filteredUsers.map((item) => (
                    <div className="row list-transactions" key={item._id} >
                        <div className="col-auto avatar-transactions">
                            <img
                                src={item.avatar}
                                alt="avatar"
                               onError={(e) => {
                                    e.target.src = defolte_avatar;
                                }}  />
                        </div>
                        <div className="col bio-transactions">
                            <span className="username">{item.fullName}</span>
                            <span className="date">{item.username}</span>
                        </div>
                        <div className="col-2 contacts-btn">
                            <Link to={`/send_money/${item._id}`} className=''>
                                <button  ><img src={sendIcon} alt='pay' /></button>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to={`/request_money/${item._id}`}>
                                <button><img src={requestIcon} alt='pay' /></button>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
})


export default PageContactsView;