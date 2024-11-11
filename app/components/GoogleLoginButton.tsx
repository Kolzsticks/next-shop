"use client";
import { Button } from "@/components/ui/button";
import "./GoogleLoginButton.css";
import { useState } from "react";

interface GoogleLoginButtonProps {
  text: string;
  onSubmit: () => void; // Callback to handle form submission
}

const GoogleLoginButton = ({ text, onSubmit }: GoogleLoginButtonProps) => {
  const [pending, setPending] = useState<boolean>(false);

  // Handle the button click by setting the 'pending' state to true and calling the onSubmit callback
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default form submission
    setPending(true);
    onSubmit(); // Trigger the form submission handler
  };

  return (
    <Button
      variant="outline"
      className="w-full h-12 flex items-center justify-center gap-2 focus:outline-none"
      type="button" // Change type to "button" to prevent default form submission
      disabled={pending}
      onClick={handleClick}
    >
      {pending && (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="#fe6c32"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      <svg
        id="Capa_1"
        version="1.1"
        viewBox="0 0 150 150"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        className="google-icon"
      >
        <g>
          <path
            className="st14"
            d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5C115,101.8,120,90,120,76.1L120,76.1z"
          />
          <path
            className="st15"
            d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
          />
          <path
            className="st12"
            d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
          />
          <path
            className="st13"
            d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
          />
        </g>
      </svg>
      {text}
    </Button>
  );
};

export default GoogleLoginButton;
