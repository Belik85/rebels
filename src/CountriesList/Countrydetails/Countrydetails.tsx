import React, {useEffect, useState} from 'react';
import './Countrydetails.css'
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import {countryApi} from "../../api/country";


const Countrydetails = (props: any) => {
    const {country} = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState<any>(null)
    let [languages, setLanguages] = useState<any>([])
    let [currency, setCurrency] = useState<any>({})
    const [bor, setBor] = useState<any>([])


    useEffect(() => {
        countryApi.get(`name/${country?.toLowerCase()}`).then(({data}) => {setData(data[0])

            const currency = data[0].currencies
            // console.log(currency)
            const currencyLogo = Object.keys(currency)[0]
            // console.log(currency[currencyLogo])
            setCurrency(currency[currencyLogo])


            const jsonStr = JSON.stringify(data[0].languages)
            // console.log(jsonStr)
            const obj = JSON.parse(jsonStr)
            // console.log('obj ', obj)
            setLanguages(Object.values(obj))
            // console.log('1: ',Object.values(obj))



            const bor = data[0].borders
            setBor(bor)
            console.log('111111111111111111',bor)



            // console.log(data[0])



            // let languages = []
            // for (let key in data[0].languages) {
            //     languages.push(data[0].languages[key])
            // }
            // console.log(languages)
            //
            // setLanguages(languages)





            // const curStr = JSON.stringify(data[0].currencies)
            // console.log('1',curStr)
            // const curObj = JSON.parse(curStr)
            // console.log('objttttttttttttttt ', curObj)
            // for (const [key, value] of Object.entries(curObj)) {
            //     console.log(`${key}: ${value}`);
            // }
            // setCurrencies(Object.values(curObj))

        })

    }, [bor])


    // {const currencies = data.currencies}
    // setData(data[0])

    // useEffect(() => {
    //     // countryApi.get(`name/${country?.toLowerCase()}`).then(({data}) => console.log(data[0]))
    // })

    // console.log(1)
    // console.log(data)
    // console.log(data.length)
    // const currencies = data.currencies


    return <div>
        <button onClick={(e) => {
            navigate(-1)
        }}>Back
        </button>
        {data && <>
            <div>{country}</div>
            <div><img src={data.flags.png}/></div>
            <div>Region: {data.region}</div>
            <div>Population: {data.population}</div>
            <div>Capital: {data.capital}</div>
            <div>Sub Region: {data.subregion}</div>
            <div>Currency: {currency.name}, {currency.symbol}</div>
            <div>Languages:{languages.length && languages.map((l: string, i: number) => <span
                key={i}> {l},</span>)}</div>


            <div>Border Contries: {bor?.map((b: any, i: number) => <span
                key={i}> {b},</span>)}</div>

            {/*<div>Currencies:{currencies.length && currencies.map((c:any) => <span > {c}</span>)}</div>*/}

            {/*{data.map((currencies:any) => {return {data.currencies}})}*/}
            {/*<div>{data.languages.map((value:any)=> <div>{value.}</div>)}</div>*/}
            {/*<div>{data.languages}</div>*/}
        </>
        }
    </div>
}

export default Countrydetails;