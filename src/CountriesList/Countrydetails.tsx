import React, {useEffect} from 'react';
import './Countrydetails.css'
import {useParams} from "react-router-dom";
import {countryApi} from "../api/country";

const Countrydetails = () => {
    const {country} = useParams()

    useEffect(() => {
        countryApi.get(`name/${country?.toLowerCase()}`).then(({data}) => console.log(data[0]))
    })
    return <div >

    </div>
}

export default Countrydetails;