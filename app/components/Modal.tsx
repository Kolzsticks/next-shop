'use client'
interface ModalProps {
    handleClicks: () => void;
}

const Modal: React.FC<ModalProps> = ({handleClicks}) => {
  return (
    <div onClick={handleClicks } className="custom-modal">
      
    </div>
  );
};

export default Modal;
