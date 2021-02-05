import React from 'react'
import { Link } from 'react-router-dom'
import './Cardep.css'
function Cardep(props) {
    return (
        <div className="card-ep-container">
            <Link to={"/watch/"+props.epData.id}>
            <div className="card-ep-wrapper">
                <div className="ep-num-qua">
                    <span className="ep-num"> {props.epData.num} </span>
                    <span className="ep-qua"> {props.epData.quality} </span>
                    </div>
                <div className="ep-image">
                    <img src={props.epData.image} alt="anime image" title={props.title}/>
                </div>
                <div className="ep-details">
                  
                    <h3> {props.epData.title} </h3>    
                </div>
                <div className="ep-info">
                  
                  <div className="ep-info-year-qua"> 
                        <span className="ep-info-qua"> {props.epData.quality} </span>
                        <i className="fas fa-thumbs-up"><span> {props.epData.likes}</span></i>  
                        <span className="ep-info-year"> {props.epData.year} </span>
                  </div> 
                  <div className="ep-info-cat-story">
                        
                         <p> <span> التصنيف :</span>  {props.epData.cat}  </p>
                        
                        <p><span> القصة: </span> 
                        {props.epData.epStory}</p>
                  </div>
                </div>    
            </div>
            </Link>
        </div>
    )
}
export default Cardep
