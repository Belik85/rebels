import React from 'react';
import './Select.css'

const Select = (props: any) => {
    return <div className="selectContainer">
        <select value={props.region} onChange={(e) => {
            props.setValue(e.target.value)
        }}>
            <option value={''}>Filter by Region</option>
            <option value={"Africa"}>Africa</option>
            <option value={"Americas"}>Americas</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
        </select>
    </div>
}

export default Select;