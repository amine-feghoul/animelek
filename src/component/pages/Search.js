import React from 'react'
import { useParams } from 'react-router-dom'
import './Search.css'
function Search(props) {
    const {name} = useParams()
    return (
        <div>
            {name}
        </div>
    )
}

export default Search
