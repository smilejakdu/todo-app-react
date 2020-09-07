import React from "react";
import { ModalBody, ModalOverlay, ModalButtonWrap } from "./Modal.style";

const Modal = ({ isOpen, close, text, title }) => {
  return (
    <>
      {isOpen ? (
        <div>
          <ModalOverlay onClick={close} />
          <ModalBody>
            <p className="title">{title}</p>
            <div className="content">
              <p>{text}</p>
            </div>
            <ModalButtonWrap>
              <button onClick={close}>확인</button>
            </ModalButtonWrap>
          </ModalBody>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
