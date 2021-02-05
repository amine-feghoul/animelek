import React from 'react'
import Cardep from './Cardep'
import './Episodes.css'
function Episodes(props) {
  

    const displayEpisodes = ()=>{
        
        return props.episodes.map(episode => <Cardep epData={episode}/>)
    }
    return (
        <div className="episodes">
            
        {displayEpisodes()}

           
        </div>
    )
}

export default Episodes
