import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        "datos": {
            "id": 0,
            "username": "",
            "firstName": "",
            "lastName": "",
            "credit": 0,
        },
        "shoppingCart": []
    },
    reducers: {
        addToCard: (state, action) => {
            state.shoppingCart = [...state.shoppingCart, { ...action.payload, isAdd: true }]
        },
        loadUser: (state, action) => {
            state.datos ={...action.payload}
        },


    },
});

export const { addToCard, loadUser } = userSlice.actions
export default userSlice.reducer;