import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cart: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

     // Add to cart logic



     addToCart: (state, action) => {
      state.cart.push(action.payload); // Add item to cart
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id); // Remove item by id
    },
    clearCart: (state) => {
      state.cart = []; // Clear all items from cart
    }
  },
})


export const { increment, decrement, incrementByAmount,reset,  addToCart, deleteFromCart,clearCart  } = counterSlice.actions

export default counterSlice.reducer