import React from 'react'
import { Link } from 'react-router-dom'
import './Cardep.css'
function AnimeCard(props) {
    return (
        <div className="card-ep-container">
            <Link to={"/anime/"+props.id}>
            <div className="card-ep-wrapper">
                <div className="ep-num-qua">
                    <span className="ep-num"> {props.year} </span>
                    <span className="ep-qua"> {props.rating} <i className='far fa-star'></i> </span>
                    </div>
                <div className="ep-image">
                    <img src={props.cover} alt="anime image" title={props.name}/>
                </div>
                <div className="ep-details">
                  
                    <h3> {props.name} </h3>    
                </div>
                <div className="ep-info">
                  
                  <div className="ep-info-year-qua"> 
                        <span className="ep-info-qua"> {props.quality} </span>
                        <i className="fas fa-thumbs-up"><span> {props.likes}</span></i>  
                        <span className="ep-info-year"> {props.year} </span>
                  </div> 
                  <div className="ep-info-cat-story">
                        
                         <p> <span> التصنيف :</span>  {props.category}  </p>
                        
                        <p><span> القصة: </span> 
                        {props.description}</p>
                  </div>
                </div>    
            </div>
            </Link>
        </div>
    )
}
export default AnimeCard
