import send_illustration from "../../../../assets/modalMoney/sent_illustration.svg"
import React, {useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import request_icon from "../../../../assets/dashbordImg/request_icon.svg";
import "./ModalMoney.scss";



const ModalMoney = ({style, iconM, text, textP}) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const styleBtn = {
    borderRadius: "10px",
    backgroundColor: "#1A87DD",
    padding: "25px",
    marginTop: '5px',
    color: "#FFF",
    textTransform: 'none',
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "5px",
    width: "100%",
  }

  return (
    <div className="modal-money-btn">
      <button className="modal-money-btn"
      onClick={handleEditClick}
      style={style}
      icon={iconM}
      >{text}</button>
      {/* <Button
      onClick={handleEditClick} 
      style={style}
      icon ={iconM}>
      
       <Typography>{text}</Typography>
      </Button> */}

      {/* <ModalProfileStor
        show={showEditModal}
        handleClose={handleCloseEditModal}
        userData={userData}
        onSubmit={handleProfileEdit}
      /> */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group >
            <Form.Label><img src={send_illustration} alt="pay"/>
            <div>{textP}</div>
            </Form.Label>
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/dashbord">
        <Button variant="primary" onClick={handleCloseEditModal}>
        Ok, Thanks!
        </Button>
        </Link>
        {/* <Button variant="primary" >
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ModalMoney;