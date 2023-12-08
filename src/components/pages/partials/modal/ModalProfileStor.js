import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import profileStore from '../../private/profile/ProfileStore';
import "./modal.scss";

const ModalProfileStor = ({ show, handleClose, userData, onSubmit }) => {
  const [editedData, setEditedData] = useState({ ...userData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(editedData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label className='label-profile'>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder={profileStore.fullName}
              name="fullName"
              value={editedData.fullName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBio">
            <Form.Label className='label-profile'>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={profileStore.bio}
              name="bio"
              value={editedData.bio}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formLogin">
            <Form.Label className='label-profile'>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder={profileStore.username}
              name="username"
              value={editedData.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAvatar">
            <Form.Label className='label-profile'>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder={profileStore.avatar}
              name="avatar"
              value={editedData.avatar}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProfileStor;
