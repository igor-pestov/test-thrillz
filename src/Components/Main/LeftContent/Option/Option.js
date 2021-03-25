import React from 'react'
import './Option.scss'
const Option = ({onClick,price, name, time,choose}) => {
    return (
        <div className='option'>
            <i onClick={onClick} className='check' >
                {choose&& <i className="active"></i>}
               
            </i>
            <span className='option__price'>{price}</span>
            <div className='option__name'>
                <span className='option__name_title'>{name}</span>
                <span className='option__name_time'>{time}</span>
            </div>
        </div>
    )
}

export default Option
