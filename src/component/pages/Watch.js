import React from 'react'
import { useParams } from 'react-router-dom';
import './Watch.css'
function Watch(props) {
    const { id } = useParams();
    return (
        <div className="watch-container">
            <h1> {props.data.title} </h1>
            <h1> {id} </h1>
            <video className="video-player" controls>
                <source src="movie.mp4" type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"></source>  
                
            </video>
        </div>
    )
}

export default Watch
