import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

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
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="fullName"
              value={editedData.fullName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter bio"
              name="bio"
              value={editedData.bio}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter login"
              name="username"
              value={editedData.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter avatar"
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
