import {configureStore} from "@reduxjs/toolkit";
import {userSlices} from '../features/users/userSlices.jsx';

export const store = configureStore({
    reducer: {
        user: userSlices.reducer
    }
})