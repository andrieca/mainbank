import React from "react";
import { observer } from "mobx-react";
import card_2 from "../../../../assets/card/Card_02.svg";
import card_1 from "../../../../assets/card/Card_01.svg";
import card_3 from "../../../../assets/card/Card_03.svg";
import back_icon from "../../../../assets/navImg/back_icon.svg";
import HeaderPrivate from "../../partials/header/HeaderPrivate";


const PageCard = observer(() => {
    const destination = "/my_profile";

    return (
        <div>
            <HeaderPrivate text={"My Cards"} iconSt={<img src={back_icon} alt="pay" />} destination={destination} />
            <div >    
                <div className="row">
                <div className="col-2"><img src={card_1} alt="card" /></div>
                <div className="col"><img src={card_2} alt="card" /></div>
                <div className="col-2"><img src={card_3} alt="card" /></div>
            </div>
                <div>indikator</div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Cardholder Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label for="exampleInputPassword1" className="form-label">cvv\cvc</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="exampleInputPassword1" className="form-label">Exp. Date</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Save Changes</button>
                        <button>delete</button>
                    </form>
                </div>
            </div>

        </div>
    )

})

export default PageCard;