import React from "react";

function Modal({ children, close }) {
  const handleClose = (e) => {
    if (e.target.id === "close") {
      close();
    }
  };
  
  return (
    <div className="modal" onClick={(e) => handleClose(e)} id="close">
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default Modal;
