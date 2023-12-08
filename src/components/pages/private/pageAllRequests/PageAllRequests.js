import { observer } from "mobx-react";
import HeaderPrivate from "../../partials/header/HeaderPrivate";
import back_icon from "../../../../assets/navImg/back_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import profileStore from "../profile/ProfileStore";
import send_icon from "../../../../assets/contactsImg/send_button.svg"
import defolte_avatar from "../../../../assets/defolte_avatar.jpg";


const PageAllRequests = observer((props) =>{
 
    const destination = "/dashbord"



    const navigate = useNavigate();
    const handleClick = (userName, userAvatar, amount, tradingCode) => {
      
        console.log("userName", userName, userAvatar, amount)
        const stateData = {
            userName , 
            userAvatar,
            amount,
            tradingCode,  
        }
        
        
        navigate("/send_requests_money" , {state : stateData})
    }
 


    return(
        <div className='container'>
        <HeaderPrivate text={"Requests"} iconSt={<img src={back_icon} alt="pay"/>} destination={destination}/>

        <div className='transactions-buttons' >
            <div className='transactions-btn'>
             all request
            </div>
        </div>


            <div className="list">

                {profileStore.transactions.map((item) => {
                    if (item.trType === "request") {
                       
                                return(
                                    <div className="row list-transactions" key={item._id} >
                                    <div className="col-auto avatar-transactions">
                                        <img 
                                        src={item.userAvatar} 
                                        alt="avatar" 
                                        onError={(e) => {
                                            e.target.src = defolte_avatar;
                                        }}/>
                                    </div>
                                    <div className="col-5 bio-transactions">
                                        <span className="username">{item.userName}</span>
                                        <span className="date"><span>{item.trType === "in" ? "+" : "-"}</span>${item.amount}</span>
                                    </div>
    
                                    <div className="col-4 contacts-btn">
                                            <button onClick={()=> handleClick(item.userName, item.userAvatar, item.amount, item.tradingCode, item.trDate)} ><img src={send_icon} alt='pay' /></button>
                                    </div>
    
                                </div>
                                )
                    }
                })}
            </div>

        </div>
    )
})

export default PageAllRequests;


// Событийный цикл (event loop)

// Примеры событий

// Микротаски и макротаски

// Callback

// Promise

// Async / await

// Методы массива