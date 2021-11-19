import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "user",
    initialState: {
        "Products": [{
        }]
    },
    reducers: {
        LoadProducts: (state, action) => {
            state.Products=  action.payload.map((item) => item = { ...item, isAdd: false })
        },
        
    },
});
export const  { LoadProducts } = productsSlice.actions
export default productsSlice.reducer;