import React from "react";
import accept from "../../images/accept.png"
import './InfoTooltip.css';

function InfoTooltip({ closePopup }) {
  return (
    <div className={`tooltip tooltip_active`}>
      <div className="tooltip__overlay" onClick={closePopup}></div>
      <div className="tooltip__container">
        <button
          onClick={closePopup}
          className="tooltip__close"
          type="button"
        ></button> 
        <img
          className="tooltip__image"
          src={accept}
          alt="Картинка успешной смены данных пользователя"
        />
        <span className="tooltip__title">
          Данные пользователя успешно изменены!
        </span>
      </div>
    </div>
  );
}

export default InfoTooltip;
