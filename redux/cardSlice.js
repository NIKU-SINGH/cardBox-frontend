import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers :{
      addItems: (state,action) => {
        console.log("called from reducer",action.payload)
        state.data.push = action.payload
      },
      deleteItems: (state,action) => {
        const {id} = action.payload
        const existingData = state.data.find(card => card.id === id)
        
      },
      updateItems: (state,action) => {
        const {id,title,type,link} = action.payload
        const existingData = state.data.find(card => card.id === id)
        if(existingData) {
          existingData.title = title,
          existingData.type = type,
          existingData.link = link
        }
      }
    }
})

export const { addItems, deleteItems, updateItems} = cardSlice.actions

export default cardSlice.reducer