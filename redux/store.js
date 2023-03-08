import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cardSlice'

const store = configureStore({
    reducer: {
        card:cardReducer
    }
})

module.exports = store