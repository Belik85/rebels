import React from 'react';
import './SearchsetCountries.css'
import Input from "./Input/Input";
import Select from "./Select/Select";

// import Input from "./Input/Input";
// import Select from "./Select/Select";

type PropsType = {
    isDark?: boolean
    search: string
    region: string
    setSearch: (search:string)=> void
    setRegion: (search:string)=> void
    // searchByFilter: (search:string) => void
}
// const SearchsetCountries: React.FC<PropsType> = ({isDark}) => {
const SearchsetCountries: React.FC<PropsType> = ({isDark, search, setSearch, region, setRegion}) => {
//     const SearchsetCountries: React.FC<PropsType> = ({isDark, searchByFilter}) => {

    // return <div className={'container'}>
        return <div className={isDark ? "searchDarkMode" : 'container'}>
        {/*<input placeholder={'Select'}></input>*/}
        {/*<select>*/}
        {/*    <option>Americas</option>*/}
        {/*    <option>Americas</option>*/}
        {/*    <option>Americas</option>*/}
        {/*    <option>Americas</option>*/}
        {/*</select>*/}
        {/*    <Input />*/}
        <Input value={search} setValue={setSearch}/>
        <Select value={region} setValue={setRegion}/>
    </div>
}

export default SearchsetCountries;