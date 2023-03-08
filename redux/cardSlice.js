import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItems: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      }
      console.log("called from reducer", action.payload)
    },
    deleteItems: (state, action) => {
      const { id } = action.payload
      state.data = state.data.filter((card) => card.id !== id);
      console.log("Reduceer delete", action.payload)
    },
    updateItems: (state, action) => {
      const { id, title, type, link } = action.payload
      const existingData = state.data.find(card => card.id === id)
      if (existingData) {
        existingData.title = title,
          existingData.type = type,
          existingData.link = link
      }
    }
  }
})

export const { addItems, deleteItems, updateItems } = cardSlice.actions

export default cardSlice.reducer