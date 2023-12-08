import { observer } from "mobx-react";
import transactStor from "./TransactStor";
import "./transactions.scss";
import sendIcon from "../../../../assets/dashbordImg/send_icon.svg";
import requestIcon from "../../../../assets/dashbordImg/request_icon.svg";
import PrimaryBtnYellow from "../../../designComponents/PrimaryBtnYellow";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";
import { Link } from "react-router-dom";
import defolte_avatar from "../../../../assets/defolte_avatar.jpg";


const Transactions = observer((props) => {

    return (
        <div className="container">
            <div className='send-request'>
                <div className='row'>
                    <div className='col' style={{ padding: " 0 auto" }}>
                        <Link to="/send_money">
                            <PrimaryBtnYellow text={"Send Money"} icon={<img src={sendIcon} alt='icon' />} />
                        </Link>

                    </div>
                    <div className='col'>
                        <Link to="/request_money">
                            <PrimaryBtn text={"Request"} icon={<img src={requestIcon} alt='icon' />} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='last-transactions'>
                <div>
                    <span>Last Transactions</span>
                </div>
                <div>
                    <button onClick={() => transactStor.resetFilters()}>View All</button>
                </div>

            </div>


            <div className="list">

                {props.transactions.map((item) => {
                    if (item.trType === "in" || item.trType === "out") {
                        return (

                            <div className="row list-transactions" key={item.tradingCode} >
                                <div className="col-auto avatar-transactions">
                                    <img
                                        src={item.userAvatar}
                                        alt="avatar"
                                        onError={(e) => {
                                        e.target.src = defolte_avatar;
                                        }}/>
                                </div>
                                <div className="col bio-transactions">
                                    <span className="username">{item.userName}</span>
                                    <span className="date">{item.trDate}</span>
                                </div>
                                <div className="col balans-transactions"><span>{item.trType === "in" ? "+" : "-"}</span>${item.amount}</div>

                            </div>
                        )
                    }


                })}
            </div>
        </div>

    )


});

export default Transactions;