import React, { useEffect, useState } from 'react';
import ModalProfileStor from './ModalProfileStor';
import edit_icon from "../../../../assets/navImg/edit_icon.svg";
import profileStore from '../../private/profile/ProfileStore';

const ModalProfileView = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    bio: '',
    username: '',
    avatar: ''
  });

  const [editedData, setEditedData] = useState({ ...userData });

  useEffect(() => {
    setUserData({
      fullName: profileStore.fullName || '',
      bio: profileStore.bio || 'This is an example bio.',
      username: profileStore.username || '',
      avatar: profileStore.avatar || ''
    });
  }, [profileStore]);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleProfileEdit = (editedData) => {
    const token = localStorage.getItem("jwt")
    // Відправка відредагованих даних на сервер
    fetch("http://49.13.31.246:9191/me", {
      method: "PUT",
      headers: {
          "x-access-token": token,
          "content-type": "application/json",
      },
      body: JSON.stringify(editedData)
  })
      .then(respons => {
          return respons.json()
      })
    console.log('Edited data:', editedData);
    // Оновлення локального стану
    setEditedData({ ...editedData });
   
  };

  return (
    <div>
      <button onClick={handleEditClick}>{<img src={edit_icon} alt='pay'/>}</button>

      <ModalProfileStor
        show={showEditModal}
        handleClose={handleCloseEditModal}
        userData={userData}
        onSubmit={handleProfileEdit}
      />
      
      {/* Інші елементи вашого компоненту */}
    </div>
  );
};

export default ModalProfileView;