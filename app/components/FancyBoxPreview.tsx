import React from "react";
import Image from "next/image";
import "../css/fancy-preview.css";

interface FancyBoxPreviewProps {
  handleClose: () => void;
  imageUrl: string;
}

const FancyBoxPreview: React.FC<FancyBoxPreviewProps> = ({
  imageUrl,
  handleClose,
}) => {
  return (
    <div className="fancyBoxOverlay">
      <div className="fancyBoxContainer">
        <div className="imageWrapper">
          <Image
            src={imageUrl}
            alt="Preview"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
            width={300}
            height={300}
          />
        </div>

        <button onClick={handleClose} className="closeButton">
          &times;
        </button>
      </div>
    </div>
  );
};

export default FancyBoxPreview;
