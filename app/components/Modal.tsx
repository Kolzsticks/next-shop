import React from "react";

interface ModalProps {
  handleClicks: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleClicks }) => {

  return (
    <div onClick={handleClicks} className="custom-modal">
    </div>
  );
};

export default Modal;
