import React from "react";
import LeftContent from "./LeftContent/LeftContent";
import "./Main.scss";
import RightContent from "./RightContent/RightContent";
const Main = () => {
  return (
    <div className='main__wrapper'>
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Main;
