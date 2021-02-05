import React from 'react'
import Episodes from '../Episodes'
import './NewEps.css'
function NewEps(props) {
    const episodes = [
        {
            image: "https://fr.web.img5.acsta.net/pictures/19/08/09/14/53/1842996.jpg",
            title: " 1 ون بيس الحلقة  one piece  "
        },
        {
            image: "https://fr.web.img5.acsta.net/pictures/19/08/09/14/53/1842996.jpg",
            title: " 1 ون بيس الحلقة  one piece  "
        },
      
    ]
    return (
        <div className="neweps-container">
            <h1><span> أحدث حلقات الانمي</span></h1>
            <Episodes episodes={episodes} epCallback={props.handelEpData}/>
        </div>
    )
}

export default NewEps
