import React, {useEffect, useState} from 'react';


import './Input.css'
import {countryApi} from "../../api/country";
import axios from "axios";
import {useParams} from "react-router-dom";

const Input = (props:any) => {


    return <div className='inputContainer'>

        {/*{data?.filter((n:any) => <>{n}</>)}*/}

          <input placeholder={'Search for a country...'}

             // value={props.value} onChange={(e)=> (e.currentTarget.value)}

              value={props.value} onChange={(e)=> {props.setValue(e.currentTarget.value)}}

        />

    </div>
}

export default Input;