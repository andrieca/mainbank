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
   
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group >
            <Form.Label className="img-modal-money"><img className="img-" src={send_illustration} alt="pay"/>
            <div className="div-modal-money">{textP}</div>
            </Form.Label>
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link className="a" to="/dashbord">
        <Button className="modal-btn" variant="primary" onClick={handleCloseEditModal}>
        Ok, Thanks!
        </Button>
        </Link>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ModalMoney;