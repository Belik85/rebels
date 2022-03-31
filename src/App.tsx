import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import SearchsetCountries from "./SearchsetCountries/SearchsetCountries";
import CountriesList from "./CountriesList/CountriesList";
import {countryApi} from "./api/country";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Countrydetails from "./CountriesList/Countrydetails/Countrydetails";

function App() {
    const [data, setData] = useState()

    useEffect(() => {
        countryApi.get('all').then(({data}) => setData(data))
    }, [])

    return (
        <div className="appContainer">
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <>
                        <SearchsetCountries/>
                        <CountriesList data={data}/>
                    </>
                }/>

                <Route path="/:country" element={<Countrydetails/>}/>

            </Routes>


        </div>

    );
}

export default App;
