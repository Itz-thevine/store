import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity: '',
        total: '',
        price: [],
    },
    reducers:{
        addProducts: (state, action) => {
           state.products.push(action.payload)
           state.price.push(action.payload.price)
           
        },
        increQuantity: (state, action)=>{
            state.quantity = action.payload.quantity;
            state.total = action.payload.total
        }
    }
})

export const {addProducts, increQuantity} = productSlice.actions;
export default productSlice.reducer