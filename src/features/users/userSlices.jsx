import {createSlice} from "@reduxjs/toolkit";

export const userSlices = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        getUserList: (state, action) => {
            state.users = action.payload;
        },
        remove: (state, action) => {
            state.users = state.users.filter(item => item.id !== action.payload);
        }
    }
});
export const {getUserList, remove} = userSlices.actions;
// export default userSlices.reducer;