import React from "react";
import Styles from "./Popup.module.css"; // Import your CSS for styling the popup

const Popup = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className={Styles.popup}>
        <div className={Styles.popupContent}>
          <div className={Styles.scrollableContent}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;