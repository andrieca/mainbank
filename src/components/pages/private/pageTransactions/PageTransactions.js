import React, { useEffect, useState } from 'react';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import iconSearch from "../../../../assets/navImg/search_icon.svg";
import NavBtn from "../../../designComponents/NavBtn";
import transactStor from '../transactions/TransactStor';
import "./pageTransactions.scss";
import "../transactions/transactions.scss";
import { observer } from 'mobx-react';
import axios from 'axios';
import defolte_avatar from "../../../../assets/defolte_avatar.jpg";



const PageTransactions = observer(() => {

    const [activeBtn, setActiveBtn] = useState("Incomes");

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        axios.get("http://49.13.31.246:9191/me", {
            headers: {
                "x-access-token": token
            }
        })
            .then((response) => {
                console.log("transact", response.data.transactions);
                transactStor.addTransaction(response.data.transactions);
            })
            .catch((error) => {
                console.error('Помилка', error);
            });

    }, []);

    const handleButtonClick = (text) => {
        transactStor.setViewIn(text === "Incomes");
        setActiveBtn(text)
    };

    return (
        <div className='container'>
            <HeaderPrivate text={"Transactions"} iconEnd={<img src={iconSearch} alt="pay" />} />

            <div className='transactions-buttons' >
                <div className='transactions-btn'>
                    <div className='send-request-transactions'>
                        <div className='row'>
                            <div className='col' style={{ padding: " 0 auto" }}>
                                <NavBtn
                                    onClick={handleButtonClick}
                                    text={"Incomes"}
                                    active={activeBtn === "Incomes"} />
                            </div>
                            <div className='col'>
                                <NavBtn onClick={handleButtonClick}
                                    text={"Expenses"}
                                    active={activeBtn === "Expenses"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="list">

                {transactStor.filteredTransactions.map((item) => (
                    <div className="row list-transactions" key={item._id} >
                        <div className="col-auto avatar-transactions">
                            <img src={item.userAvatar} alt="avatar" onError={(e) => {
                                e.target.src = defolte_avatar;
                            }} />
                        </div>
                        <div className="col bio-transactions">
                            <span className="username">{item.userName}</span>
                            <span className="date">{item.trDate}</span>
                        </div>
                        <div className="col balans-transactions"><span>{item.trType === "in" ? "+" : "-"}</span>${item.amount}</div>

                    </div>
                ))}
            </div>
        </div>
    );
})

export default PageTransactions;