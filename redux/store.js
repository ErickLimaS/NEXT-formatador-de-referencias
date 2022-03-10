import {configureStore} from '@reduxjs/toolkit'
import allDataReducer from './FormContext'

export default configureStore ({
    reducer: {
        allData: allDataReducer
    }
})