import React from "react";
import "./CheckBoxButton.scss";
const CheckBoxButton = ({ onClick, text, img, check, style }) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={!check ? "checkboxbutton" : "checkboxbutton active"}
    >
      <i>{check && <i></i>}</i>
      <div className='checkboxbutton__main'>
        {img}
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CheckBoxButton;
