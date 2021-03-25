import React from 'react'
import './CheckBox.scss'
const CheckBox = ({style,onClick, text,checkbox}) => {
    return (
        <div style={style} onClick={onClick} className='checkbox'>
            <i className={!checkbox?'active':''}></i>
            <span>{text}</span>
          </div>
    )
}

export default CheckBox
