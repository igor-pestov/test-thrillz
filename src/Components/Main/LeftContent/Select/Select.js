import React from "react";
import "./Select.scss";
const Select = ({ onChange, id, required, select }) => {
  return (
    <div style={{ marginTop: "0.5rem" }} className='select'>
      <label className='select' for='slct'>
        <select value={select} onChange={onChange} id={id} required={required}>
          <option value='0' disabled='disabled' selected='selected'>
            Please select
          </option>
          <option value='Google'>Google</option>
          <option value='YouTube'>YouTube</option>
          <option value='Facebook'>Facebook</option>
        </select>
        <svg>
          <use xlinkHref='#select-arrow-down'></use>
        </svg>
      </label>
      <svg className='sprites'>
        <symbol id='select-arrow-down' viewBox='0 0 10 6'>
          <polyline points='1 1 5 5 9 1'></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default Select;
