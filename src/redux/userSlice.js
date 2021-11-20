import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        "id": 0,
        "username": "uuuu",
        "firstName": "",
        "lastName": "",
        "credit": 0,
        "shoppingCart": []
    },
    reducers: {
        addToCard: (state, action) => {
            state.shoppingCart = [...state.shoppingCart, {...action.payload, isAdd:true }  ]}
    },
});

export const {addToCard} = userSlice.actions
export default userSlice.reducer;