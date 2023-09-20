import React from "react";
import Modal from "react-modal";
import {
  ModalTitle,
  Text,
  Link,
  ButtonContainer,
  Button,
} from "./Cookie.styled";

Modal.setAppElement("#root"); // Повідомте react-modal про DOM-елемент, в якому він повинен відображатися

const CookieModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Usage"
      style={{
        content: {
          width: "600px",
          height: "300px",
          margin: "auto",
          padding: "20px",
        },
      }}
    >
      <ModalTitle>Cookie Usage</ModalTitle>
      <Text>
        We value your privacy We use cookies to enhance your browsing
        experience, serve personalized ads or content, and analyze our traffic.
        By clicking "Accept All", you consent to our use of cookies.
        <Link href="#">Cookie Policy</Link>
      </Text>
      <ButtonContainer>
        <Button onClick={onRequestClose}>Customize</Button>
        <Button onClick={onRequestClose}>Reject All</Button>
        <Button onClick={onRequestClose}>Accept All</Button>
      </ButtonContainer>
    </Modal>
  );
};

export default CookieModal;
