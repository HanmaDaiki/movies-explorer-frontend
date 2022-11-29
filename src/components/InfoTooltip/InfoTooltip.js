import React from "react";
import './InfoTooltip.css';

function InfoTooltip({ closePopup, text }) {
  return (
    <div className={`tooltip tooltip_active`}>
      <div className="tooltip__overlay" onClick={closePopup}></div>
      <div className="tooltip__container">
        <button
          onClick={closePopup}
          className="tooltip__close"
          type="button"
        ></button> 
        <span className="tooltip__title">
          { text }
        </span>
      </div>
    </div>
  );
}

export default InfoTooltip;
