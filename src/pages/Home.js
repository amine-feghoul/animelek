import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import Episodes from '../component/Episodes'
import './Home.css'
function Home(props) {
    const [episodes,setEpisodes]=useState([])
    useEffect(() => {
        // Axios.get('http://localhost:5000/').then((rslt)=>{
        //     console.log(rslt)
        //     setEpisodes(rslt.data)
        // })

    }, [])
    return (
        <div className="Home-container">
            <h1 className ="page-header"> <span>جديد</span> انمي لك</h1>
            <Episodes episodes={episodes}/>
        </div>
    )
}

export default Home
