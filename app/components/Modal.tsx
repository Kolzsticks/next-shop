import React from 'react';

interface ModalProps {
  handleClicks: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleClicks }) => {
  const handleClickWithOverflow = () => {
    // Toggle overflow hidden on body when the modal is opened or closed
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = ''; // Reset overflow
    } else {
      document.body.style.overflow = 'hidden'; // Set overflow hidden
    }

    // Call the passed handleClicks function
    handleClicks();
  };

  return (
    <div onClick={handleClickWithOverflow} className="custom-modal">
      {/* Modal content goes here */}
    </div>
  );
};

export default Modal;
