import logo from "../../../../assets/Logo.svg";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";
import "../onBoarding/onBoarding.scss";
import { Link } from "react-router-dom";

function OnBoarding() {
    return (
        <div className="boarding">
            <div className="boardP">
                <img src={logo} alt="pay" />
                <p className="p1">The Best Way to Transfer Money Safely </p>
            </div>

            <div className="boardBtn">
                <Link to="/signup"><PrimaryBtn text={"Create new account"} /></Link>

                <Link to="/signin"><PrimaryBtn text={"Already have account?"} /></Link>

            </div>


        </div>
    );
}

export default OnBoarding;