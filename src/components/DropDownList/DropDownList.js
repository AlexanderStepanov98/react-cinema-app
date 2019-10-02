import React from "react";
import styles from "./DropDownList.css";

const DropDownList = ({initialValue, items, onSelect}) => {

    const {container, content} = styles;

    return (
        <div className={container}>
            <select value={initialValue} onChange={(e) => onSelect(e.target.value)}>
                {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
};

export default DropDownList