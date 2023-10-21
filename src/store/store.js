import { configureStore } from '@reduxjs/toolkit'
import mainSettings from './reducers/main_settings'
export default configureStore({
  reducer: {
    mainSettings
  },
  
})