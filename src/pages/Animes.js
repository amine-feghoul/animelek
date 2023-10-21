import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import Episodes from '../component/Episodes'
import {store} from '../firebase/db'
import { collection, doc, setDoc,getDocs } from "firebase/firestore"; 
import AnimeCard from '../component/AnimeCard';
// const stor = getFirestore(db)
const animeCollection = collection(store,"animes")

const DisplayAnimes = ({animes})=>
{
    return(
        animes.map((item)=>{
            return <AnimeCard {...item}/>
        })
    )

    
}

function Animes() {
    const [animes,setAnimes]=useState([])

    useEffect(() => {
        // Axios.get('http://localhost:5000/anime').then((rslt)=>{
        //     console.log(rslt)
        //     setAnimes(rslt.data)
        // })
        getDocs(collection(store, "animes")).then(
            (result)=>{
                result.forEach((doc) => {
                console.log(`${doc.id} => ${{...doc.data()}}`);
                setAnimes([...animes,{...doc.data(),id:doc.id}])
            }
        )
         }).catch((error)=>{
        console.log("error")
    });

    }, [])
    return (
        <div className="Home-container">
            <h1 className ="page-header"> أنميات مميزة </h1>
            <DisplayAnimes animes={animes}/>
        </div>
    )
}

export default Animes
