import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import profileStore from "./ProfileStore";
import React, { useEffect } from "react";
import "./profile.scss";
import ModalProfileView from "../../partials/modal/ModalProfileView";
import NavBtn from "../../../designComponents/NavBtn";
import HeaderPrivate from "../../partials/header/HeaderPrivate";




const Profile = observer(() => {

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    fetch("http://49.13.31.246:9191/me", {
      "headers": {
        "x-access-token": token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("myData", data);
        profileStore.setProfile(data);
        localStorage.setItem("my_id", JSON.stringify(data._id))
      })

  }, []);

  return (
    <div className="page-profile">
      <div className="row page-profile-header">
        <div className="col-2"></div>
        <div className="col tittel">My Profile</div>
        <div className="col-2 btn"><ModalProfileView /></div>
      </div>
      <div className="page-profile-main">
        <div className="box-avatar"><img className="avatar" src={profileStore.avatar} alt="profile" /></div>
        <div className="full-name">{profileStore.fullName}</div>
      </div>
    </div>



  )
})
export default Profile;