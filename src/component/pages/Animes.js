import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import Episodes from '../Episodes'

function Animes() {
    const [animes,setAnimes]=useState([])
    useEffect(() => {
        Axios.get('http://localhost:5000/anime').then((rslt)=>{
            console.log(rslt)
            setAnimes(rslt.data)
        })

    }, [])
    return (
        <div className="Home-container">
            <h1 className ="page-header"> أنميات مميزة </h1>
            <Episodes episodes={animes}/>
        </div>
    )
}

export default Animes
