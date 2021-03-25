import React from 'react'
import './OccaisonItem.scss'
const OccaisonItem = ({onClick,text, isSelected}) => {
    return (
        <div onClick={onClick} className={isSelected ? "occaisonItem active":"occaisonItem"}>
            {text}
        </div>
    )
}

export default OccaisonItem
