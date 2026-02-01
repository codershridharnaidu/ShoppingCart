import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("products/fetchData",async () => {
    let res=await axios.get("https://fakestoreapi.com/products")
    console.log(res.data)
    return res.data
  })

  export const productSlice=createSlice({
    name:"products",
    initialState:{
      items:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.items=action.payload;
        })
    }
    })

    export default productSlice.reducer;