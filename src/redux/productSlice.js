import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity: [],
        total: 0,
        price: [],
    },
    reducers:{
        addProducts: (state, action) => {
           state.products.push(action.payload)
           state.price.push(action.payload.price)
           state.quantity.push(action.payload.quantity)
        },
        increCart:(state, action)=>{
            for (let index = 0; index < state.quantity; index++) {
                if (state.quantity[index] === action.payload.ind) {
                  state.quantity[index] = state.quantity[index + 1];
                  break;
                }
              }
        }
    }
})

export const {addProducts} = productSlice.actions;
export default productSlice.reducer