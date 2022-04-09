import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './CountriesList.css'
import Country from "./Country/Country";


// type PropsType = {
//     isDark?: boolean
// }

const CountriesList = (props: any) => {
    const [filteredData, setFilteredData] = useState(props.data)

    useEffect(() => {
        if(!props.search && !props.region) {
            setFilteredData(props.data);
            return;
        }
        const dataFiltered = props.data?.filter((country:any) => {
            return props.region
                ? country.name.common.toLowerCase().includes(props.search.toLowerCase()) && country.region === props.region
                : country.name.common.toLowerCase().includes(props.search.toLowerCase())
        })
        if(dataFiltered) setFilteredData(dataFiltered)
    }, [props.search, props.data, props.region])

    // useEffect(() => {
    //     if(!props.region) {
    //         setFilteredData(props.data);
    //         return
    //     }
    //     const regionFiltered = props.data?.filter((country: any) => country.region === props.region)
    //     if(regionFiltered) {
    //         setFilteredData(regionFiltered)
    //     }
    // }, [props.region, props.data])

    return <div className={props.isDark ? 'countryDark' : 'country-list-container'}>
        {/*return <div className="country-list-container">*/}
        {filteredData?.map((country: any) => {
            return (
                <Link key={country.name.common} to={`${country.name.common} `}>
                    <Country name={country.name.common}
                             flag={country.flags.png}
                             population={country.population}
                             capital={country.capital}
                             region={country.region}/>
                </Link>
            )
        })}
    </div>
}

export default CountriesList


// key={country.name.common}