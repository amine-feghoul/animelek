import React, { useState } from 'react'
import './Modal.css'
import { Navigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
function Modal(props) {
    const [show,setShow] = useState(true)
  return (
    <div className='container' style={{display:show? 'flex':'none'}} >
    <div className='wrapper'>

      <i className='fas fa-times' id="modal-icon" onClick={()=>{
          setShow(false)
          props.closeCallback()
        }}></i>
        <div className='modal-content'>

            {props.children}
        </div>
    </div>
    </div>
  )
}

export default Modal
