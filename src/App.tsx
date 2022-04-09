import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import SearchsetCountries from "./SearchsetCountries/SearchsetCountries";
import CountriesList from "./CountriesList/CountriesList";
import {countryApi} from "./api/country";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Countrydetails from "./CountriesList/Countrydetails/Countrydetails";


// export type PropsType = {
//     isDark?: boolean
// }


function App() {

    const [isDark,setIsDark ] = useState(false)
    const [search, setSearch] = useState<string>('')
    const [region, setRegion] = useState<string>('')

    const [data, setData] = useState<any>()
    useEffect(() => {
        countryApi.get('all').then(({data}) => setData(data))
        console.log(data)
    }, [])


    const changeMode = () => {
        setIsDark(!isDark)

    }

    // const searchByFilter = (data:any) => {
    //     setSearch(search(data?.filter((country:any)=>{
    //         return <>{country}</>
    //         // return <>{country?.name}</>
    //      })))
    // }

    //



    return (
        <div className="appContainer">
            <Navbar changeMode={changeMode} isDark={isDark}/>
                    <Routes>
                        <Route path="/" element={
                            <>
                                {/*<SearchsetCountries isDark={isDark} searchByFilter={searchByFilter}/>*/}
                                <SearchsetCountries isDark={isDark} setSearch={setSearch} search={search} region={region} setRegion={setRegion}/>
                                <CountriesList data={data} isDark={isDark} search={search} region={region} setRegion={setRegion}/>
                                {/*<CountriesList data={data} isDark={isDark}/>*/}
                            </>
                        }/>
                        <Route path="/:country" element={<Countrydetails/>}/>
                    </Routes>
        </div>

    );
}


export default App;
