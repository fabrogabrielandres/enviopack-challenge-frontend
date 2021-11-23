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
        addToCart: (state, action) => {
            state.shoppingCart = [...state.shoppingCart, { ...action.payload, isAdd: true }]
        },
        loadUser: (state, action) => {
            state.datos = { ...action.payload }
        },
        removeToCart: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter((item) =>
                (item.id !== action.payload.id) ? item : null
            )
        }



    },
});

export const { addToCart, loadUser, removeToCart } = userSlice.actions
export default userSlice.reducer;