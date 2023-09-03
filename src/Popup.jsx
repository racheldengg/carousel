import React from "react";
import Styles from "./Popup.module.css"; // Import your CSS for styling the popup

const Popup = ({ children, isOpen, onClose }) => {
  return ( isOpen &&
    <div className={Styles.popup}>
      <div className={Styles.popupContent}>
        {children}
        <button className={Styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;