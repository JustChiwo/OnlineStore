import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: []
    },

    reducers: {
        add_to_cart: (state, action) =>{
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },

       decrease_quantity: (state, action) =>{
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        }
        if (existingItem && existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
       },

       remove_from_cart: (state, action) =>{
        state.items = state.items.filter(item => item.id !== action.payload.id)
       },

       increase_quantity: (state, action) =>{
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity += 1;
        }
       },
    },
})

export const { add_to_cart, decrease_quantity, remove_from_cart, increase_quantity } = cartSlice.actions
export default cartSlice.reducer