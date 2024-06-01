/* eslint-disable react/prop-types */
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Error() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div>
      <p>404 - This Is Not The Page You Are Looking For</p>
      <button
        onClick={() => {
          setIsOpen(true);
        }}>
        Show Secret Message
      </button>
      <AlertMessage
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}>
        Secret Message
        <br />
        Click To Close
      </AlertMessage>
    </div>
  );
}

function AlertMessage({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "absolute",
        top: ".5rem",
        left: "80%",
        cursor: "pointer",
        backgroundColor: "var(--text-color)",
        color: "white",
        padding: "2rem",
        borderRadius: "5px",
        zIndex: "9999",
      }}>
      {children}
    </div>,
    document.querySelector("#alert-message")
  );
}
