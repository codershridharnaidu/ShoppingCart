import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    tempItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
        let existingItem = state.items.find(s=>s.id==action.payload.id)
        if(existingItem){
            existingItem.quantity+=1;
        }
        else{
            state.items.push({...action.payload,quantity:1})
        }
        state.totalPrice = state.items.reduce((total,item)=>total+item.price*item.quantity,0);
        state.tempItems=[...state.items]
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer