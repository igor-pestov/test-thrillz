import React from "react";
import "./Card.scss";
import img1 from "./assets/michael_mcIntyre_the_wheel.png";
const Card = () => {
  return (
    <div className='card'>
      <div className='container'>
        <h2>Order summary </h2>
        <div className='card__row1'>
          <div className='card__row1_left'>
            <img src={img1} alt={img1}></img>
          </div>
          <div className='card__row1_right'>
            <span className='card__row1_right-name'>Michael McIntyre</span>
            <span className='card__row1_right-info'>Shout out package</span>
          </div>
        </div>
        <div className='card__row2'>
          <div className='card__row2-subtotal'>
            <span className='title'>Subtotal</span>
            <span className='price'>£25</span>
          </div>
          <div className='card__row2-delivery'>
            <span className='title'>Standard delivery</span>
            <span className='price'>FREE</span>
          </div>
          <div className='card__row2-total'>
            <span className='title'>TOTAL</span>
            <span className='price'>£20</span>
          </div>
        </div>
        <div className='card__row3'>
          <span>
            You will receive your video no later than <a href='/'>26th January 2021</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
