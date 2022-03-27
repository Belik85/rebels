import React from 'react';
import './Country.css'

const Country = (props: any) => {
    return <div className={'country-container'}>
        <img className={'country-img'}/>
        <div className="country-info">
            <div className="country-title">
                {props.name}
            </div>
            <div className="country-details">
                <span>{props.official}</span>
                <span>{props.capital}</span>
            </div>
        </div>

    </div>
}

export default Country;