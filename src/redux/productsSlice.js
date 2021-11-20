import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "user",
    initialState: {
        "Products": [{}]
    },
    reducers: {
        loadProducts: (state, action) => {
            state.Products =  action.payload.map((item) => item = { ...item, isAdd: false })
        },
        itWasAdd: (state, action)=>{
            state.Products = state.Products.map((item) => (action.payload.id===item.id) ? { ...item,isAdd:true} : item )
        }
    },
});
export const  { loadProducts,itWasAdd } = productsSlice.actions
export default productsSlice.reducer;