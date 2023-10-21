import { createReducer } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
const main_setting = {
    user:null,
    anime:"",
    ep:null,
}

const mainSettings = (state=main_setting,action) => {
  
    switch(action.type)
    {
        case 'UPDATE_SETTINGS':
            state = {...state,...action.payload}
            break
        default:
            state = state
            break
    }
    return state

  }

  export default mainSettings