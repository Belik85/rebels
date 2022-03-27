import React from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css';
import SearchsetCountries from "./SearchsetCountries/SearchsetCountries";

function App() {
    return (
        <div className="appContainer">
            <Navbar/>
            <SearchsetCountries/>

        </div>
    );
}

export default App;
