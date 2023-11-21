import { observer } from "mobx-react";
import HeaderPrivate from "../../partials/header/HeaderPrivate";
import back_icon from "../../../../assets/navImg/back_icon.svg";
import PrimaryBtnYellow from "../../../designComponents/PrimaryBtnYellow";
import { Link, useNavigate } from "react-router-dom";
import profileStore from "../profile/ProfileStore";
import send_icon from "../../../../assets/contactsImg/send_button.svg"
import PageContactsView from "../pageContacts/PageContactsView";
import pageContactsStore from "../pageContacts/PageContactsStore";
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

        {/* <div className="list">

            {profileStore.transactions.map((item) => (
                <div className="row list-transactions" key={item._id} >
                    <div className="col-auto avatar-transactions">
                        <img src={item.userAvatar} alt="avatar" />
                    </div>
                    <div className="col bio-transactions">
                        <span className="username">{item.userName}</span>
                        <span className="date">{item.trDate}</span>
                    </div>
                    <div className="col balans-transactions">${item.amount}</div>

                </div>
            ))}
        </div> */}
            {/* <div className="list">

                {profileStore.transactions.map((item) => {
                    if (item.trType === "request") {
                        return (

                            <div className="row list-transactions" key={item._id} >
                                <div className="col-auto avatar-transactions">
                                    <img src={item.userAvatar} alt="avatar" />
                                </div>
                                <div className="col bio-transactions">
                                    <span className="username">{item.userName}</span>
                                    <span className="date">{item.trDate}</span>
                                </div>
                                <div className="col balans-transactions"><span>{item.trType === "in" ? "+" : "-"}</span>${item.amount}</div>

                                <div className="col-2 contacts-btn">
                                    <Link to={`/send_money/${profileStore._id}`} className=''>
                                        <button  ><img src={send_icon} alt='pay' /></button>
                                    </Link>
                                </div>

                            </div>
                        )
                    }
                })}
            </div> */}
            {/* <Link to={`/request_money/${item._id}`}>
            <PrimaryBtnYellow/>
            </Link> */}


            <div className="list">

                {profileStore.transactions.map((item) => {
                    if (item.trType === "request") {
                        // pageContactsStore.users.map((data) => {
                        //     if(item.userName === data.username) {
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
                                        <span className="date">{item.trDate}</span>
                                    </div>
                                    <div className="col-2 balans-transactions"><span>{item.trType === "in" ? "+" : "-"}</span>${item.amount}</div>
    
                                    <div className="col-2 contacts-btn">
                                        {/* <Link to={`/send_money/${profileStore._id}`} className=''> */}
                                            <button onClick={()=> handleClick(item.userName, item.userAvatar, item.amount, item.tradingCode, item.trDate)} ><img src={send_icon} alt='pay' /></button>
                                        {/* </Link> */}
                                    </div>
    
                                </div>
                                )
                        //     }
                        // })
                        // return (

                        //     <div className="row list-transactions" key={item._id} >
                        //         <div className="col-auto avatar-transactions">
                        //             <img src={item.userAvatar} alt="avatar" />
                        //         </div>
                        //         <div className="col bio-transactions">
                        //             <span className="username">{item.userName}</span>
                        //             <span className="date">{item.trDate}</span>
                        //         </div>
                        //         <div className="col balans-transactions"><span>{item.trType === "in" ? "+" : "-"}</span>${item.amount}</div>

                        //         <div className="col-2 contacts-btn">
                        //             <Link to={`/send_money/${profileStore._id}`} className=''>
                        //                 <button  ><img src={send_icon} alt='pay' /></button>
                        //             </Link>
                        //         </div>

                        //     </div>
                        // )
                    }
                })}
            </div>

        </div>
    )
})

export default PageAllRequests;


