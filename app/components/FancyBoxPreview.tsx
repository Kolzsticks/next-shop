import React from "react";


interface FancyBoxPreviewProps {
  handleClose: () => void;
  imageUrl: string;
}

const FancyBoxPreview: React.FC<FancyBoxPreviewProps> = ({ imageUrl, handleClose }) => {
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        // padding: '20px'
      }}
    >
      <div
        style={{
          position: "relative",
          // backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "100%",
          height: "100%",
          overflow: "auto",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageUrl}
          alt="Preview"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "50px",
            cursor: "pointer",
            color: 'white'
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default FancyBoxPreview;
