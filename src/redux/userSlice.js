import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        "id": 0,
        "username": "uuuu",
        "firstName": "",
        "lastName": "",
        "credit": 0,
        "Products":[]
    },
    reducers: {

    },
});

export default userSlice.reducer;